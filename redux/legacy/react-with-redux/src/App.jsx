import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bank from './pages/Bank'
import Counter from './pages/Counter'
import Navbar from './components/Navbar'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Bank />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App