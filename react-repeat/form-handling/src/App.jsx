import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ManualForm from './pages/ManualForm'
import Navbar from './components/Navbar'
import BetterForm from './pages/BetterForm'
import LearnFormik from './pages/LearnFormik'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manual' element={<ManualForm />} />
        <Route path='/better' element={<BetterForm />} />
        <Route path='/formik' element={<LearnFormik />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App