import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes, PublicRoutes } from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <PublicRoutes />
      <AdminRoutes />
    </BrowserRouter>

  </>
}

export default App