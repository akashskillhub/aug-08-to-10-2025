import Link from 'next/link'

const notFound = () => {
    return <>
        <div>What you are looking is not found</div>
        <Link href="/">Go Home</Link>
    </>

}

export default notFound