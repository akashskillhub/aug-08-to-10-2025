import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <div>
            <Link to="/">Bank</Link>
        </div>
        <div>
            <Link to="/counter">Counte</Link>
        </div>
    </>
}

export default Navbar