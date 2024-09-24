import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'
const { ProductFavorite } = sequelize.models

// 獲得某會員id的有加入到我的最愛清單中的商品id們
// 此路由只有登入會員能使用
router.get('/', authenticate, async (req, res) => {
  const pids = await ProductFavorite.findAll({
    attributes: ['product_id_fk'],
    where: {
      user_id_fk: req.user.user_id,
    },
    raw: true, //只需要資料
  })

  // 將結果中的pid取出變為一個純資料的陣列
  const favorites = pids.map((v) => v.product_id_fk)

  res.json({ status: 'success', data: { favorites } })
})

router.put('/:id', authenticate, async (req, res, next) => {
  const pid = getIdParam(req)
  const uid = req.user.user_id
  console.log(pid, uid)

  const existFav = await ProductFavorite.findOne({
    where: {
      product_id_fk: pid,
      user_id_fk: uid,
    },
  })
  //console.log(existFav)
  if (existFav) {
    return res.json({ status: 'error', message: '資料已經存在，新增失敗' })
  }

  const newFav = await ProductFavorite.create({
    product_id_fk: pid,
    user_id_fk: uid,
  })

  console.log(newFav.product_id_fk)

  // 沒有新增到資料
  if (!newFav.product_id_fk) {
    return res.json({
      status: 'error',
      message: '新增失敗',
    })
  }

  return res.json({ status: 'success', data: null })
})

router.delete('/:id', authenticate, async (req, res, next) => {
  const pid = getIdParam(req)
  const uid = req.user.user_id

  console.log(pid, uid)
  const affectedRows = await ProductFavorite.destroy({
    where: {
      product_id_fk: pid,
      user_id_fk: uid,
    },
  })

  // 沒有刪除到任何資料 -> 失敗或沒有資料被刪除
  if (!affectedRows) {
    return res.json({
      status: 'error',
      message: '刪除失敗',
    })
  }

  // 成功
  return res.json({ status: 'success', data: null })
})

export default router
