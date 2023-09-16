

import './App.css'
import Header from './components/header/header'
import Courses from './components/Course/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setbookmarks] = useState([])
  const hendelselected = card => {
    const newbookmarks = [...bookmarks, card]
    setbookmarks(newbookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-8'>
        <Courses hendelselected={hendelselected}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
