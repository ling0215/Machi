import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'

const { CartItem } = sequelize.models

// 獲得某會員id的有加入到購物清單中的商品id們
// 此路由只有登入會員能使用
router.get('/', async (req, res) => {
  try {
    const userId = req.query.user_id // 从查询参数中获取用户 ID
    const cartItems = await CartItem.findAll({
      where: {
        user_id_fk: userId, // 使用用户 ID 作为过滤条件
      },
    })
    res.json({ status: 'success', items: cartItems })
  } catch (error) {
    console.error('Error fetching cart items:', error)
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

// 更新購物車

router.put('/', authenticate, async (req, res) => {
  try {
    const userId = parseInt(req.body.uid)
    const itemId = parseInt(req.body.id) // 從URL參數中取得商品ID
    const newQuantity = parseInt(req.body.quantity) // 從請求體中取得新的商品數量
    const newType = String(req.body.type) // 從請求體中取得類型

    // 檢查數量有效性
    if (!newQuantity || newQuantity < 1) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Invalid quantity provided' })
    }

    // 根據 newType 確定要更新的欄位名稱
    let fieldCount
    let fieldType
    switch (newType) {
      case 'product':
        fieldCount = 'product_count'
        fieldType = 'product_id_fk'
        break
      case 'course':
        fieldCount = 'course_count'
        fieldType = 'course_id_fk'
        break
      case 'custom':
        fieldCount = 'custom_count'
        fieldType = 'cart_item_id'
        break
      default:
        return res
          .status(400)
          .json({ status: 'error', message: 'Invalid type provided' })
    }

    // 更新資料庫
    const updatedItem = await CartItem.update(
      { [fieldCount]: newQuantity },
      {
        where: {
          [fieldType]: itemId,
          user_id_fk: userId,
        },
      }
    )

    // 檢查更新是否成功
    if (updatedItem[0] > 0) {
      res.json({
        status: 'success',
        message: `${fieldType} updated successfully`,
      })
    } else {
      res.status(404).json({ status: 'error', message: 'Cart item not found' })
    }
  } catch (error) {
    console.error('Error updating cart item:', error)
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

//刪除購物車一筆資料
router.delete('/', authenticate, async (req, res) => {
  try {
    const itemId = parseInt(req.query.id)
    const newType = String(req.query.type)
    const userId = parseInt(req.query.uid)
    console.log(itemId)
    if (isNaN(itemId) || itemId <= 0) {
      // 合併檢查，並確保 ID 大於 0
      return res
        .status(400)
        .json({ status: 'error', message: 'Invalid item ID provided' })
    }

    let fieldName
    switch (newType) {
      case 'product':
        fieldName = 'product_id_fk'
        break
      case 'course':
        fieldName = 'course_id_fk'
        break
      case 'custom':
        fieldName = 'cart_item_id'
        break
      default:
        return res
          .status(400)
          .json({ status: 'error', message: 'Invalid type provided' })
    }

    const result = await CartItem.destroy({
      where: { [fieldName]: itemId, user_id_fk: userId },
    })

    if (result > 0) {
      res.json({ status: 'success', message: 'Cart item deleted successfully' })
    } else {
      res.status(404).json({ status: 'error', message: 'Cart item not found' })
    }
  } catch (error) {
    console.error('Error deleting cart item:', error)
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

//加入購物車
router.post('/', authenticate, async (req, res) => {
  try {
    const userId = parseInt(req.query.uid)

    const cartItem = req.body.data
    const newType = String(cartItem.type)

    //  共通參數
    let fieldId
    let fieldName
    let fieldPrice
    let fieldQuantity

    switch (newType) {
      case 'product':
        fieldId = 'product_id_fk'
        fieldName = 'product_name'
        fieldPrice = 'product_price'
        fieldQuantity = 'product_count'
        break
      case 'course':
        fieldId = 'course_id_fk'
        fieldName = 'course_name'
        fieldPrice = 'course_price'
        fieldQuantity = 'course_count'

        break
      case 'custom':
        fieldPrice = 'custom_price'
        fieldQuantity = 'custom_count'

        break
      default:
        return res
          .status(400)
          .json({ status: 'error', message: 'type傳輸有誤' })
    }

    const addItemData = {
      [fieldPrice]: cartItem.price,
      [fieldQuantity]: cartItem.quantity,
      user_id_fk: userId,
    }

    if (newType !== 'custom') {
      addItemData[fieldId] = cartItem.id
      addItemData[fieldName] = cartItem.name
    }

    if (newType === 'course') {
      addItemData.course_address = cartItem.course_address
      addItemData.course_date = cartItem.course_date
    }

    if (newType === 'product') {
      addItemData.product_subtitle = cartItem.subtitle
    }

    if (newType === 'custom') {
      addItemData.custom_size = cartItem.size
      addItemData.custom_layer = cartItem.layer
      addItemData.custom_decor = cartItem.decor
      addItemData.custom_flavor = cartItem.flavor
      addItemData.custom_img = cartItem.custom_img
    }

    const adddItem = await CartItem.create(addItemData)

    if (adddItem) {
      res.json({
        status: 'success',
        message: 'UserId:' + userId + ',Cart item add successfully',
      })
    } else {
      res.status(404).json({ status: 'error', message: 'Cart item not found' })
    }
  } catch (error) {
    console.error('Error updating cart item:', error)
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

export default router
