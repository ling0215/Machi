import Link from 'next/link';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './featured.module.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Featured() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
        <div className="col-md-3 d-flex justify-content-center mb-4 align-items-stretch">
          <div className=" no-border f-16 featured-card">
            <Link href="/class/detail" passHref className="no-underline">
              <img src="/course.jpg" className="card-img-top img-fluid" alt="" />
              <div className="card-body no-space-x">
                <h5 className="card-text fw-bold card-title mt-3">
                  法式甜點課程
                </h5>
                <p className="card-text type-text mb-2">講師：呂昇達</p>
                <p className="h-currency bold h-now">
                  NT$2,000 &nbsp;
                  <span className="text-decoration-line-through type-text">
                    NT$2,500
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
