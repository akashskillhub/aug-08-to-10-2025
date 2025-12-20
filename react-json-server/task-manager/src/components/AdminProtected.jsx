import { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

const AdminProtected = ({ children }) => {
    const { auth } = useContext(AuthContext)
    return (auth && auth.role === "admin") ? children : <Navigate to="/" />
}

export default AdminProtected