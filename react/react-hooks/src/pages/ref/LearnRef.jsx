import React, { useEffect, useRef, useState } from 'react'

const LearnRef = () => {
    const [fname, setFname] = useState("")
    const x = useRef() // dom access, avaoid renderndr

    const handleSubmit = e => {
        console.log(x.current.value)
        console.log(fname)
    }

    console.log("RE-RENDER")

    // formik               => state
    // react-hook-form      => ref

    useEffect(() => {
        console.log(x.current)

    }, [])
    return <>
        <input type="text" ref={x} />
        <input type="text" onChange={e => setFname(e.target.value)} />
        <button onClick={handleSubmit}>click</button>
    </>
}

export default LearnRef