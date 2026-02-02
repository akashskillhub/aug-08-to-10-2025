import Link from 'next/link'

const EmployeeNavbar = () => {
    return <div className="bg-green-400 flex gap-2">
        <Link href="/employee">employee dashboard</Link>
        <Link href="/employee/profile">profile</Link>
    </div>
}

export default EmployeeNavbar