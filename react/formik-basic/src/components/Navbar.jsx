import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" href="#">Home</Link>
                        <Link to="/basic" className="nav-link" href="#">Basic</Link>
                        <Link to="/formik" className="nav-link" href="#">Formik Todo</Link>
                        <Link to="/better" className="nav-link" href="#">Better Form</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar