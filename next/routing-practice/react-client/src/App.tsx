import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import PublicNavbar from "./components/PublicNavbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AdminNavbar from "./components/AdminNavbar"
import AdminDashboard from "./pages/AdminDashboard"
import AdminProfile from "./pages/AdminProfile"
import EmployeeNavbar from "./components/EmployeeNavbar"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import EmployeeProfile from "./pages/EmployeeProfile"

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <PublicNavbar /><Outlet /> </>}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
        <Route path="/admin" element={<> <AdminNavbar /><Outlet /> </>}>
          <Route index element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
        <Route path="/employee" element={<> <EmployeeNavbar /><Outlet /> </>}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="profile" element={<EmployeeProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App 
