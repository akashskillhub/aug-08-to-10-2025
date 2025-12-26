import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/slices/auth.slice'

const CompanyNavbar = () => {
    const { company } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
        <div className="container">
            <Link to="/company" className="navbar-brand">Company Panel</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/company" className="nav-link">Jobs</Link>
                    <Link to="/company/applications" className="nav-link">Applications</Link>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    <img src={company.logo} height={30} width={30} className='rounded-circle' alt="" />
                    <span className='ms-2'>{company.name}</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><button onClick={e => dispatch(logout("company"))} class="dropdown-item text-danger">Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default CompanyNavbar