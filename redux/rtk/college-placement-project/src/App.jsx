import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/public/Login"
import RegisterCompany from "./pages/public/RegisterCompany"
import AdminLayout from "./components/admin/AdminLayout"
import AdminStudents from "./pages/admin/AdminStudents"
import AdminCompany from "./pages/admin/AdminCompany"
import AdminJobs from "./pages/admin/AdminJobs"
import CompanyLayout from "./components/company/CompanyLayout"
import CompanyJobs from "./pages/company/CompanyJobs"
import CompanyApplication from "./pages/company/CompanyApplication"
import StudentLayout from "./components/student/StudentLayout"
import StudentProfile from "./pages/student/StudentProfile"
import StudentJobs from "./pages/student/StudentJobs"

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        {/* public pages */}
        <Route path='/' element={<Login />} />
        <Route path='/register-company' element={<RegisterCompany />} />

        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminStudents />} />
          <Route path="company" element={<AdminCompany />} />
          <Route path="jobs" element={<AdminJobs />} />
        </Route>

        {/* company routes */}
        <Route path="/company" element={<CompanyLayout />}>
          <Route index element={<CompanyJobs />} />
          <Route path="applications" element={<CompanyApplication />} />
        </Route>

        {/* student routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentProfile />} />
          <Route path="jobs" element={<StudentJobs />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter >
  </>
}

export default App