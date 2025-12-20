import React from 'react'
import AutherNavbar from './AutherNavbar'
import { Outlet } from 'react-router-dom'
import AutherProtected from './AutherProtected'

const AutherLayout = () => {
    return <AutherProtected>
        <AutherNavbar />
        <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
            <Outlet />
        </div>
    </AutherProtected>
}

export default AutherLayout


