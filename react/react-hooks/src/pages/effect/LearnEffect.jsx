import React, { useEffect, useState } from 'react'

const LearnEffect = () => {
    const [theme, setTheme] = useState("dark")
    const [count, setCount] = useState(10)

    useEffect(() => {
        console.log("effect")
        return () => {
            console.log("cleanup")
        }
    }, [count])
    return <>
        <h1>{theme}</h1>
        <h1>{count}</h1>
        <button onClick={e => setTheme(pre => pre === "dark" ? "light" : "dark")}>Toggle</button>
        <button onClick={e => setCount(pre => pre + 1)}>+1</button>
    </>
}

export default LearnEffect