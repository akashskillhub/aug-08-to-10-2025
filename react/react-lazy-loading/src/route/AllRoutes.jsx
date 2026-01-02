import { lazy } from "react"

const Home = lazy(() => import("./../pages/Home"))
const About = lazy(() => import("./../pages/About"))
const Contact = lazy(() => import("./../pages/Contact"))

const Demo = lazy(() => import("./../pages/Demo"))
const Test = lazy(() => import("./../pages/Test"))

export const publicRoutes = [
    { label: "HOME", path: "/", element: <Home /> },
    { label: "ABOUT", path: "about", element: <About /> },
    { label: "Reach Us", path: "contact", element: <Contact /> },
    { label: "DEMO", path: "demo", element: <Demo /> },
    { label: "Admin panel", path: "admin", element: <Test /> },
]