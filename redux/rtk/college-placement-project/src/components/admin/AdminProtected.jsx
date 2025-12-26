
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminProtected = ({ children }) => {
    const { tpo } = useSelector(state => state.auth)
    return tpo ? children : <Navigate to="/" />
}

export default AdminProtected