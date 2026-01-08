import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Outlet } from 'react-router-dom'

const PublicLayout = ({ children }) => {
    return <>
        <PublicNavbar />
        <Outlet />
    </>
}

export default PublicLayout