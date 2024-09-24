import React from 'react'
import { useState } from 'react'

export default function SearchBar({ setSearch, setSort, setOrder, setView }) {
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSortChange = (sortField) => {
    setSort(sortField)
  }
  const handleOrderChange = (sortOrder) => {
    setOrder(sortOrder)
  }
  
  
  // const handleViewChange = (viewType) => {
  //     setView(viewType);
  // };
  return (
    <>
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
            // onClick={() => handleViewChange('grid')}
          >
            <i className="bi bi-grid"></i>
          </button>
          <button
        className="btn"
        id="listview"
        // onClick={() => handleViewChange('row')}
      >
        <i className="bi bi-list">測試</i>
      </button>
        </div>
      </div>
    </>
  )
}
