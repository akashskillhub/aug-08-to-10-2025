import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const StudentProtected = ({ children }) => {
    const { student } = useSelector(state => state.auth)
    return student ? children : <Navigate to="/" />
}

export default StudentProtected