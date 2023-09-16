/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';

const Home = () => {
    const [course, setCourse] = useState([])
    const [cards, setCards] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalReadingTime, setTotalReadingTime] = useState(0)
    useEffect(() => {
        fetch('Course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    const selectBtn = (singleCards) => {
        const isClicked = cards.find((card) => card.ID == singleCards.ID)
        let count = cards.Reading_Time;
        if (isClicked) {
            return alert("You have selected this once")

        }
        else {
            cards.forEach((item) => {
                count = count + item.Reading_Time;
            })
            const remaining = 20 - count
            if (count > 20) {
                return alert("Your limit is just 20")
            }
            else {
                setTotalReadingTime(count)
                setRemaining(remaining)
                setCards([...cards, singleCards])
            }
        }
    }

    return (
        <div className='flex justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                {
                    course.map(course => (
                        <div key={course.ID} className="card w-80 bg-base-100 shadow-xl">
                            <figure><img src={course.Cover} /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-medium">{course.Title}</h2>
                                <p>{course.Description}</p>
                                <div className='flex justify-between'>
                                    <span>Price: ${course.Price}</span>
                                    <span>Credit: {course.Reading_Time} hrs</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => selectBtn()} className="btn w-full btn-primary bg-blue-600 rounded-xl text-white font-medium">Select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <Courses totalReadingTime={totalReadingTime}
                    remaining={remaining}
                    cards={cards}></Courses>
            </div>
        </div>
    );
};

export default Home;