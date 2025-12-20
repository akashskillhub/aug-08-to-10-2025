import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import PublicLayout from './components/PublicLayout'
import AdminLayout from './components/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import AdminEmployee from './pages/AdminEmployee'
import AdminTodo from './pages/AdminTodo'
import EmployeeLayout from './components/EmployeeLayout'
import EmployeeDashboard from './pages/EmployeeDashboard'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="employee" element={<AdminEmployee />} />
          <Route path="todo" element={<AdminTodo />} />
        </Route>

        <Route path='/employee' element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboard />} />
        </Route>



        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes >
    </BrowserRouter >
  </>
}

export default App