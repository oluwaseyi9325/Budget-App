  import React from 'react'
  import { Routes, Route } from 'react-router-dom'
  import Home from './Home.jsx'
  import Signin from './Signin.jsx'
  import NotFound from "./NotFound.jsx"
  import Navbar from './Navbar.jsx'
  import Blogs from './Blogs.jsx'
  import ViewBlog from './ViewBlog.jsx'
  function App() {
    return (
      <>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
           <Route path='/signin' element={<Signin />} />
          <Route path='/blog' element={<Blogs/> } />
          <Route path='/blog/:id' element={<ViewBlog/> } />
          <Route path='*' element={<NotFound/> } />
        </Routes>
        </>
    )
  }

  export default App