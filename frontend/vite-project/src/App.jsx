import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs'
import About from './pages/About'
import BlogDetail from './pages/BlogDetail'
import AddBlog from './pages/addblog'
import { useEffect, useRef } from 'react'
import BlogEdit from './pages/BlogEdit'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/blogs" element = {<Blogs />} />
          <Route path = "/blogs/:id" element = {<BlogDetail />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/blogadder" element = {<AddBlog />} />
          <Route path = "/blogs/update/:id" element = {<BlogEdit />} />
      </Routes>
  
    </Router>
  )
}

export default App
