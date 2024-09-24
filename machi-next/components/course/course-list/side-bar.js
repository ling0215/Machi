import React, { useState } from 'react'
import Link from 'next/link'

export default function Sidebar({ setCategory, setPriceRange }) {
  const [sliderValue, setSliderValue] = useState(4000);


  function handleRangeChange(event) {
    // 從事件對象中獲取滑塊的值
    setSliderValue(event.target.value);

    const range = event.target.value

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
                      課程類別
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
                        onClick={() => handleCategoryChange('蛋糕')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleCategoryChange('蛋糕')
                        }}
                      >
                        蛋糕
                      </p>
                      <p
                        role="button"
                        tabIndex={0}
                        className="text-decoration-none d-block hover-button"
                        onClick={() => handleCategoryChange('麵包')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleCategoryChange('麵包')
                        }}
                      >
                        麵包
                      </p>
                      <p
                        role="button"
                        tabIndex={0}
                        className="text-decoration-none d-block hover-button"
                        onClick={() => handleCategoryChange('精緻點心')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleCategoryChange('精緻點心')
                        }}
                      >
                        精緻點心
                      </p>
                      <p
                        role="button"
                        tabIndex={0}
                        className="text-decoration-none d-block hover-button"
                        onClick={() => handleCategoryChange('餅乾')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleCategoryChange('餅乾')
                        }}
                      >
                       餅乾
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
                    max={10000}
                    step="100"
                    id="range"
                    onChange={handleRangeChange}
                  />
                  <span id="rangeValue" className="text-primary-dark fw-bold">NT$0 ～ NT${sliderValue}</span>
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
