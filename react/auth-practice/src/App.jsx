import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import Navbar from './components/Navbar'
import Protected from './components/Protected'
const App = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")))
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar authHandler={{ auth, setAuth }} />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login authHandler={{ auth, setAuth }} />} />
        <Route path='/admin' element={<Protected authHandler={{ auth, setAuth }}> <Dashboard /> </Protected>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App