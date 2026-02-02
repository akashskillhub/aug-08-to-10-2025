import { Link } from "react-router-dom"

const PublicNavbar = () => {
    return <>
        <Link to="/">home</Link>
        <Link to="/signin">login</Link>
        <Link to="/signup">register</Link>
    </>
}

export default PublicNavbar