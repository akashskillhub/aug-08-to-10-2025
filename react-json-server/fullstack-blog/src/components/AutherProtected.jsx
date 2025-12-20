import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

const AutherProtected = ({ children }) => {
    const { auth } = useContext(AuthContext)
    return auth.auther ? children : <Navigate to="/login" />
}

export default AutherProtected