import Link from "next/link"

const Navbar = () => {
    return <>
        <Link href="/">home</Link>
        <Link href="/todos">todos</Link>
    </>
}

export default Navbar