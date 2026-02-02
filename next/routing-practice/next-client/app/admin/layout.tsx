import AdminNavbar from "../components/AdminNavbar"

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <>
        <AdminNavbar />
        {children}
    </>
}

export default layout