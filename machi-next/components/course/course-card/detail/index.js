import React from 'react'
import Carousel from '@/components/product/carousel'
import {
  IoCartOutline,
  IoHeartOutline,
  IoIosSearch,
  IoAppsSharp,
  IoListSharp,
} from 'react-icons/io5'
import styles from './detail.module.scss'

export default function ClassDetail() {
  return (
    <>
      <div className="row mt-5 mx-2">
        <div className="col-sm-7">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel />
          </div>
        </div>
        <div className="col-sm-5">
          <h4>法式甜點創業實做班</h4>
          <p>蛋糕</p>
          <p>$850</p>
          <p className="product-desc">
          ✨海外滿班秒殺課程<br></br>✨大型甜塔實作班<br></br>✨高效率量產sop大解析<br></br>✨新手也能做出美麗的作品
          <br></br>✨適合小資本創業<br></br>✨適合店家、工作室進修
          </p>
         
          <div className="row justify-content-evenly">
            <button className="btn btn-outline-brown w-50 col-3">
            <IoCartOutline /> 加入購物車</button>
            <button className="btn btn-brown w-50 col-3">立即購買</button>
          </div>
          <button className="btn btn-outline-primary w-50 mt-3">
            <i className="bi bi-suit-heart"></i> 加入收藏
          </button>
          <div className="product-info my-5">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
          
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-2">
        <nav id="navbar-example2" class="navbar navbar-light bg-light justify-content-center align-center-sm flex-space-between">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">
              課程介紹
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">
              運送與注意事項
              </a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          class="scrollspy-example"
          
        >
          <h4 id="scrollspyHeading1">｜講堂時間｜</h4>
          <p>
          講堂日期：2024年4月30日(二)<br></br>講堂費用：3,000元<br></br>
上課時間：4小時<br></br>
課程人數：30<br></br>
費用包含：師資、場地租借使用、器具租借使用、場地清潔、稅金(開立電子雲端發票(無實體紙本發票))附贈：配方講義、課程使用材料、飲品(茶飲、熱咖啡)（說明：附贈項目當日未到場者無法再索取、亦無法扣除金額！）
          </p>
          <h4 id="scrollspyHeading2">｜講堂地點｜</h4>
          <p>授課方式：示範+實作講堂地點：橙品手作烘焙廚藝教室
          <br />主辦單位：橙品小舖承辦單位：橙品手作烘焙廚藝(橙學有限公)
          </p>
          <h4 id="scrollspyHeading3">｜講師介紹｜</h4>
          <p>呂昇達 老師
          呂昇達經典麵包配方X 私房迷人料理 <br />
呂昇達 美味戚風蛋糕 X 巧手烘焙小西點 <br />
呂昇達 餡料點心黃金比例101 <br />
100％幸福無添加：呂老師的80 道五星級餅乾與點心 <br />
手揉麵包教科書：呂老師的86 款超手感麵包全集</p>
          
        </div>
        {/* <div className="col-sm-12">
          <h4 className="text-center mb-5">探索 Nike Air Force 1005 女鞋</h4>
          <img
            className="w-100  my-5 "
            src="/images/product/detail/info-1.webp"
          />
          <p className="text-center my-5 font-weight-light fs-4">
            鞋面採用車縫皮革裝飾片，全面提升經典指標性、耐久性和支撐力。
          </p>
          <img
            className="w-100  my-5 "
            src="/images/product/detail/info-2.webp"
          />
          <p className="text-center my-5 font-weight-light fs-4">
            低筒版型，造型俐落簡練。
          </p>
        </div> */}
      </div>
    </>
  )
}
