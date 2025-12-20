import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

const AdminProtected = ({ children }) => {
    const { auth } = useContext(AuthContext)
    return auth.admin ? children : <Navigate to="/login" />
}

export default AdminProtected