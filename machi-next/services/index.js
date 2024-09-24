import axiosInstance from './axios-instance'

/**
 * 載入商品的資料，一般的axios使用get方式
 */
export const fetchCategory = async () => {
  const response = await axiosInstance.get('/category')
  if (response.status !== 200) {
    console.error('Failed to fetch category', response.statusText)
    return
  }
  return response.data
}