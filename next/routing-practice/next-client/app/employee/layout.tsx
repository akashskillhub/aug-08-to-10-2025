import EmployeeNavbar from "../components/EmployeeNavbar"

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <>
        <EmployeeNavbar />
        {children}
    </>
}

export default layout