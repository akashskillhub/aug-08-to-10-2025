import React from 'react'
import CompanyProtected from './CompanyProtected'
import CompanyNavbar from './CompanyNavbar'
import { Outlet } from 'react-router-dom'

const CompanyLayout = () => {
    return <>
        <CompanyProtected>
            <CompanyNavbar />
            <Outlet />
        </CompanyProtected>
    </>
}

export default CompanyLayout