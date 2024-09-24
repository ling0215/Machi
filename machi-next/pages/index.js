// pages/index.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeCarousel from '@/components/homepage/home-carousel'
import CategoryCard from '@/components/homepage/category-card'
import CustomizeLayout from '@/components/layout/customize/customize-layout'
import PlaceholderText from '@/components/common/placeholder-text'
import { fetchCategory } from '@/services/index'
import Featured from '@/components/homepage/featured'
import FeaturedCard from '@/components/homepage/featured-card'

import CardBlog from '@/components/homepage/card-blog'
import CardProduct from '@/components/homepage/card-product'
import CardCourse from '@/components/homepage/card-course'
// 請根據實際路徑進行調整

function Home() {
  const [category, setCategory] = useState([]) //[變數名稱, 狀態變數]
  useEffect(() => {
    // 當狀態變動時執行
    fetchCategory().then((response) => {
      //services的fetchCategory()方法
      console.log(response) // 打印後端的回應
      setCategory(response) // 更新狀態
    })
  }, [])
  return (
    <>
      {/* 首頁輪播 */}
      <HomeCarousel />
      {/* 關於 Machi */}
      <div className="container col-xxl-10 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6 about">
            <h2 className="fw-bold lh-1 mb-3 about-title">關於 Machi</h2>
            <p className="about-text">Since 2015</p>
            <p className="about-text">
              「machi」的名字源自日語中的「街」，象徵著一條小街道，充滿了美好的氛圍與風情，就像來到一個溫馨舒適的地方，您可以在這裡放鬆身心，品嚐法式甜點的絕妙滋味。
              <br />
              每一個甜點都是我們匠心獨具的手工製作，融合了優質的食材和法式烘焙的精髓。無論是我們的招牌歐式酥皮、精緻巧克力蛋糕還是香濃卡布奇諾，都是我們用心製作的甜點藝術品，讓您的味蕾享受到一場獨特的美食之旅。
              <br />
              <br />
              我們希望「machi」不僅僅是一個甜點店，更是您享受甜蜜時光的去處，無論是與摯友共度閒暇時光，或是獨自一人沉浸在書本與甜點之間，我們都將竭盡所能，為您帶來最愉悅的體驗。
            </p>
            {/* <div className="d-flex d-grid gap-2 d-md-flex justify-content-md-start justify-content-center">
              <Link
                href="/about"
                className="btn btn-brown btn-lg px-4 me-md-2 about-btn"
              >
                {' '}
                Learn more
              </Link>
            </div> */}
          </div>
          <div className="col-10 col-sm-8 col-lg-6 mx-auto">
            <Image
              src="/images/heroes/aboutphoto.svg"
              className="d-block mx-lg-auto img-fluid "
              alt="about photo"
              width="400"
              height="300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 最新消息區塊 */}
      <div className="px-4 py-5 full-background">
        <div className="container px-5 py-5 latestnew-bgc">
          <div className="text-center article-section">
            <h2
              className="pb-2 mb-5 text-center section-heading"
              style={{ borderBottom: '1px solid #785e4c' }}
            >
              最新消息
            </h2>
            <div className="article-block">
              <CardBlog />
            </div>
          </div>
        </div>
      </div>

      {/* 精選區塊 */}
      <div className="container col-xxl-10 py-5 my-5 featured-bgc">
        <div className="container text-center">
          <h2
            className="pb-2 mb-5 text-center mt-2 section-heading"
            style={{ borderBottom: '1px solid #785e4c' }}
          >
            精選商品
          </h2>
          <div className="row row-cols-2 row-cols-md-4 d-flex">
            <CardProduct />
          </div>
        </div>

        <div className="container text-center">
          <h2
            className="pb-2 mb-5 text-center mt-5 section-heading"
            style={{ borderBottom: '1px solid #785e4c' }}
          >
            精選課程
          </h2>
          <div className="row row-cols-2 row-cols-md-4 g-4  d-flex">
            <CardCourse />
          </div>
        </div>
      </div>
      {/* <Featured /> */}

      {/* 商品類別區塊 */}
      {/* <CategoryCard category={category} /> */}

      {/* QA區塊 */}
      {/* <div className="container ol-xxl-10 featured-bgc p-0 my-5 d-flex justify-content-between">
        <Image
          src="./bg-1.png"
          className="d-block img-fluid "
          alt="qa photo"
          width="400"
          height="300"
          loading="lazy"
        />
        <Image
          src="./bg-2.png"
          className="d-block img-fluid position-absolute bottom-0 end-0"
          alt="qa photo"
          width="100"
          height="100"
          loading="lazy"
        />
      </div> */}
      {/* 原料介紹 */}
      <div className="px-4 py-4 qa-background intro">
        <div className="container my-5">
          <h2
            className="pb-2 mb-5 text-center section-heading"
            style={{ borderBottom: '1px solid #785e4c' }}
          >
            嚴選原料
          </h2>
          <div className="row d-flex justify-content-center">
            <div className="col-6 col-md-3 p-2">
              <img
                src="/images/features/ingredient-1.jpg"
                className="img-fluid img-thumbnail"
                alt="ingredient-1"
              />
            </div>
            <div className="col-6 col-md-3 p-2">
              <img
                src="/images/features/ingredient-2.jpg"
                className="img-fluid img-thumbnail"
                alt="ingredient-2"
              />
            </div>
            <div className="col-6 col-md-3 p-2">
              <img
                src="/images/features/ingredient-3.jpg"
                className="img-fluid img-thumbnail"
                alt="ingredient-3"
              />
            </div>
            <div className="col-6 col-md-3 p-2">
              <img
                src="/images/features/ingredient-4.jpg"
                className="img-fluid img-thumbnail"
                alt="ingredient-4"
              />
            </div>
          </div>
        </div>
      </div>

      <style global jsx>
        {`
          .card-cover {
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }

          .text-shadow-1 {
            text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
          }
          .text-shadow-2 {
            text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
          }
          .text-shadow-3 {
            text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </>
  )
}
Home.getLayout = function getLayout(page) {
  return <CustomizeLayout>{page}</CustomizeLayout>
}

export default Home
