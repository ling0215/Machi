import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'
const { ProductFavorite } = sequelize.models
const { Course } = sequelize.models
const { Product } = sequelize.models
import { QueryTypes, Op } from 'sequelize'

// 獲得某會員id的有加入到我的最愛清單中的商品id們
// 此路由只有登入會員能使用
router.get('/', authenticate, async (req, res) => {
  const pids = await ProductFavorite.findAll({
    attributes: ['product_favorite_id'],
    where: {
      user_id_fk: req.user.user_id,
    },
    raw: true, //只需要資料
  })

  // 將結果中的pid取出變為一個純資料的陣列
  const favorites = pids.map((v) => v.pid)

  res.json({ status: 'success', data: { favorites } })
})

router.put('/:id', authenticate, async (req, res, next) => {
  const pid = getIdParam(req)
  const uid = req.user.id

  const existFav = await ProductFavorite.findOne({ where: { pid, uid } })
  if (existFav) {
    return res.json({ status: 'error', message: '資料已經存在，新增失敗' })
  }

  const newFav = await ProductFavorite.create({ pid, uid })

  // console.log(newFav.id)

  // 沒有新增到資料
  if (!newFav.id) {
    return res.json({
      status: 'error',
      message: '新增失敗',
    })
  }

  return res.json({ status: 'success', data: null })
})

router.delete('/:id', authenticate, async (req, res, next) => {
  const pid = getIdParam(req)
  const uid = req.user.id

  const affectedRows = await ProductFavorite.destroy({
    where: {
      pid,
      uid,
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

//獲得收藏商品
router.get('/productsByIds', async (req, res) => {
  const { ids } = req.query
  const productIds = ids ? ids.split(',').map(Number) : []

  try {
    const products = await Product.findAll({
      where: {
        product_id: {
          [Op.in]: productIds,
        },
      },
    })

    return res.json({
      status: 'success',
      data: products,
    })
  } catch (e) {
    console.log(e)

    return res.json({
      status: 'error',
      message: '無法查詢到資料，查詢字串可能有誤',
    })
  }
})

//獲得收藏課程
router.get('/coursesByIds', async (req, res) => {
  const { ids } = req.query
  const courseIds = ids ? ids.split(',').map(Number) : []

  try {
    const courses = await Course.findAll({
      where: {
        course_id: {
          [Op.in]: courseIds,
        },
      },
    })

    return res.json({
      status: 'success',
      data: courses,
    })
  } catch (e) {
    console.log(e)

    return res.json({
      status: 'error',
      message: '無法查詢到資料，查詢字串可能有誤',
    })
  }
})

export default router
