import Link from 'next/link'

const AdminNavbar = () => {
    return <div className="bg-blue-400 flex gap-2">
        <Link href="/admin">Admin dashboard</Link>
        <Link href="/admin/profile">profile</Link>
    </div>
}

export default AdminNavbar