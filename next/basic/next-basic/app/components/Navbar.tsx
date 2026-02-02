import Link from "next/link"

const Navbar = () => {
    return <>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
    </>
}

export default Navbar