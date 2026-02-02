import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Todos from "./pages/Todos"

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <Navbar /> <Outlet /> </>}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App