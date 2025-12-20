import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

const AdminNavbar = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const handleLogout = () => {
        localStorage.removeItem("auth")
        setAuth(null)
    }
    return <>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container">
                <Link to="/admin" class="navbar-brand">Admin Panel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active">Dashboard</Link>
                        <Link to="/admin/employee" class="nav-link">Employee</Link>
                        <Link to="/admin/todo" class="nav-link">todo</Link>
                    </div>
                </div>
                {
                    auth && <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            welcome {auth.name}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><button onClick={handleLogout} class="dropdown-item text-danger">Logout</button></li>
                        </ul>
                    </div>
                }


            </div>
        </nav>
    </>
}

export default AdminNavbar