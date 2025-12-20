import React from 'react'
import StudentProtected from './StudentProtected'
import StudentNavbar from './StudentNavbar'
import { Outlet } from 'react-router-dom'

const StudentLayout = () => {
    return <>
        <StudentProtected>
            <StudentNavbar />
            <Outlet />
        </StudentProtected>
    </>
}

export default StudentLayout