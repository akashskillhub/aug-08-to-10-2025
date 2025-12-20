import React from 'react'
import { Link } from 'react-router-dom'

const CompanyNavbar = () => {
    return <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
        <div className="container">
            <Link to="/company" className="navbar-brand">Company Panel</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/company" className="nav-link">Jobs</Link>
                    <Link to="/company/applications" className="nav-link">Applications</Link>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    Welcome
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><button class="dropdown-item text-danger">Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default CompanyNavbar