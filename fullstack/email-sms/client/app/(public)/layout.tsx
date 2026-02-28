import PubicNavbar from "../_components/PubicNavbar"

const layout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <PubicNavbar />
        {children}
    </>
}

export default layout