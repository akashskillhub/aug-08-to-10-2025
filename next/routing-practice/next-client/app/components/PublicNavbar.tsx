import Link from "next/link"

const PublicNavbar = () => {
    return <>
        <div className="bg-red-400 flex gap-2">
            <Link href="/">home</Link>
            <Link href="/signin">signin</Link>
            <Link href="/signup">singup</Link>
        </div>
    </>
}

export default PublicNavbar