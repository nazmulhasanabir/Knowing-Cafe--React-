import { useState } from 'react'
import './App.css'
import Header from './assets/Components/Header/Header'
import Blogs from './assets/Components/blogs/Blogs'
import Bookmarks from './assets/Components/bookmarks/Bookmarks';


function App() {

  const[mark, setMark]= useState([]);
  const[readingTime, setReadingTime] = useState([0]);
 
const HandleMarkAsRead = readTime => {
  setReadingTime(readingTime+readTime)

}
  const HandleAddToBookMark = blog =>{
    const newBookMarks = [...mark, blog];
    setMark(newBookMarks)
  }
  return (
    <>
     <Header></Header>
     <div className='md: flex max-w-7xl mx-auto'>
     <Blogs HandleAddToBookMark={HandleAddToBookMark}
     HandleMarkAsRead={HandleMarkAsRead} >
     </Blogs>
     <Bookmarks mark={mark}  readingTime={readingTime} ></Bookmarks>
     </div>
     
    </>
  )
}

export default App
