import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand" >Learn Hooks</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" >state</Link>
                        <Link to="/effect" className="nav-link" >effect</Link>
                        <Link to="/context" className="nav-link" >context</Link>
                        <Link to="/child" className="nav-link" >child components</Link>
                        <Link to="/memo" className="nav-link" >useMemo</Link>
                        <Link to="/only-memo" className="nav-link" >only memo</Link>
                        <Link to="/ref" className="nav-link" >ref</Link>
                        <Link to="/dropbox" className="nav-link" >dropbox</Link>
                        <Link to="/reducer" className="nav-link" >reducer</Link>
                        <Link to="/practice" className="nav-link" >practice</Link>
                        <Link to="/custom" className="nav-link" >custom</Link>
                        <Link to="/login" className="nav-link" >login</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar