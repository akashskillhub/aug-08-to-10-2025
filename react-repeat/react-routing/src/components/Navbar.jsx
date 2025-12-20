import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" class="nav-link active" href="#">Home</Link>
                    <Link to="/test" class="nav-link" href="#">About</Link>
                    <Link to="/reach-us" class="nav-link" href="#">Contact</Link>
                    <Link to="/demo" class="nav-link" href="#">Gallery</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar