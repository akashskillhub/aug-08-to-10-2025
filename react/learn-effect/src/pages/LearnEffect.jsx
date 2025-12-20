import React, { useEffect, useState } from 'react'

const LearnEffect = () => {

    const [theme, setTheme] = useState("light")
    const [count, setCount] = useState(0)
    useEffect(() => {
        // Page Mount + change in dependancy array (priority 2)
        console.log("effect")

        //    👇 Cleanup Function
        return () => {
            // Page Unmount + change in dependancy array (priority 1)
            console.log("cleanup")
        }
    }, [count])

    return <>
        <h1>{theme}</h1>
        <h1>{count}</h1>
        <hr />
        <button onClick={e => setCount(count === 5 ? 5 : count + 1)} type="button" className="btn btn-primary">+1</button>
        <button onClick={e => setTheme(theme === "light" ? "dark" : "light")} type="button" className="btn btn-primary">Toggle</button>
    </>
}

export default LearnEffect