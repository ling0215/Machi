import axiosInstance from './axios-instance'

//抓2篇文章
export const fetchBetterArticlesHomepage = async (
  search = '',
  page = 1,
  perpage = 2,
  startDate = '01/01/1970',
  endDate = '01/01/2050',
  selectedCategories = []
) => {
  // 將選定的分類轉換為逗號分隔的字符串
  const categoriesString = selectedCategories.join(',')
  // console.log(categoriesString)

  return await axiosInstance.get(
    `/blog/articles/better?page=${page}&perpage=${perpage}&start=${startDate}&end=${endDate}&search=${encodeURIComponent(
      search
    )}&selectedCategories=${encodeURIComponent(categoriesString)}`
  )
}

//抓4個商品
export const getProductsHomepage = async (
  sort = 'date',
  order = 'desc',
  search = '',
  category = '',
  page = 1,
  perpage = 4,
  priceRange = 9000
) => {
  return await axiosInstance.get(
    `/products?page=${page}&perpage=${perpage}&sort=${sort}&order=${order}&min=0&max=${priceRange}&search=${encodeURIComponent(
      search
    )}&category=${encodeURIComponent(category)}`
  )
}

//抓4個課程
export const getCoursesHomepage = async (
  sort = 'date',
  order = 'desc',
  search = '',
  category = '',
  page = 1,
  perpage = 4,
  priceRange = 4000
) => {
  return await axiosInstance.get(
    `/course?page=${page}&perpage=${perpage}&sort=${sort}&order=${order}&min=0&max=${priceRange}&search=${encodeURIComponent(
      search
    )}&category=${encodeURIComponent(category)}`
  )
}
