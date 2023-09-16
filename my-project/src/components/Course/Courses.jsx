import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'


const Courses = ({hendelselected}) => {

    const [course, setcourse] = useState([]);
    useEffect(() => {
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setcourse(data))

    }, [])
  return (
    <div>
        <h2 className="text-2xl font-medium">Courses: {course.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
            course.map(course => <Card key={course.ID} card={course} hendelselected={hendelselected}></Card>)
        }
        </div>
    </div>
  )
}

Courses.propTypes = {
    hendelselected: PropTypes.func
}

export default Courses;