import { useState, useEffect } from 'react'
import Latest from '@/components/blog/latest-article'
import Category from '@/components/blog/article-category'
import List from '@/components/blog/article-list'
import Date from '@/components/blog/article-date'
import { fetchBetterArticles } from '@/services/blog'
import Pagination from '@/components/product/product-list/pagination'

import { FaSearch } from 'react-icons/fa'

export default function BlogIndex() {
  const [articless, setArticless] = useState([
    { id: 1, name: 'Default Product 1', price: 100 },
  ])

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const [startDate, setStartDate] = useState('01/01/1970')
  const [endDate, setEndDate] = useState('01/01/2050')
  const [selectedCategories, setSelectedCategories] = useState([])

  const handlePageChange = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  }

  useEffect(() => {
    // console.log('search:', search)
    // console.log('page:', page)
    // console.log('totalPages:', totalPages)
    // console.log('startDate:', startDate)
    // console.log('endDate:', endDate)
    // console.log('selectedCategories:', selectedCategories)
  }, [search, selectedCategories, page, totalPages, startDate, endDate])

  useEffect(() => {
    fetchBetterArticles(search, page, 4, startDate, endDate, selectedCategories)
      .then((response) => {
        // console.log(response.data) // 打印後端的回應
        return response.data
      })
      .then((data) => {
        if (data && data.data && data.data.articles) {
          setArticless(data.data.articles)
          setTotalPages(data.data.pageCount)
        } else {
          // 設置一個預設值或者顯示一個錯誤消息
          setArticless([])
          setTotalPages(0)
          console.error('No data returned from the server.')
        }
      })
  }, [search, page, startDate, endDate, selectedCategories])


  // function AirDatepickerReact(props) {
  //   let $input = useRef()
  //   let dp = useRef()

  //   useEffect(() => {
  //     dp.current = new AirDatepicker($input.current, { ...props })
  //   }, [props])

  //   useEffect(() => {
  //     dp.current.update({ ...props })
  //   }, [props])
  // }

  const handleCategoryClick = async (category) => {
    let newSelectedCategories

    // 如果該分類已經被選定，則取消選定它
    if (selectedCategories.includes(category)) {
      newSelectedCategories = selectedCategories.filter((c) => c !== category)
    } else {
      // 否則，選定該分類
      newSelectedCategories = [...selectedCategories, category]
    }

    setSelectedCategories(newSelectedCategories)
  }
  return (
    <>
      <div className="container db-none">
        <div className="row">
          <div className="col-3">
            {/* <div className="input-container">
              <input
                type="text"
                className="input-field"
                placeholder="請輸入關鍵字"
                style={{ flex: '1' }}
                onChange={(event) => setSearch(event.target.value)}
              />
              <FaSearch />
            </div> */}
            <div className="input-group">
            <input
              type="text"
              placeholder="請輸入關鍵字"
              className="form-control"
              style={{
                width: '150px',
                height: '40px',
                backgroundColor: 'white',
                borderColor: 'light-brown',
                flex: '1',
              }}
                onChange={(event) => setSearch(event.target.value)}
            />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
            <br />
            <div className="">
              <h6 className="article-sidebar pt-2">最新文章</h6>
              <Latest />
              <h6 className="article-sidebar pt-2">文章分類</h6>
              <Category
                // setPage={setPage}
                // articless={articless || []}
                // setSelectedCategories={setSelectedCategories}
                // selectedCategories={selectedCategories}
                handleCategoryClick={handleCategoryClick}
              />
              <h6 className="article-sidebar pt-2">日期區間</h6>
              <div>
                <Date
                  range={true}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="container ">
              <ul className="article-list">
                <List
                  articles={articless || []}
                  selectedCategories={selectedCategories}
                />
              </ul>
            </div>
            <Pagination
              key={page}
              totalPages={totalPages}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      {/* 390 */}

      <div className="container ds-none">
        <div className="">
          <div className="">
            {/* <div className="input-container">
              <input
                type="text"
                className="input-field"
                placeholder="請輸入關鍵字"
                style={{ flex: '1' }}
                onChange={(event) => setSearch(event.target.value)}
              />
              <FaSearch />
            </div> */}
            <div className="input-group">
            <input
              type="text"
              placeholder="請輸入關鍵字"
              className="form-control"
              style={{
                width: '150px',
                height: '40px',
                backgroundColor: 'white',
                borderColor: 'light-brown',
                flex: '1',
              }}
                onChange={(event) => setSearch(event.target.value)}
            />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
            <br />
            <div className="">
    
              <h6 className="article-sidebar article-sidebar-m pt-2">文章分類</h6>
              <Category
                // setPage={setPage}
                // articless={articless || []}
                // setSelectedCategories={setSelectedCategories}
                // selectedCategories={selectedCategories}
                handleCategoryClick={handleCategoryClick}
              />
              <h6 className="article-sidebar article-sidebar-m pt-2">日期區間</h6>
              <div className='article-date'>
                <Date
                  range={true}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="container ">
              <ul className="article-list">
                <List
                  articles={articless || []}
                  selectedCategories={selectedCategories}
                />
              </ul>
            </div>
          </div>
            <Pagination
              key={page}
              totalPages={totalPages}
              currentPage={page}
              onPageChange={handlePageChange}
            />
        </div>
      </div>
    </>
  )
}
