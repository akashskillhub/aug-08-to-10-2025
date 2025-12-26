import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const CompanyProtected = ({ children }) => {
    const { company } = useSelector(state => state.auth)
    return company ? children : <Navigate to="/" />
}

export default CompanyProtected