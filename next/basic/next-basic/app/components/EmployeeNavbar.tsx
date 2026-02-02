import Link from "next/link"

const EmployeeNavbar = () => {
    return <>
        <div className="bg-red-400 p-4 flex gap-4">
            <Link href="/employee">emp</Link>
            <Link href="/employee/profile">profile</Link>
        </div>
    </>

}

export default EmployeeNavbar