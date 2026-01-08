import { Link } from 'react-router-dom'
import { adminRoutes } from '../routes/AppRoutes'
import { useSelector } from 'react-redux'

const AdminNavbar = () => {
    const { admin } = useSelector(state => state.auth)
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">Admin</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {
                        adminRoutes.map(item => <Link key={item.label} className='nav-link' to={item.path}>{item.label}</Link>)
                    }
                </div>
                <div className="dropdown ms-auto ">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        welcome {admin.name}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}

export default AdminNavbar