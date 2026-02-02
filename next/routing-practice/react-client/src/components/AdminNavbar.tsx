import { Link } from "react-router-dom"

const AdminNavbar = () => {
    return <>
        <Link to="/admin">Admin</Link>
        <Link to="/admin/profile">profile</Link>
    </>
}

export default AdminNavbar