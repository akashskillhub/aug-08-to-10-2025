import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../App'

const Navbar = () => {
    const { cart } = useContext(ProductContext)
    return <>
        <Link to="/">home</Link>
        <Link to="/props">props</Link>
        <Link to="/practice">practice</Link>
        <strong>cart {cart.length}</strong>
    </>
}

export default Navbar