import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminProtected from './AdminProtected'

const AdminLayout = () => {
    return <AdminProtected>
        <AdminNavbar />
        <Outlet />
    </AdminProtected>
}

export default AdminLayout