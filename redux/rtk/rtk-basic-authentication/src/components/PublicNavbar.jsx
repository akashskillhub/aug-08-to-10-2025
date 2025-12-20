import { Link } from 'react-router-dom'

const PublicNavbar = () => {

    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <a className="navbar-brand" >RTK Auth</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                    {/* <Link to="/admin" className="nav-link">Admin</Link> */}
                </div>
            </div>
        </div>
    </nav>
}

export default PublicNavbar