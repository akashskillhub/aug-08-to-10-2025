import { Link } from "react-router-dom"

const Navbar = () => {
    return <>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/details">details</Link>
    </>
}

export default Navbar