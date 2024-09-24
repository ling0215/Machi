import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 資料庫使用
import sequelize from '#configs/db.js'
const { Course } = sequelize.models
import { QueryTypes, Op } from 'sequelize'

// GET 獲得所有資料，加入分頁與搜尋字串功能，單一資料表處理
router.get('/', async (req, res) => {
  const {
    sort = 'date', // string, 排序欄位 用於 ORDER BY
    order = 'desc', // string, 排序順序 用於 ORDER BY 'asc' | 'desc', 預設為'desc'
    search = '', // string, 對應 name 欄位, `name LIKE '%search%'`
    category = '', // string`
    min = 0, // 新增的查詢參數
    max = 3000, // 新增的查詢參數
  } = req.query

  // !!注意: 以下都要檢查各query參數值的正確性，或給定預設值，要不然可能會產生資料庫查詢錯誤
  // 建立例如: `CONCAT(",", color, ",") REGEXP ",(1|2),"`
  const genConcatRegexp = (param, column) => {
    return sequelize.where(
      sequelize.fn('CONCAT', ',', sequelize.col(column), ','),
      {
        [Op.regexp]: `,(${param.split(',').join('|')}),`,
      }
    )
  }

  // 建立各where條件從句用
  const genClause = (key, value) => {
    switch (key) {
      case 'search':
        return {
          course_name: {
            [Op.like]: `%${value}%`,
          },
        }
      case 'category':
        return {
          course_category: {
            [Op.eq]: value,
          },
        }
      case 'price': // 新增的條件
        return {
          course_price: {
            [Op.between]: [min, max],
          },
        }
      default:
        return ''
    }
  }

  // where各條件(以AND相連)
  const conditions = []

  if (search) {
    conditions.push(genClause('search', search))
  }

  if (category) {
    conditions.push(genClause('category', category))
  }

  if (min && max) {
    // 如果有提供 min 和 max 參數，則添加價格過濾條件
    conditions.push(genClause('price', [min, max]))
  }

  // 分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 16
  const offset = (page - 1) * perpage
  const limit = perpage

  // 排序用
  const orderDirection = order || 'ASC'
  const sortMap = {
    date: 'course_start_time',
    price: 'course_price',
  }
  const sortField = sortMap[sort] || 'course_start_time'
  const orderArray = [[sortField, orderDirection]]

  // 避免sql查詢錯誤導致後端當掉，使用try/catch語句
  try {
    const { count, rows } = await Course.findAndCountAll({
      where: { [Op.and]: conditions },
      raw: true, // 只需要資料表中資料,
      // logging: (msg) => console.log(msg.bgWhite),
      offset,
      limit,
      order: orderArray,
    })

    if (req.query.raw === 'true') {
      return res.json(rows)
    }

    // 計算總頁數
    const pageCount = Math.ceil(count / Number(perpage)) || 0

    return res.json({
      status: 'success',
      data: {
        total: count,
        pageCount,
        page,
        perpage,
        courses: rows,
      },
    })
  } catch (e) {
    console.log(e)

    return res.json({
      status: 'error',
      message: '無法查詢到資料，查詢字串可能有誤',
    })
  }
})

// 獲得單筆資料
router.get('/:id', async (req, res, next) => {
  // 轉為數字
  const id = getIdParam(req)

  // 只會回傳單筆資料
  const course = await Course.findByPk(id, {
    raw: true, // 只需要資料表中資料
  })

  return res.json({ status: 'success', data: { course } })
})

export default router
