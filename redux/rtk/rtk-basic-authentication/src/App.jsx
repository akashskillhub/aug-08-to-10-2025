import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import PublicNavbar from "./components/PublicNavbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AdminDashboard from "./pages/AdminDashboard"
import AdminNavbar from "./components/AdminNavbar"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import AdminProtected from "./components/AdminProtected"
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<> <PublicNavbar /> <Outlet />  </>}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminProtected> <AdminNavbar /> <Outlet />  </AdminProtected>}>
          <Route index element={<AdminDashboard />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App