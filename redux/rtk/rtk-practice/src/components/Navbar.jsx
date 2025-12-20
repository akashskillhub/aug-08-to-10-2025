import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { cart } = useSelector(state => state.skillhub)
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand" >RTK Practice</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" >Home</Link>
                        <Link to="/products" className="nav-link" >products</Link>
                        <Link to="/cart" className="nav-link" >cart</Link>
                    </div>
                    <div className='text-light ms-auto'>
                        <i className="bi bi-cart"></i>
                        <span>{cart.length}</span>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar