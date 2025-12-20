import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import { useState } from "react"
import Protected from "./components/Protected"
import LearnEffect from "./pages/LearnEffect"

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return <>
    <BrowserRouter>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        {/* Public Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/reach-us' element={<Contact />} />
        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
        <Route path='/effect' element={<LearnEffect />} />

        {/*👇 Private / Protected Pages */}
        <Route path='/admin' element={<Protected isLogin={isLogin}> <Dashboard /> </Protected>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App

/*
  pages
    /         Home.jsx
    /reach-us Contact.jsx
    /admin    Dashboard.jsx
  components
    Navbar.jsx
    Protected.jsx
*/