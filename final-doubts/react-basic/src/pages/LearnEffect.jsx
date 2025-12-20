import React, { useEffect, useState } from 'react'

const LearnEffect = () => {
    const [count, setCount] = useState(10)

    const [active, setActive] = useState(true)

    useEffect(() => {
        console.log("hello")
    }, [])
    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(count === 15 ? 15 : count + 1)}>+1</button>

        <h1>{active ? "TRUE" : "FALSE"}</h1>
        <button onClick={e => setActive(!active)}>toggle</button>
    </>
}

export default LearnEffect