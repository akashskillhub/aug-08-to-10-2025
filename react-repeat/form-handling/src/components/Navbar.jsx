import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active" href="#">Home</Link>
                    <Link to="/manual" className="nav-link" href="#">Manual</Link>
                    <Link to="/better" className="nav-link" href="#">Better</Link>
                    <Link to="/formik" className="nav-link" href="#">Formik</Link>
                    <Link to="/login" className="nav-link" href="#">login</Link>
                    <Link to="/register" className="nav-link" href="#">Register</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar