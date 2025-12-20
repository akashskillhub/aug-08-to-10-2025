import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PublicNavbar from "./components/PublicNavbar"
import AdminNavbar from "./components/AdminNavbar"
import AdminDashboard from "./pages/AdminDashboard"
import PublicLayout from "./components/PublicLayout"
import AdminLayout from "./components/AdminLayout"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
const App = () => {
  return <>
    <ToastContainer />

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App