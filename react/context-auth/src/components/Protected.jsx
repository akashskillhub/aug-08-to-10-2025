import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const { auth } = useContext(AuthContext)
    return auth ? children : <Navigate to="/login" />
}

export default Protected