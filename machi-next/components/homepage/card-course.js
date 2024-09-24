import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCoursesHomepage } from '@/services/homepage'
import Image from 'next/image'

const CardCourse = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getCoursesHomepage()
      setCourses(response.data.data.courses)
    }

    fetchCourses()
  }, [])

  return (
    <>
      {courses.map((course, index) => (
        <div
          key={index}
          className="col-md-3 d-flex justify-content-center mb-4"
        >
          <div className="w-350 no-border f-16 featured-card">
            <Link href={`/course/${course.course_id}`} passHref className="no-underline">
              <img
                src={`/images/course/slide/${course.course_id}_1.jpg`}
                alt={course.name}
                layout="absolute"
                className="card-img-top"
                style={{ width: '100%', height: '320px', objectFit: 'cover'}}
              />
              <div className="card-body no-space-x">
                <h5 className="card-text fw-bold card-title mt-3">
                  {course.course_name}
                </h5>
                <p className="card-text type-text mb-2">講師：{course.course_teacher}</p>
                <p className="h-currency bold h-now">
                  NT${course.course_price.toLocaleString()} &nbsp;
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardCourse
