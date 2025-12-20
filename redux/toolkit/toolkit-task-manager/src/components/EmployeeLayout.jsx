import EmployeeNavbar from './EmployeeNavbar'
import { Outlet } from 'react-router-dom'
import EmployeeProtected from './EmployeeProtected'

const EmployeeLayout = () => {
    return <EmployeeProtected>
        <EmployeeNavbar />
        <Outlet />
    </EmployeeProtected>
}

export default EmployeeLayout