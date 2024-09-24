import React from "react";
import {CiHeart} from "react-icons/ci";
import styles from './classcard1.module.scss'
import Image from "next/image";
import Link from "next/link";
import {IoCartOutline, IoHeartOutline} from "react-icons/io5";
import { addFav, removeFav, getFavs } from '@/services/user'
import { useCart } from '@/hooks/cart-type-state'
import { AuthProvider, useAuth } from '@/hooks/use-auth'
import { IoHeart } from 'react-icons/io5'


export default function CourseCard1({course}) {
  const imageUrl = `/images/course/slide/${course.course_id}_1.jpg`//暫時標記
 //我的最愛
 const { favorites, setFavorites } = useAuth()
 const isFavorite = favorites.includes(course.course_id)

 const handleFavoriteClick = async () => {
   if (isFavorite) {
     await removeFav(course.course_id)
   } else {
     await addFav(course.course_id)
   }
   const newFavorites = await getFavs()
   // console.log(newFavorites.data.data.favorites)
   setFavorites(newFavorites.data.data.favorites)
 }
 //我的最愛

 //日期
 const dateString = course.course_start_time;

 // 將日期字串轉換成日期物件
 const date = new Date(dateString);
 
 // 取得日期中的年、月、日、時、分
 const year = date.getFullYear();
 const month = ("0" + (date.getMonth() + 1)).slice(-2);
 const day = ("0" + date.getDate()).slice(-2);

 
 // 格式化後的日期時間字串
 const formattedDate = year + "-" + month + "-" + day ;
 //日期
 

 


    return (
        <div id="page-content-wrapper" className="col">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-column">
            <div class="card mb-3 w-100  no-border ">
              <div class="row g-0">
                <div class="col-md-4">
                <Link href={`/course/${course.course_id}`}>
            <Image
              src={imageUrl}
              className={styles.cardImg}
              alt="productImg"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              width={174} 
              height={230} 
            />
          </Link>
                </div>
                <div class="col-md-8" >
                  <div className={styles.cardbody}>
                    <h5 class="car d-title fw-bolder" 
                    className={styles.cardtext1}>{course.course_name.slice(0, 20)}  {isFavorite ? (
                      <IoHeart
                        className={styles.heartIcon}
                        onClick={handleFavoriteClick}
                      />
                    ) : (
                      <IoHeartOutline
                        className={styles.heartIcon}
                        onClick={handleFavoriteClick}
                      />
                    )} </h5>
                     <p class="card-text fw-bolder"
                    className={styles.cardtext1}>
                      類別:{course.course_category}
                    </p>
                    <p class="card-text fw-bolder"
                    className={styles.cardtext1}>
                      課堂地點:台北市北投區裕民六路130號1樓<br/>
                      課堂日期:{formattedDate}<br/>
                      講師:{course.course_teacher}
                    </p>
                    
                    
                    

                    <p class="card-text" className={styles.cardtext1} dangerouslySetInnerHTML={{ __html: course.course_description }}>
                    
                    </p>
                    
                    <p class="text-end"  style={{
marginTop: '50px',color: 'var(--primary-dark)',fontWeight: 'bold'
}}>
                      NT$:{course.course_price}
                      <Link href={`/course/${course.course_id}`}><button 
                      className={`${styles['btn-info']}`}
                     
>課程詳情</button></Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
}