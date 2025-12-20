import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

const EmployeeNavbar = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const handleLogout = () => {
        localStorage.removeItem("auth")
        setAuth(null)
    }
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container">
                <Link to="/employee" class="navbar-brand">Employee Panel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/employee" class="nav-link active" >Dashboard</Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Welcome {auth.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><button onClick={handleLogout} class="dropdown-item text-danger" href="#">Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default EmployeeNavbar