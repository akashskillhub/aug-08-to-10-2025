import AdminNavbar from "../components/AdminNavbar";

export default function layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return <>
        <AdminNavbar />
        {children}
    </>
}