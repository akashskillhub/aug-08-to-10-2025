import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LearnProps from './pages/LearnProps'
import Navbar from './components/Navbar'
import PracticeContext from './pages/PracticeContext'

export const ProductContext = createContext()

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "laptop", price: 1000 },
    { id: 2, name: "ram", price: 100 },
    { id: 3, name: "ssd", price: 500 },
  ])
  const [cart, setCart] = useState([])
  return <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/props' element={<LearnProps />} />
        <Route path='/practice' element={<PracticeContext />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </ProductContext.Provider>
}

export default App