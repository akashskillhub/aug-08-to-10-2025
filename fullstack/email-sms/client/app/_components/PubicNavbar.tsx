import Link from "next/link"

const PubicNavbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
            <div className="container">
                <Link className="navbar-brand" href="/">Auth Practice</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" href="/">Home</Link>
                        <Link className="nav-link" href="/register">Register</Link>
                        <Link className="nav-link" href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default PubicNavbar