import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Stat from './pages/Stat'
import Demo from './pages/Demo'
import Navbar from './components/Navbar'
import { ErrorBoundary } from 'react-error-boundary'
const App = () => {

  const ErrorHandler = () => {
    return <h1>something went wrong</h1>
  }
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stat' element={<Stat />} />
        <Route path='/demo' element={<ErrorBoundary FallbackComponent={ErrorHandler}>
          <Demo />
        </ErrorBoundary>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}


export default App