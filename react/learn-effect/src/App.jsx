import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LearnEffect from './pages/LearnEffect'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LearnApi from './pages/LearnApi'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/effect' element={<LearnEffect />} />
        <Route path='/api' element={<LearnApi />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App