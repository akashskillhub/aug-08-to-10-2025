import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

const Navbar = () => {
    const { auth, setAuth } = useContext(AuthContext)
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
            <div className="container">
                <a className="navbar-brand" >Auth Context</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            auth
                                ? <Link to="/dashboard" className="nav-link" >Dashboard</Link>
                                : <>
                                    <Link to="/" className="nav-link active" >Register</Link>
                                    <Link to="/login" className="nav-link" >Login</Link>
                                </>
                        }
                    </div>
                </div>
                {
                    auth && <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            welcome {auth.name}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li> <button onClick={e => {
                                localStorage.removeItem("auth")
                                setAuth(null)
                            }} type="button" class="dropdown-item text-danger">Logout</button> </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    </>
}

export default Navbar