import PublicNavbar from "../components/PublicNavbar"

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <>
        <PublicNavbar />
        {children}
    </>
}

export default layout