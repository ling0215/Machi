// ProductPage.js
import React, { useState, useEffect } from 'react'
import CourseList from '@/components/course/course-list/courselist'
import SearchBar from '@/components/course/course-list/search-bar'
import Sidebar from '@/components/course/course-list/side-bar'
import Pagination from '@/components/course/course-list/pagination'
import { getCourses } from '@/services/course' // 請根據實際路徑進行調整
import CourseCard from '@/components/course/course-list/course-card'
import CourseCard1 from '@/components/course/course-card/classcard1'
import { addFav, removeFav, getFavs } from '@/services/user'
import { AuthProvider, useAuth } from '@/hooks/use-auth'

export default function CoursePage() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Default Course 1', price: 100 },
  ])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [priceRange, setPriceRange] = useState(4000)

  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('')
  const [view, setView] = useState('')

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  //我的最愛
  
  

  // 狀態觀察
  useEffect(() => {
    console.log('Search:', search)
    console.log('Category:', category)
    console.log('Price Range:', priceRange)
    console.log('Sort:', sort)
    console.log('Order:', order)
    console.log('View:', view)
    console.log('Page:', page)
    console.log('Total Pages:', totalPages)
  }, [
    courses,
    search,
    category,
    priceRange,
    sort,
    order,
    view,
    page,
    totalPages,
  ])

  const [isCourseCard1View, setIsCourseCard1View] = useState(false);

  const handleCourseCardView = () => {
    setIsCourseCard1View(false);
  };

  const handleCourseCard1View = () => {
    setIsCourseCard1View(true);
  };

  useEffect(() => {
    getCourses(sort, order, search, category, page, 16, priceRange)
      .then((response) => {
        console.log(response.data) // 打印後端的回應
        return response.data
      })
      .then((data) => {
        if (data && data.data && data.data.courses && data.data.pageCount) {
          setCourses(data.data.courses)
          setTotalPages(data.data.pageCount)
        } else {
          // 設置一個預設值或者顯示一個錯誤消息
          setCourses([])
          setTotalPages(0)
          console.error('No data returned from the server.')
        }
      })
  }, [search, category, sort, order, page, priceRange])
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSortChange = (sortField) => {
    setSort(sortField)
  }
  const handleOrderChange = (sortOrder) => {
    setOrder(sortOrder)
  }

  return (
    <div>
    <div className="row mt-2 mb-3">
        <h5 className="card-text d-flex justify-content-between align-items-center">
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
                }}
                onChange={handleSearchChange}
              />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </h5>
      </div>
      <div className="d-flex p-2 justify-content-end align-items-center">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            排序依據
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => {
                  handleSortChange('date')
                  handleOrderChange('desc')
                }}
              >
                最新
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => {
                  handleSortChange('price')
                  handleOrderChange('desc')
                }}
              >
                價格：由高至低
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => {
                  handleSortChange('price')
                  handleOrderChange('asc')
                }}
              >
                價格：由低至高
              </a>
            </li>
          </ul>
        </div>
        <div className="viewtype">
          <button
            className="btn"
            id="gridview"
            onClick={handleCourseCardView}
          >
            <i className="bi bi-grid"></i>
          </button>
          <button className="btn" id="listview" onClick={handleCourseCard1View}>
        <i className="bi bi-list"></i>
      </button>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <Sidebar setCategory={setCategory} setPriceRange={setPriceRange} />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 courselist1">
    
        {courses.map(course =>
          isCourseCard1View ? (
            <CourseCard1 key={course.id} course={course} />
          ) : (
            <CourseCard key={course.id} course={course} />
          )
        )}
   
  </div>

      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  )
}
