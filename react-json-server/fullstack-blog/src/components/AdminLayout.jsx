import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminProtected from './AdminProtected'

const AdminLayout = () => {
    return <AdminProtected>
        <AdminNavbar />
        <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
            <Outlet />
        </div>
    </AdminProtected>
}

export default AdminLayout