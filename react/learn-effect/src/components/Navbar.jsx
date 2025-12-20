import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container">
                <a className="navbar-brand" >Effect</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" href="#">Home</Link>
                        <Link to="/effect" className="nav-link" href="#">Effect</Link>
                        <Link to="/api" className="nav-link" href="#">Api</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar