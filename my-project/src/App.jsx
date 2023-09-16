

import './App.css'
import Header from './components/header/header'
import Courses from './components/Course/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-8'>
        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
