import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signout } from '../redux/slices/auth.slice'

const AdminNavbar = () => {
    const { admin } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link to="/admin" class="navbar-brand" >Admin Panel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active">Dashboard</Link>
                        <Link to="/admin/employee" class="nav-link active">Employee</Link>
                        <Link to="/admin/todo" class="nav-link">Todo</Link>
                    </div>
                </div>
                {
                    admin && <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            welcome {admin.name}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><button onClick={e => dispatch(signout())} class="dropdown-item text-danger" href="#">Logout</button></li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    </>
}

export default AdminNavbar