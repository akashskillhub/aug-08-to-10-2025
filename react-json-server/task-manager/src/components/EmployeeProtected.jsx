import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

const EmployeeProtected = ({ children }) => {
    const { auth } = useContext(AuthContext)
    return (auth && auth.role === "employee") ? children : <Navigate to="/" />
}

export default EmployeeProtected