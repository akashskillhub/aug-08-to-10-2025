import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/AdminNavbar";
import AdminGuard from "../components/AdminGuard";

const Home = lazy(() => import("./../pages/Home"))
const Login = lazy(() => import("./../pages/Login"))

const Dashboard = lazy(() => import("./../pages/Dashboard"))

export const publicRoutes = [
    { label: "Landing", path: "/", element: <Home /> },
    { label: "Signin", path: "/login", element: <Login /> },
]

export const adminRoutes = [
    { label: "Admin Panel", path: "/admin", element: <Dashboard /> },
]


export const PublicRoutes = () => <Routes>
    <Route path="/" element={<> <Navbar /> <Outlet />  </>}>
        {
            publicRoutes.map(item => <Route
                key={item.label}
                path={item.path}
                element={<Suspense fallback={<h1>Please Wait...</h1>}>
                    {item.element}
                </Suspense>} />)
        }
    </Route>
</Routes>


export const AdminRoutes = () => <Routes>
    <Route path="/admin" element={<AdminGuard> <AdminNavbar /> <Outlet /> </AdminGuard>}>
        {
            adminRoutes.map(item => <Route
                path={item.path}
                element={<Suspense fallback={<h1>Please Wait...</h1>}>
                    {item.element}
                </Suspense>} />)
        }
    </Route>
</Routes> 