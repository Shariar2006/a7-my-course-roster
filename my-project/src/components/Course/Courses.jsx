import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Courses = () => {

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
            course.map(course => <Card key={course.ID} card={course}></Card>)
        }
        </div>
    </div>
  )
}

export default Courses;