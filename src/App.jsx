import { useState } from 'react'
import './App.css'
import Header from './assets/Components/Header/Header'
import Blogs from './assets/Components/blogs/Blogs'
import Bookmarks from './assets/Components/bookmarks/Bookmarks';
// import Bookmarks from './assets/Components/bookmarks/Bookmark'

function App() {

  const[mark, setMark]= useState([]);

  const HandleAddToBookMark = blog =>{
    const newBookMarks = [...mark, blog];
    setMark(newBookMarks)
  }



  return (
    <>
     <Header></Header>
     <div className='md: flex max-w-7xl mx-auto'>
     <Blogs HandleAddToBookMark={HandleAddToBookMark}></Blogs>
     {/* <Bookmarks mark={mark}></Bookmarks> */}
     <Bookmarks mark={mark}></Bookmarks>
     </div>
     
    </>
  )
}

export default App
