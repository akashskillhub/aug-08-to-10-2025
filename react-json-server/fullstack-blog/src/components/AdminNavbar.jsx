import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

const AdminNavbar = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const handleLogout = () => {
        localStorage.removeItem("local-admin")
        setAuth({ ...auth, admin: null }) // {admin:{},auther:{},admin:null}
    }
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container">
                <a class="navbar-brand">Admin Panel</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active">Dashboard</Link>
                        <Link to="/admin/auther" class="nav-link">Authers</Link>
                        <Link to="/admin/blogs" class="nav-link">Blogs</Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Welcome Admin
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >Action</a></li>
                        <li><a class="dropdown-item" >Another action</a></li>
                        <li><button onClick={handleLogout} class="dropdown-item text-danger">
                            <i className="bi bi-box-arrow-in-left"></i>
                            Logout
                        </button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar