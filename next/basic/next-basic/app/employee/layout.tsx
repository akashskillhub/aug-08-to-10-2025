import EmployeeNavbar from "../components/EmployeeNavbar";

export default function layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return <>
        <EmployeeNavbar />
        {children}
    </>
}