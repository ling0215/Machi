import express from 'express'
import { Op, or } from 'sequelize'
const router = express.Router()

// 检查空物件, 转换req.params为数字
import { getIdParam } from '#db-helpers/db-tool.js'
import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'

const { Order, OrderItem } = sequelize.models

//獲取訂單項目
router.get('/orderItems', authenticate, async (req, res) => {
  const orderId = req.query.oid

  try {
    const orderItems = await OrderItem.findAll({
      where: {
        order_id_fk: orderId,
      },
    })

    if (orderItems) {
      res.json(orderItems)
    } else {
      res.status(404).send('No order items found for the given order ID')
    }
  } catch (error) {
    console.error('Error fetching order items:', error)
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    })
  }
})

// GET - 獲取訂單
router.get('/better', async (req, res) => {
  const {
    userId, // 新增的查詢參數
    start = '01/01/1970',
    end = '01/01/2050',
    selectedStatus = '',
  } = req.query

  const genConcatRegexp = (param, column) => {
    return sequelize.where(
      sequelize.fn('CONCAT', ',', sequelize.col(column), ','),
      {
        [Op.regexp]: `,(${param.split(',').join('|')}),`,
      }
    )
  }

  const genClause = (key, value) => {
    switch (key) {
      case 'userId':
        return {
          user_id_fk: value,
        }
      case 'selectedStatus':
        if (value === '已完成') {
          return {
            order_status: value,
          }
        } else {
          return {
            order_status: {
              [Op.not]: '已完成',
            },
          }
        }
      case 'date': {
        const startDate = new Date(start)
        const endDate = new Date(end)
        endDate.setDate(endDate.getDate() + 1)
        endDate.setSeconds(endDate.getSeconds() - 1)
        return {
          order_createtime: {
            [Op.between]: [startDate, endDate],
          },
        }
      }
      default:
        return ''
    }
  }

  const conditions = []

  if (userId) {
    conditions.push(genClause('userId', userId))
  }

  if (selectedStatus) {
    conditions.push(genClause('selectedStatus', selectedStatus))
  }

  if (start) {
    conditions.push(genClause('date', [start, end]))
  }

  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 16
  const offset = (page - 1) * perpage
  const limit = perpage

  const orderDirection = 'DESC'
  const sortField = 'order_createtime'
  const orderArray = [[sortField, orderDirection]]

  try {
    const { count, rows } = await Order.findAndCountAll({
      where: { [Op.and]: conditions },
      raw: true,
      offset,
      limit,
      order: orderArray,
    })

    if (req.query.raw === 'true') {
      return res.json(rows)
    }

    const pageCount = Math.ceil(count / Number(perpage)) || 0

    res.json({
      total: count,
      pageCount,
      page,
      perpage,
      orders: rows,
    })
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    })
  }
})

//創建訂單
router.post('/', async (req, res) => {
  try {
    const userId = req.query.user_id // 从查询参数中获取用户 ID

    // 创建订单
    const order = await Order.create({
      user_id_fk: req.body.data.data.user_id_fk,
      order_payment: req.body.data.data.payment,
      order_username: req.body.data.data.username,
      order_address: req.body.data.data.address,
      order_phone: req.body.data.data.phone,
      order_amount: req.body.data.data.amount,
      order_total: req.body.data.data.total,
    })

    // 获取订单项数据
    const orderItemsData = req.body.data.items // 假设订单项的数据在这个数组中

    // 为每个订单项添加order_id_fk字段
    const orderItems = orderItemsData.map((item) => ({
      order_id_fk: order.order_id, // 使用生成的order.id
      order_product_type: item.product_type,
      order_product_id: item.product_id,
      order_product_name: item.product_name,
      order_product_detail: item.product_detail,
      order_product_count: item.product_count,
      order_product_price: item.product_price,
    }))

    // 创建OrderItem
    const createdOrderItems = await OrderItem.bulkCreate(orderItems) // 使用 bulkCreate 一次性创建多个 OrderItem

    // 返回成功响应
    res.json({ status: 'success', data: order, items: createdOrderItems })
  } catch (error) {
    // 捕获并处理错误
    console.error('Error creating order and order items:', error)
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    })
  }
})

export default router
