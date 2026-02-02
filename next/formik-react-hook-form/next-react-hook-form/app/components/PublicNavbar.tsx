import Link from "next/link"

const PublicNavbar = () => {
    return <>
        <div className="bg-teal-400 p-4 flex gap-2">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </div>
    </>
}

export default PublicNavbar