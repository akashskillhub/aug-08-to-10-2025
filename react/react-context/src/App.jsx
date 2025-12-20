import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LearnContext from './pages/LearnContext'
import Navbar from './components/Navbar'
import LearnPropDrilling from './pages/LearnPropDrilling'


export const TestContext = createContext()
const App = () => {
  const brand = "dell"
  return <TestContext.Provider value={brand}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/context' element={<LearnContext />} />
        <Route path='/props' element={<LearnPropDrilling brand={brand} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </TestContext.Provider>
}

export default App