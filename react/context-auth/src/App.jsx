import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import Protected from './components/Protected'

export const AuthContext = createContext()

const App = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  //                                 👇 object
  return <AuthContext.Provider value={{ auth, setAuth }}>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Protected> <Dashboard /> </Protected>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
}

export default App