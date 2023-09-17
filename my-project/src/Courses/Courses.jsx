/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Courses = ({selectCourse, remaining, totalHrs}) => {
    return (
        <div className='bg-white p-4 rounded-lg mb-5 w-[324px] mt-4'>
            <h1 className='text-xl font-bold text-blue-800 my-3'>Credit Hour Remaining {remaining} hrs</h1>
            <hr />
            <h1 className='text-3xl font-bold text-center'>Course name</h1>
            {
                selectCourse.map((course) =>(
                    <li key={course.ID} className='text-lg font-medium text-gray-600 my-3'>{course.Title}</li>
                ))
            }
            <hr />
            <h1 className='text-gray-600 font-medium my-3'>Total Credit Hour : {totalHrs} hrs</h1>
        </div>
    );
};

export default Courses;