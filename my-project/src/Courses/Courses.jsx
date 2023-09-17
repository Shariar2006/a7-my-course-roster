/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Courses = ({selectCourse, remaining, totalPrice}) => {
    return (
        <div className='bg-white p-4 rounded-lg mb-5 w-80'>
            <h1>{remaining}</h1>
            <h1>{totalPrice}</h1>
            <h1 className='text-3xl font-semibold text-center'>Course name</h1>
            {
                selectCourse.map((course) =>(
                    <li key={course.ID} className='text-lg font-medium text-gray-700'>{course.Title}</li>
                ))
            }
        </div>
    );
};

export default Courses;