import React from 'react'
import styles from './list.module.scss'
import { CiHeart } from "react-icons/ci"
import { FaSearch } from 'react-icons/fa'

// rwd改動123


export default function ClassList() {
    
    return (
        <>
         
          <div className="row">
            <div className="col-sm-12">
              <div className="d-flex flex-column flex-sm-row" id="wrapper">
                <div className= "bg-white me-3 mb-3 mb-sm-0">
                  <div className="scroll">
                <div className="input-container">
                <input
                                type="text"
                                className="input-field"
                                placeholder="請輸入關鍵字"
                                style={{ flex: '1' }}
                            />   <FaSearch /> 
                            
                </div>
    {/* 搜尋列 */}
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      {/* 擺篩選列 */}
                      <div className="accordion-item">
                      <h6 className='text-center class-select'>課程篩選</h6>
                      
                        <h6 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            類別
                          </button>
                        </h6>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body px-1">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                蛋糕捲
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                塔派
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                泡芙
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                          >
                            講師
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body px-1">
                            <div className="d-flex flex-row justify-content-around mb-2">
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-around mb-2">
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                          >
                            報名狀態
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body px-1">
                            <div className="d-flex flex-row justify-content-around mb-2">
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">報名未開放</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">報名開放中</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">報名已截止</div>
                                </div>
                              </div>
                            </div>
                          
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFour"
                          >
                            價錢
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFour"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body px-1">
                            <div className="d-flex flex-row justify-content-around mb-2">
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-around mb-2">
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="d-flex flex-column">
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-circle"
                                    ></button>
                                  </div>
                                  <div className="color-f">紫色</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    
                      <div className="accordion-item">
                      
                      <input type="date" value="2024-02-18"  className={`${styles['class-date']}`} />
                      <input type="date" value="2024-06-01"
                      className={`${styles['class-date']}`} /></div>
                      
                      <div></div>
                    </div>
                  </div>
                </div>


    




                <div id="page-content-wrapper" className="col">
                  <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-column">
                      <div class="card mb-3 w-100  no-border ">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="/images/class/list/800x.webp"
                              className="card-img-top"
                              alt="..."
                              style={{
          width: '100%', height: '80%', 
        }}/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="car d-title fw-bolder ">抹茶蛋糕卷  <CiHeart/></h5>
                              
                              <p class="card-text fw-bolder ">
                                課堂地點:台北市北投區裕民六路130號1樓
                              </p>
                              <p class="card-text fw-bolder">課堂日期:2024/04/03</p>
                              <p class="card-text fw-bolder">講師:呂昇達</p>
                              <p class="card-text">
                                <small class="text-muted">
                                  呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                                </small>
                              </p>
    
                              <p class="text-end"  style={{
          marginTop: '50px',
        }}>
                                $2000<button 
                                className={`${styles['btn-info']}`}
                               
        >課程詳情</button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3 w-100  no-border ">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="/images/product/list/p1-thumb.webp"
                              className="card-img-top"
                              alt="..."
                              style={{
          width: '100%', height: '80%', 
        }}/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="car d-title">抹茶蛋糕卷  <CiHeart/></h5>
                              
                              <p class="card-text">
                                課堂地點:台北市北投區裕民六路130號1樓
                              </p>
                              <p class="card-text">課堂日期:2024/04/03</p>
                              <p class="card-text">講師:呂昇達</p>
                              <p class="card-text">
                                <small class="text-muted">
                                  呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                                </small>
                              </p>
    
                              <p class="text-end"  style={{
          marginTop: '50px',
        }}>
                                $2000<button style={{
          border: 'none', borderRadius:'10px', fontSize: '18px',
        }}>課程詳情</button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>            
                      <div class="card mb-3 w-100  no-border ">
                        <div class="row g-0"> 
                          <div class="col-md-4">
                            <img
                              src="/images/product/list/p1-thumb.webp"
                              className="card-img-top"
                              alt="..."
                              style={{
          width: '100%', height: '80%', 
        }}/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="car d-title">抹茶蛋糕卷  <CiHeart/></h5>
                              
                              <p class="card-text">
                                課堂地點:台北市北投區裕民六路130號1樓
                              </p>
                              <p class="card-text">課堂日期:2024/04/03</p>
                              <p class="card-text">講師:呂昇達</p>
                              <p class="card-text">
                                <small class="text-muted">
                                  呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                                </small>
                              </p>
    
                              <p class="text-end"  style={{
          marginTop: '50px',
        }}>
                                $2000<button style={{
          border: 'none', borderRadius:'10px', fontSize: '18px',
        }}>課程詳情</button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3 w-100  no-border ">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="/images/product/list/p1-thumb.webp"
                              className="card-img-top"
                              alt="..."
                              style={{
          width: '100%', height: '80%', 
        }}/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="car d-title">抹茶蛋糕卷  <CiHeart/></h5>
                              
                              <p class="card-text">
                                課堂地點:台北市北投區裕民六路130號1樓
                              </p>
                              <p class="card-text">課堂日期:2024/04/03</p>
                              <p class="card-text">講師:呂昇達</p>
                              <p class="card-text">
                                <small class="text-muted">
                                  呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                                </small>
                              </p>
    
                              <p class="text-end"  style={{
          marginTop: '50px',
        }}>
                                $2000<button style={{
          border: 'none', borderRadius:'10px', fontSize: '18px',
        }}>課程詳情</button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}