"use client"
import { useSignoutMutation } from "@/redux/apis/auth.api"
import { useAppSelector } from "@/redux/store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const AdminNavbar = () => {
    const router = useRouter()
    const [signout] = useSignoutMutation()
    const { admin } = useAppSelector(state => state.auth)

    const handleLogout = async () => {
        try {
            await signout().unwrap()
            router.refresh()
            toast.success("logout success")
        } catch (error) {
            console.log(error)
            toast.error("unable to logout")
        }
    }

    return <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
            <Link className="navbar-brand" href="/">Admin Panel</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" href="/admin">Dashboard</Link>
                    <Link className="nav-link active" href="/admin/setting">Setting</Link>
                </div>
            </div>

            <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    Welcome {admin && admin.result.name}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default AdminNavbar