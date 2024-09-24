import React, { useState } from "react";
import styles from "./sort-box.module.scss";

export default function SortBox() {
  // const ViewSwitcher = () => {
  //   const [viewType, setViewType] = useState('grid'); // 預設顯示模式為 'grid'

  //   const switchToGrid = () => {
  //     setViewType('grid');
  //   };

  //   const switchToList = () => {
  //     setViewType('list');
  //   };

  //   return (
  //     <div className={styles.viewtype}>
  //       <button className={`btn ${viewType === 'grid' ? 'active' : ''}`} id="gridview" onClick={switchToGrid}>
  //         <i className="bi bi-grid"></i>
  //       </button>
  //       <button className={`btn ${viewType === 'list' ? 'active' : ''}`} id="listview" onClick={switchToList}>
  //         <i className="bi bi-list"></i>
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <>
    {/* 上方搜尋 & 排序依據 */}
    <div className="row mt-2 mb-3">
    <h5 className="card-text d-flex justify-content-between align-items-center">
      <div className="row mt-2 mb-3">
        <h5 className="card-text d-flex justify-content-between align-items-center">{/* padding-left: 22px */}
        
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
            />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </h5>
      </div>
      <div className="d-flex p-2 justify-content-end align-items-center">
        <div className="toolbar">
          <span className="ps-3">塔派甜點 (12)</span>
        </div>

        {/* <div className="toolbar">
          <button className="btn" id="sidebarToggle">
            隱藏篩選條件 <i className="bi bi-toggles"></i>
          </button>
        </div> */}
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
              <a className="dropdown-item" href="#">
                最新
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                價格：由高至低
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                價格：由低至高
              </a>
            </li>
          </ul>
        </div>

        {/* 排序切換顯示 */}
        <div className="viewtype">
          <button className="btn" id="gridview">
            <i className="bi bi-grid"></i>
          </button>
          <button className="btn" id="listview">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div> 
    </h5>
  </div>
  
  </>
  );
}