import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicLayout from "../components/PublicLayout"

const Home = lazy(() => import("./../pages/Home"))
const Test = lazy(() => import("./../pages/Test"))
const RbButton = lazy(() => import("./../pages/RbButton"))
const RbAlert = lazy(() => import("./../pages/RbAlert"))
const RbCard = lazy(() => import("./../pages/RbCard"))
const RbModal = lazy(() => import("./../pages/RbModal"))
const RbOffcanvas = lazy(() => import("./../pages/RbOffcanvas"))
const RbCarousel = lazy(() => import("./../pages/RbCarousel"))
const Rbgrid = lazy(() => import("./../pages/Rbgrid"))
const Rbform = lazy(() => import("./../pages/Rbform"))

export const publicRoutes = [
    { label: "Home", path: "/", element: <Home /> },
    { label: "Test", path: "/test", element: <Test /> },
    { label: "button", path: "/button", element: <RbButton /> },
    { label: "alert", path: "/alert", element: <RbAlert /> },
    { label: "card", path: "/card", element: <RbCard /> },
    { label: "modal", path: "/modal", element: <RbModal /> },
    { label: "offcanvas", path: "/offcanvas", element: <RbOffcanvas /> },
    { label: "carousel", path: "/carousel", element: <RbCarousel /> },
    { label: "grid", path: "/grid", element: <Rbgrid /> },
    { label: "form", path: "/form", element: <Rbform /> },
]

const AppRoutes = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    {
                        publicRoutes.map(item => <Route
                            key={item.label}
                            path={item.path}
                            element={<Suspense fallback={() => <h1>Please Wait...</h1>}>
                                {item.element}
                            </Suspense>}
                        />)
                    }
                </Route>
                <Route path='*' element={<h1>Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    </>
}

export default AppRoutes