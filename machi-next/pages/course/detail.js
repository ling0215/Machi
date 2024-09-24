import React from 'react'
import Carousel from '@/components/product/carousel'
import {IoCartOutline, IoHeartOutline} from 'react-icons/io5'
import CourseDetail from '@/components/course/course-detail/course-detail'
import { useCart } from '@/hooks/use-cart-state'



export default function Detail() {
       const { cart, items, decrement, increment, removeItem } = useCart()

  return (
    <>
      <div className="row mt-5 mx-2 d-flex justify-content-center ">
        <div className="col-md-5">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel />
          </div>
        </div>
        <div className="col-md-6 ms-3 product-info">
          <h4 className="text-primary-dark mt-2">鹿野紅烏龍戚風蛋糕</h4>
          <p className="text-muted">蛋糕</p>
          <p className="product-desc mb-4">
            林叔叔在台東鹿野的冠軍茶廠出產的紅烏龍茶葉，好多年都得了金賞，重發酵的紅烏龍，茶味鮮明溫潤帶有一縷天然果香，是我們私下很愛喝的台灣茶之一，所以決定用這個我們都好喜歡的紅烏龍，做成淡雅內斂的戚風蛋糕；若賦予她生命，她絕對是位氣質出眾的女孩。裝飾意象為台灣茶花，吃蛋糕的同時別忘了台灣有世界頂級的好茶！
            (目前已改版為紅烏龍茶香緹內餡，已不再附上鮮奶油與紅烏龍茶淋醬)
          </p>
          <div className="mb-4">
            <p className={`text-primary-dark`}>上課日期</p>
            <p className={`text-primary-dark`}>課堂地點</p>
            <p className={`text-primary-dark`}>講師</p>
            <p className={`text-primary-dark`}>報名時間</p>
          </div>
          {/* 數量按鈕 */}
          <div className={`d-flex g-3 justify-content-between align-items-center mb-4 addbuton`}>
          <p className={`text-primary-dark`}>人數:</p>
            <div
              className={`btn-group d-flex   `}
              role={`group`}
              aria-label={`Basic mixed styles example `}
              style={{
                width: '128px',
                height: '48px',
              }}
            >
              
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                style={{ width: '28px' }}
                // onClick={() => decrement(item.id, item.type)} // 减少数量的点击事件
              >
                -
              </button>
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
              >
                {/* {item.quantity} */}
              </button>
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                style={{ width: '28px' }}
                // onClick={() => increment(item.id, item.type)} // 增加数量的点击事件
              >
                +
              </button>
            </div>
            {/* <div className={` h4 `}>小計NT${item.subtotal}</div> */}
            <div className="col-md-5 d-flex justify-content-center align-items-center text-primary-dark">
              <p className="pe-2">售價:</p>
              <h4 className="text-primary-dark">NT$850</h4>
            </div>
            
          </div>
          

          <div className="mb-4 d-flex justify-content-center align-items-center ">
            <div className="col-6 pe-2">
              <button className="btn btn-outline-brown btn-lg w-100 cartBtn">
                  <IoCartOutline className="fs-3 text-brown" /> 加入購物車
              </button>
            </div>
            <div className="col-6 ps-2">
                <button className="btn btn-brown text-white btn-lg w-100 buynowBtn">立即購買</button>
            </div>
          </div>
          <button className="btn btn-outline-gary col-md-6 text-start text-primary-dark">
            <IoHeartOutline className="fs-3 text-primary-dark" /> 加入追蹤清單
          </button>
        </div>
      </div>
      <div className="row mt-5"> 
        <CourseDetail />
      </div>
    </>
  )
}