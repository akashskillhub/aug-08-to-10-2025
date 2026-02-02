import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import PublicNavbar from "./components/PublicNavbar"
import AdminNavbar from "./components/AdminNavbar"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <PublicNavbar /> <Outlet /> </>}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
        <Route path="/admin" element={<> <AdminNavbar /> <Outlet /> </>}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App