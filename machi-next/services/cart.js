import axiosInstance from './axios-instance'
import useSWR from 'swr'

// 从服务器获取购物车数据的函数
// 修改 fetchCart 函数以接受 user_id 参数
export const fetchCart = async (userId) => {
  return axiosInstance
    .get(`/cart?user_id=${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error('获取购物车数据时出错:', userId, error)
      return { error }
    })
}

// 添加商品到购物车的函数 整理中
export const addToCart = async (uid, data) => {
  return axiosInstance
    .post(`/cart?uid=${uid}`, { data })
    .then((res) => res.data)
    .catch((error) => {
      console.error('添加到购物车时出错:', error)
      return { error }
    })
}

// 更新购物车中商品数量的函数
export const updateCartItem = async (uid, itemId, quantity, type) => {
  return axiosInstance
    .put(`/cart`, { id: itemId, quantity: quantity, type: type, uid }) // 确保传递所有必要的参数
    .then((res) => res.data)
    .catch((error) => {
      console.error('更新购物车项目时出错:' + itemId, error)
      return { error }
    })
}

// 从购物车中移除商品的函数 測試中
export const removeFromCart = async (userId, itemId, itemType) => {
  return axiosInstance
    .delete(`/cart?uid=${userId}&id=${itemId}&type=${itemType}`) // 使用查询字符串传递 itemId 和 itemType
    .then((res) => res.data)
    .catch((error) => {
      console.error('从购物车移除项目时出错:', error)
      return { error }
    })
}

export const addToOrder = async (id, data) => {
  return axiosInstance
    .post(`/order?user_id=${id}`, { data })
    .then((res) => res.data)
    .catch((error) => {
      console.error('添加到訂單时出错:', error)
      return { error }
    })
}

//樓下是所需add body範例(商品跟課程)
// {
//   "data": {
//     "type": "product",
//     "id": 1,
//     "name": "Sample Product",
//     "price": 100,
//     "quantity": 2,
//     "product_subtitle": "Sample Subtitle"
//   }
// }
//樓下是所需add body範例(客製化)
// {
//   "data": {
//     "type": "custom",
//     "price": 300,
//     "quantity": 3,
//     "custom_size": "Large",
//     "custom_layer": "Double",
//     "custom_decor": "Sprinkles",
//     "custom_flavor": "Chocolate"
//   }
// }

// // 自定义钩子，用于管理和访问购物车数据
// export function useCartUpdate() {
//   const { data, error, mutate } = useSWR('/cart', fetchCart)

//   // 刷新购物车数据的函数
//   const refreshCart = () => {
//     mutate()
//   }

//   return {
//     cartItems: data?.items || [],
//     total: data?.total || 0,
//     error,
//     refreshCart,
//   }
// }
