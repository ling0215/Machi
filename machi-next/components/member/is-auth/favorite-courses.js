import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'
import { getCoursesByIds } from '@/services/user'
import Image from 'next/image'
import Link from 'next/link'

function FavoriteCourses() {
  const router = useRouter()
  const { favorites, setFavorites } = useAuth()
  const [courses, setCourses] = useState([])

  const coursesFavorites = favorites.filter((num) => num < 10821)

  useEffect(() => {
    getCoursesByIds(coursesFavorites)
      .then((response) => {
        setCourses(response.data.data)
        console.log(response.data.data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [favorites])

  const isFavoriteProductsPage = router.pathname === '/member/favorite-courses'
  const buttonClass = isFavoriteProductsPage
    ? 'btn-brown text-white'
    : 'btn-outline-brown'

  return (
    <>
      <div className="container p-5 border rounded">
        <div className="d-flex justify-content-start gap-3">
          <Link href={`/member/favorite-products`}>
            {' '}
            <button className={`btn btn-outline-brown`}>商品收藏</button>{' '}
          </Link>
          <Link href={`/member/favorite-courses`}>
            {' '}
            <button className={`btn ${buttonClass}`}>課程收藏</button>{' '}
          </Link>
        </div>

        <hr className="my-3 mt-5" />

        <div className="row mt-5">
          {courses.map((course, index) => (
            <div key={index} className="col-md-3 col-6 g-3">
              <div className="card">
                <Link href={`/course/${course.course_id}`}>
                  <Image
                    loading="lazy"
                    src={`/images/course/slide/${course.course_id}_1.jpg`}
                    alt={course.course_name}
                    width={200}
                    height={200}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body text-center">
                  <p className="card-text text-brown">{course.course_name}</p>
                  <p className="card-text text-primary-dark">NT${course.course_price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .btn-outline-brown:hover {
          background-color: var(--brown);
          color: white;
          border-color: var(--grey);
        }
      `}</style>
    </>
  )
}

export default FavoriteCourses
