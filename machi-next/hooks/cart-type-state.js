import React, { useState, useContext, createContext, useEffect } from 'react'
import {
  init,
  addOne,
  updateOne,
  removeOne,
  incrementOne,
  decrementOne,
} from './cart-type-state-reducer'
import {
  fetchCart,
  updateCartItem,
  removeFromCart,
  addToCart,
} from '@/services/cart'
import { useAuth } from '@/hooks/use-auth'

const CartContext = createContext(null)

export const CartTypeProvider = ({ children }) => {
  const [addingItem, setAddingItem] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartState, setCartState] = useState(init([]))
  const [error, setError] = useState(null)
  const { auth } = useAuth()
  console.log(auth)
  const [formattedCartItems, setFormattedCartItems] = useState([])
  const [cartUpdated, setCartUpdated] = useState(false)

  useEffect(() => {
    const loadCartData = async () => {
      if (auth.userData && auth.userData.user_id) {
        try {
          const data = await fetchCart(auth.userData.user_id)
          if (data.error) {
            setError('获取购物车数据失败')
          } else {
            setFormattedCartItems(data || [])
            setCartState(init(data || []))
          }
        } catch (error) {
          setError('加载购物车数据失败')
          console.error(error)
        }
      }
    }

    loadCartData()
  }, [auth.userData, cartUpdated])

  useEffect(() => {
    if (formattedCartItems.items && Array.isArray(formattedCartItems.items)) {
      const newFormattedCartItems = formattedCartItems.items
        .map((item) => {
          if (item.product_id_fk) {
            return {
              uid: auth.userData.user_id,
              id: item.product_id_fk,
              quantity: item.product_count,
              price: item.product_price,
              name: item.product_name,
              image: `/images/product/card/${item.product_id_fk}1.jpg`,
              type: 'product',
              specification: item.product_subtitle,
            }
          } else if (item.course_id_fk) {
            return {
              uid: auth.userData.user_id,
              id: item.course_id_fk,
              quantity: item.course_count,
              price: item.course_price,
              name: item.course_name,
              image: `/images/course/slide/${item.course_id_fk}_1.jpg`,
              type: 'course',
              course_date: item.course_date,
              course_address: item.course_address,
            }
          } else if (item.cart_item_id) {
            return {
              uid: auth.userData.user_id,
              id: item.cart_item_id,
              quantity: item.custom_count,
              price: item.custom_price,
              name: '自訂商品',
              image: item.custom_img,
              type: 'custom',
              specification: `${item.custom_size},${item.custom_layer},${item.custom_flavor},${item.custom_decor}`,
            }
          }
          return null
        })
        .filter((item) => item !== null)
      setCartItems(newFormattedCartItems)
    }
  }, [formattedCartItems])

  useEffect(() => {
    setCartState(init(cartItems))
  }, [cartItems])

  const addItem = async (item) => {
    if (!auth.userData || !auth.userData.user_id) {
      console.error('User data is not available')
      return
    }

    if (addingItem) {
      console.warn('Add item operation is already in progress')
      return
    }

    setAddingItem(true)

    let userId = auth.userData.user_id
    let newItem = {}
    console.log(item)
    if (item.product_id_fk) {
      newItem = {
        uid: userId,
        id: item.product_id_fk,
        quantity: item.product_count,
        price: item.product_price,
        name: item.product_name,
        subtitle: item.product_subtitle,
        type: 'product',
      }
    } else if (item.course_id_fk) {
      newItem = {
        uid: userId,
        id: item.course_id_fk,
        quantity: item.course_count,
        price: item.course_price,
        name: item.course_name,
        image: '',
        type: 'course',
        course_date: item.course_date,
        course_address: item.course_address,
      }
    } else if (item.custom_price) {
      newItem = {
        uid: userId,
        quantity: item.custom_count,
        price: item.custom_price,
        size: item.custom_size,
        layer: item.custom_layer,
        flavor: item.custom_flavor,
        decor: item.custom_decor,
        custom_img: `http://localhost:3005/customize/${item.custom_img}.jpg`,
        type: 'custom',
      }
    }

    const cartItem = cartItems.find(
      (cartItem) =>
        cartItem.uid === newItem.uid &&
        (newItem.type !== 'custom'
          ? parseInt(cartItem.id) === parseInt(newItem.id)
          : true) &&
        cartItem.type === newItem.type &&
        cartItem.price === newItem.price &&
        (newItem.type == 'custom' ? cartItem.size === newItem.size : true) &&
        (newItem.type == 'custom' ? cartItem.layer === newItem.layer : true) &&
        (newItem.type == 'custom'
          ? cartItem.flavor === newItem.flavor
          : true) &&
        (newItem.type == 'custom' ? cartItem.decor === newItem.decor : true)
    )

    if (cartItem) {
      const newQuantity = cartItem.quantity + newItem.quantity
      const itemId = cartItem.id

      const response = await updateCartItem(
        newItem.uid,
        itemId,
        newQuantity,
        newItem.type
      )
      console.log(response)
      setCartItems(updateOne(cartItems, { ...cartItem, quantity: newQuantity }))
      setCartUpdated((prev) => !prev)
      setAddingItem(false)
      return
    } else {
      const response = await addToCart(newItem.uid, newItem)
      console.log(response)
    }
    console.log(newItem)
    setCartItems(addOne(cartItems, newItem))
    setCartUpdated((prev) => !prev)
    setAddingItem(false)
  }

  const removeItem = async (uid, id, type) => {
    const item = cartItems.find(
      (item) => item.id === id && item.type === type && item.uid === uid
    )
    if (!item) {
      console.error('Item not found in cart:', { uid, id, type })
      return
    }

    const response = await removeFromCart(uid, id, type)
    if (response.error) {
      console.error('Failed to remove item from cart:', response.error)
    } else {
      setCartItems((prevItems) => removeOne(prevItems, uid, id, type))
      setCartUpdated((prev) => !prev)
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  const increment = async (uid, id, type) => {
    const item = cartItems.find(
      (item) => item.id === id && item.type === type && item.uid === uid
    )
    if (!item) {
      console.error('Item not found in cart')
      return
    }

    const newQuantity = item.quantity + 1

    const response = await updateCartItem(uid, id, newQuantity, type)
    if (response.error) {
      console.error('Failed to increment item quantity:', response.error)
    } else {
      setCartItems(incrementOne(uid, cartItems, id, type))
      setCartUpdated((prev) => !prev)
    }
  }

  const decrement = async (uid, id, type) => {
    const item = cartItems.find(
      (item) => item.id === id && item.type === type && item.uid === uid
    )
    if (!item) {
      console.error('Item not found in cart')
      return
    }

    const newQuantity = item.quantity - 1

    const response = await updateCartItem(uid, id, newQuantity, type)
    if (response.error) {
      console.error('Failed to decrement item quantity:', response.error)
    } else {
      setCartItems(decrementOne(uid, cartItems, id, type))
      setCartUpdated((prev) => !prev)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        items: cartItems,
        addItem,
        removeItem,
        clearCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
