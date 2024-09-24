import React from 'react';
import CourseCard from './course-card';
import Link from 'next/link';

export default function CourseList({ courses }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 courselist1">
    
      {courses.map(course => (
        <CourseCard key={course.id} course={course}/>
      ))}
     
    </div>
  );
}