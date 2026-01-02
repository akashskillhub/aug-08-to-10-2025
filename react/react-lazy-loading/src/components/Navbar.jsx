import React from 'react'
import { Link } from 'react-router-dom'
import { publicRoutes } from '../route/AllRoutes'

const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand" href="#">Lazy Loading</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            publicRoutes.map(item => <Link className='nav-link' to={item.path}>{item.label}</Link>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar