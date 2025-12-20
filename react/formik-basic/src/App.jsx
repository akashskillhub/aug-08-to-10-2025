import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BasicTodo from './pages/BasicTodo'
import FormikTodo from './pages/FormikTodo'
import Navbar from './components/Navbar'
import BetterForm from './pages/BetterForm'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/basic' element={<BasicTodo />} />
        <Route path='/formik' element={<FormikTodo />} />
        <Route path='/better' element={<BetterForm />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App