import Link from "next/link"

const AdminNavbar = () => {
    return <div className="bg-green-400 p-4 flex gap-4 text-black">
        <Link href="/admin">admin</Link>
        <Link href="/admin/todo">todo</Link>
    </div>
}

export default AdminNavbar