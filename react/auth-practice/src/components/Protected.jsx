import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children, authHandler }) => {
    const { auth } = authHandler
    return auth ? children : <Navigate to="/login" />
}

export default Protected