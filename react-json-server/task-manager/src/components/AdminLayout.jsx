import React from 'react'
import AdminProtected from './AdminProtected'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return <>
        <AdminProtected>
            <AdminNavbar />
            <Outlet />
        </AdminProtected>
    </>
}

export default AdminLayout