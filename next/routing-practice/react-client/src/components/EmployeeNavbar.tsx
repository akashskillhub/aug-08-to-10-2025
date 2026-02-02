import { Link } from "react-router-dom"

const EmployeeNavbar = () => {
    return <>
        <Link to="/employee">employee</Link>
        <Link to="/employee/profile">profile</Link>
    </>
}

export default EmployeeNavbar