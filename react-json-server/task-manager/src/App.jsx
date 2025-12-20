import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import AdminEmployee from "./pages/AdminEmployee"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import EmployeeNavbar from "./components/EmployeeNavbar"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { createContext, useState } from "react"
import AdminLayout from "./components/AdminLayout"
import AdminTodo from "./pages/AdminTodo"
import EmployeeLayout from "./components/EmployeeLayout"

export const AuthContext = createContext()
const App = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  return <AuthContext.Provider value={{ auth, setAuth }}>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='employee' element={<AdminEmployee />} />
          <Route path='todo' element={<AdminTodo />} />
        </Route>
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboard />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
}

export default App