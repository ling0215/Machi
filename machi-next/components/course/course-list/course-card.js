import React from 'react'
import Link from 'next/link'
import styles from './course.module.scss'
import Image from 'next/image'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
import { addFav, removeFav, getFavs } from '@/services/user'
import { useCart } from '@/hooks/cart-type-state'
import { AuthProvider, useAuth } from '@/hooks/use-auth'
import { IoHeart } from 'react-icons/io5'


export default function CourseCard({ course }) {
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
  return (
    <>
    
      <div className="col-6">
        
        <div className={styles.cardBody}>
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
          <div className={styles.cardInfo}>
            
          
          {isFavorite ? (
                      <IoHeart
                        className={styles.heartIcon}
                        onClick={handleFavoriteClick}
                      />
                    ) : (
                      <IoHeartOutline
                        className={styles.heartIcon}
                        onClick={handleFavoriteClick}
                      />
                    )}
            
            {course.course_name && (
  <h5 className={styles.cardText}>{course.course_name.slice(0, 6)}</h5>
)}
            <p className={styles.typeText}  dangerouslySetInnerHTML={{
                __html: course.course_category
              }}>
                {/* 123 */}
              </p>
            <h5 className={styles.currency}>NT${course.course_price}</h5>
            <Link href={`/course/${course.course_id}`}>
            <button className={styles.cartBtn} >
            
              課程詳細
             
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
