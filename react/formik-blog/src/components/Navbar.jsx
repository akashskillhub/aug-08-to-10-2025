import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Formik Blog</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active" href="#">Home</Link>
                    <Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>
                    <Link to="/signup" className="nav-link" href="#">Signup</Link>
                    <Link to="/login" className="nav-link" href="#">Login</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar