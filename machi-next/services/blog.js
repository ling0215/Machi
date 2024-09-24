import axiosInstance from './axios-instance'

export const publish = async (publishData = {}) => {
  return await axiosInstance.post('/blog/publish', publishData)
}

export function upload(file) {
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('articleImage', file)
    axiosInstance
      .post('/blog/upload', formData)
      .then((response) => {
        console.log(response)
        return response.data
      })
      .then((result) => {
        console.log(`upload result : ${result.url}`)
        resolve({
          default: result.url,
        })
      })
      .catch(reject)
  })
}

export const fetchArticles = async () => {
  const response = await axiosInstance.get('/blog/articles')
  if (response.status !== 200) {
    console.error('Failed to fetch articles:', response.statusText)
    return
  }
  return response.data
}

export const fetchBetterArticles = async (
  search = '',
  page = 1,
  perpage = 4,
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
//特定文章
export const fetchRawArticle = async (url = 0) => {
  try {
    const response = await axiosInstance.get(`/blog/${url}`)
    if (response.status === 200) {
      const article = response.data
      // console.log('User name:', article.user_id) // 打印 User 的名稱
      return article
    } else {
      console.error('Failed to fetch article:', response.statusText)
      return []
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    return []
  }
}
//儲存留言
export function postMessage(message) {
  return axiosInstance.post('/blog/commit', { message })
}

// 獲取文章的留言
export const fetchComments = async (articleId) => {
  try {
    const response = await axiosInstance.get(
      `/blog/comments/${articleId}` // 修改這裡
    )
    return response.data
  } catch (error) {
    console.error(error)
    return [] // 返回一個空陣列，以防發生錯誤
  }
}

