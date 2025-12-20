import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Outlet } from 'react-router-dom'
import PublicFooter from './PublicFooter'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
            <Outlet />
        </div>
        <PublicFooter />
    </>
}

export default PublicLayout