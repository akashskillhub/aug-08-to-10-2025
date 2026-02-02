import { Link } from "react-router-dom"

const AdminNavbar = () => {
    return <>
        <Link to="/admin">dashboard</Link>
        <Link to="/admin/todo">todo</Link>
    </>
}

export default AdminNavbar