import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Counter from './pages/Counter'
import Todo from './pages/Todo'
import LearnEffect from './pages/LearnEffect'

const App = () => {
  return <>
    <BrowserRouter>

      <Link to="/">Ghar</Link>
      <Link to="/dummy">Notes</Link>
      <Link to="/effect">KUCHBHI</Link>

      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/dummy' element={<Todo />} />
        <Route path='/effect' element={<LearnEffect />} />

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App