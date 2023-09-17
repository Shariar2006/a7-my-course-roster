/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses'

const Home = () => {

    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch('Course.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    return (
        <div className='flex-1 grid grid-flow-row md:grid-flow-col justify-evenly gap-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allCourses.map((course) => (
                        <div key={course.ID} className="w-80 bg-white p-5 rounded-lg">
                            <img src={course.Cover} />
                            <div className="card-body">
                                <h2 className="text-lg font-medium">{course.Title}</h2>
                                <p className='text-gray-500 font-normal'> {course.Description} </p>

                                <div className='flex justify-between text-gray-500 font-normal my-2'>
                                    <span>Price: {course.Price}$ </span>
                                    <span>Cridet: {course.Reading_Time} hrs</span>
                                </div>

                                <div className="">
                                    <button className="bg-blue-600 text-white text-center px-[119px] py-1 rounded-md">Select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;