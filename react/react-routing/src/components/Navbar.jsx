import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Routing</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active" href="#">Home</Link>
                        <Link to="/about" class="nav-link" href="#">About</Link>
                        <Link to="/contact" class="nav-link" href="#">Conatct</Link>
                        <Link to="/gallery" class="nav-link" href="#">Gallery</Link>
                        <Link to="/account" class="nav-link" href="#">Account</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar