import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 資料庫使用
import sequelize from '#configs/db.js'
const { Product } = sequelize.models
import { QueryTypes, Op } from 'sequelize'

/* 
測試連結:
/products?page=3&perpage=10&brand_ids=1,2,4&cat_ids=4,5,6,10,11,12&color_ids=1,2&size_ids=2,3&tag_ids=1,2,4&name_like=e&price_gte=1500&price_lte=10000&sort=price&order=asc
*/

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
          product_name: {
            [Op.like]: `%${value}%`,
          },
        }
      case 'category':
        return {
          product_category: {
            [Op.eq]: value,
          },
        }
      case 'price': // 新增的條件
        return {
          product_price_small: {
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

  console.log(conditions)

  // 分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 16
  const offset = (page - 1) * perpage
  const limit = perpage

  // 排序用
  const orderDirection = order || 'ASC'
  const sortMap = {
    date: 'product_createtime',
    price: 'product_price_small',
  }
  const sortField = sortMap[sort] || 'product_createtime'
  const orderArray = [[sortField, orderDirection]]

  // 避免sql查詢錯誤導致後端當掉，使用try/catch語句
  try {
    const { count, rows } = await Product.findAndCountAll({
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

    // const data = {
    //   total: count,
    //   pageCount,
    //   page,
    //   perpage,
    //   products: rows,
    // }

    // console.log(data)

    return res.json({
      status: 'success',
      data: {
        total: count,
        pageCount,
        page,
        perpage,
        products: rows,
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

router.get('/:id', async (req, res) => {
  const pid = req.params.id // 從路由參數中獲取文章的 ID
  try {
    const product = await Product.findByPk(pid) // 使用文章 ID 查詢單筆文章資料
    if (!product) {
      // 如果找不到文章，返回 404 錯誤
      return res.status(404).json({ message: '文章不存在' })
    }
    // 如果找到文章，以 JSON 格式返回
    res.status(200).json(product)
  } catch (error) {
    console.error('處理過程中發生錯誤:', error)
    res.status(500).json({ message: '伺服器錯誤' })
  }
})

// 獲得所有資料，加入分頁與搜尋字串功能，單一資料表處理
// products/qs?page=1&keyword=Ele&brand_ids=1&cat_ids=4,5,6,7,8&sizes=1,2&tags=3,4&colors=1,2&orderby=id,asc&perpage=10&price_range=1500,10000
// router.get('/qs', async (req, res, next) => {
//   // 獲取網頁的搜尋字串
//   const {
//     page,
//     keyword,
//     brand_ids,
//     cat_ids,
//     colors,
//     tags,
//     sizes,
//     orderby,
//     perpage,
//     price_range,
//   } = req.query

//   // TODO: 這裡可以檢查各query string正確性或給預設值，檢查不足可能會產生查詢錯誤

//   // 建立資料庫搜尋條件
//   const conditions = []

//   // 關鍵字，keyword 使用 `name LIKE '%keyword%'`
//   conditions[0] = keyword ? `name LIKE '%${keyword}%'` : ''

//   // 品牌，brand_ids 使用 `brand_id IN (4,5,6,7)`
//   conditions[1] = brand_ids ? `brand_id IN (${brand_ids})` : ''

//   // 分類，cat_ids 使用 `cat_id IN (1, 2, 3, 4, 5)`
//   conditions[2] = cat_ids ? `cat_id IN (${cat_ids})` : ''

//   // 顏色: FIND_IN_SET(1, color) OR FIND_IN_SET(2, color)
//   conditions[3] = getFindInSet(colors, 'color')

//   // 標籤: FIND_IN_SET(3, tag) OR FIND_IN_SET(2, tag)
//   conditions[4] = getFindInSet(tags, 'tag')

//   // 尺寸: FIND_IN_SET(3, size) OR FIND_IN_SET(2, size)
//   conditions[5] = getFindInSet(sizes, 'size')

//   // 價格
//   conditions[6] = getBetween(price_range, 'price', 1500, 10000)

//   // 各條件為AND相接(不存在時不加入where從句中)
//   const where = getWhere(conditions, 'AND')

//   // 排序用，預設使用id, asc
//   const order = getOrder(orderby)

//   // 分頁用
//   // page預設為1，perpage預設為10
//   const perpageNow = Number(perpage) || 10
//   const pageNow = Number(page) || 1
//   const limit = perpageNow
//   // page=1 offset=0; page=2 offset= perpage * 1; ...
//   const offset = (pageNow - 1) * perpageNow

//   const sqlProducts = `SELECT * FROM product ${where} ${order} LIMIT ${limit} OFFSET ${offset}`
//   const sqlCount = `SELECT COUNT(*) AS count FROM product ${where}`

//   console.log(sqlProducts.bgWhite)

//   const products = await sequelize.query(sqlProducts, {
//     type: QueryTypes.SELECT, //執行為SELECT
//     raw: true, // 只需要資料表中資料
//   })

//   const data = await sequelize.query(sqlCount, {
//     type: QueryTypes.SELECT, //執行為SELECT
//     raw: true, // 只需要資料表中資料
//     plain: true, // 只需一筆資料
//   })

//   // 查詢
//   // const total = await countWithQS(where)
//   // const products = await getProductsWithQS(where, order, limit, offset)

//   // json回傳範例
//   //
//   // {
//   //   total: 100,
//   //   perpage: 10,
//   //   page: 1,
//   //   data:[
//   //     {id:123, name:'',...},
//   //     {id:123, name:'',...}
//   //   ]
//   // }

//   const result = {
//     total: data.count,
//     perpage: Number(perpage),
//     page: Number(page),
//     data: products,
//   }

//   res.json(result)
// })

// 獲得單筆資料
router.get('/:id', async (req, res, next) => {
  // 轉為數字
  const id = getIdParam(req)

  // 只會回傳單筆資料
  const product = await Product.findByPk(id, {
    raw: true, // 只需要資料表中資料
  })

  return res.json({ status: 'success', data: { product } })
})

// 獲得所有資料(測試用，不適合資料太多使用)
// router.get('/', async (req, res, next) => {
//   const products = await Product.findAll({ raw: true })
//   res.json({ status: 'success', data: { products } })
// })

export default router
