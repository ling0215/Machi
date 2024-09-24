import React, { useState } from 'react'
import Link from 'next/link'

export default function Sidebar({ setCategory, setPriceRange }) {
  // 增加一個 state 來存儲滑塊的當前值
  const [range, setRange] = useState(0)

  function handleRangeChange(event) {
    // 從事件對象中獲取滑塊的值
    const range = event.target.value

    setRange(range)

    // 更新 priceRange 狀態變量
    setPriceRange(range)
  }
  const handleCategoryChange = (value) => {
    setCategory(value)
  }

  return (
    <>
      {/* 左側篩選 */}
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex" id="wrapper">
            <div className="bg-white me-3" id="sidebar-wrapper">
              <div className="scroll sticky-md-top">
                <div
                  className="accordion accordion-flush border rounded"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed bg-light-grey"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        onClick={() => handleCategoryChange('')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleCategoryChange('')
                        }}
                      >
                        所有商品
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                    ></div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        塔派甜點
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-3">
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('塔')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCategoryChange('塔')
                          }}
                        >
                          塔
                        </p>
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('派')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCategoryChange('派')
                          }}
                        >
                          派
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        蛋糕
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-3">
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('戚風蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('戚風蛋糕')
                          }}
                        >
                          戚風蛋糕
                        </p>
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('千層蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('千層蛋糕')
                          }}
                        >
                          千層蛋糕
                        </p>
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('乳酪蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('乳酪蛋糕')
                          }}
                        >
                          乳酪蛋糕
                        </p>
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('提拉米蘇')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('提拉米蘇')
                          }}
                        >
                          提拉米蘇
                        </p>
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('慕斯蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('慕斯蛋糕')
                          }}
                        >
                          慕斯蛋糕
                        </p>
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('磅蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('磅蛋糕')
                          }}
                        >
                          磅蛋糕
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        餅乾
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-3">
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none  d-block hover-button"
                          onClick={() => handleCategoryChange('達克瓦茲')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('達克瓦茲')
                          }}
                        >
                          達克瓦茲
                        </p>
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('曲奇餅乾')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('曲奇餅乾')
                          }}
                        >
                          曲奇餅乾
                        </p>
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('馬卡龍')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('馬卡龍')
                          }}
                        >
                          馬卡龍
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        點心
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-3">
                        <p
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none d-block hover-button"
                          onClick={() => handleCategoryChange('巧克力')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('巧克力')
                          }}
                        >
                          巧克力
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="range p-3">
                    <label htmlFor="range" className="form-label text-primary-dark">
                      價格區間
                    </label>
                    <input
                      type="range"
                      className="form-range text-brown"
                      min={0}
                      max={3000}
                      step="100"
                      id="range"
                      onChange={handleRangeChange}
                    />
                    <span id="rangeValue" className="text-primary-dark fw-bold">NT$0 ～ NT${range}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .accordion-button {
          color: var(--primary-dark);
        }
        .accordion-body p {
          border-bottom: 1px solid #E2E2E2;
          color: var(--primary-dark);
        }
        .form-range::-webkit-slider-thumb {
          background-color: var(--secondary)
        }
      `}</style>
    </>
  )
}
