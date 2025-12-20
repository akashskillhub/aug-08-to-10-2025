import React, { useEffect, useState } from 'react'

const LearnEffect = () => {
    const [count, setCount] = useState(10)
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        console.log("hello react")
    }, [theme])
    // 👆 dependancy array

    // axios
    // promise

    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)} type="button" class="btn btn-primary">+1</button>
        <h1>{theme}</h1>
        <button
            onClick={e => setTheme(theme === "light" ? "dark" : "light")}
            type="button"
            class="btn btn-primary">Toggle</button>
    </>
}

export default LearnEffect