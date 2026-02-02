import Navbar from "../componnets/Navbar";

const layout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return <>
        <Navbar />
        {children}
    </>
}

export default layout