import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import AdminNavbar from "./components/AdminNavbar"
import Dashboard from "./pages/Dashboard"
import Admintodo from "./pages/Admintodo"
import EmployeeNavbar from "./components/EmployeeNavbar"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import Profile from "./pages/Profile"
import Details from "./pages/Details"

const App = () => {
  return <>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<> <Navbar /> <Outlet /> </>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>

        <Route path="/admin" element={<>  <AdminNavbar /> <Outlet /> </>}>
          <Route index element={<Dashboard />} />
          <Route path="todo" element={<Admintodo />} />
        </Route>

        <Route path="/employee" element={<>  <EmployeeNavbar /> <Outlet /> </>}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </>
}

export default App