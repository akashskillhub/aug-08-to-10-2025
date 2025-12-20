import React, { useEffect, useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        console.log("demo")
    }, [])

    useEffect(() => {
        if (count < 12) {
            console.log("test")
        }
    }, [count])

    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
    </>
}

export default Home