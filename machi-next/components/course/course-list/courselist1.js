import React from 'react';
import Link from 'next/link';
import CourseCard1 from '../course-card/classcard1';

export default function CourseList1({ courses }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 courselist1">
    
      {courses.map(course => (
        <CourseCard1 key={course.id} course={course}/>
      ))}
     
    </div>
  );
}