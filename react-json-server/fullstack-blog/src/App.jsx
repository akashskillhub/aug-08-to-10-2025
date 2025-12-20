import React, { createContext, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import AutherDashboard from './pages/AutherDashboard'
import Login from './pages/Login'
import AutherRegister from './pages/AutherRegister'
import PublicNavbar from './components/PublicNavbar'
import PublicLayout from './components/PublicLayout'
import AdminLayout from './components/AdminLayout'
import AdminAuther from './pages/AdminAuther'
import AdminBlogs from './pages/AdminBlogs'
import AutherLayout from './components/AutherLayout'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

export const AuthContext = createContext()

const App = () => {
  const [auth, setAuth] = useState({
    admin: JSON.parse(localStorage.getItem("local-admin")),
    auther: JSON.parse(localStorage.getItem("local-auther"))
  })
  // return <Test />
  return <AuthContext.Provider value={{ auth, setAuth }}>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<AutherRegister />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='auther' element={<AdminAuther />} />
          <Route path='blogs' element={<AdminBlogs />} />
        </Route>
        <Route path='/auther' element={<AutherLayout />}>
          <Route index element={<AutherDashboard />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
}

export default App