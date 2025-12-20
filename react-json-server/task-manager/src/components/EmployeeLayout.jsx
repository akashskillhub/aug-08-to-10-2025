import React from 'react'
import EmployeeProtected from './EmployeeProtected'
import EmployeeNavbar from './EmployeeNavbar'
import { Outlet } from 'react-router-dom'

const EmployeeLayout = () => {
    return <>
        <EmployeeProtected>
            <EmployeeNavbar />
            <Outlet />
        </EmployeeProtected>
    </>
}

export default EmployeeLayout