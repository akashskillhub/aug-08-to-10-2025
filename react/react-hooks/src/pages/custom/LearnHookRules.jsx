// Funcation Component
// Class Components 2019

import { useEffect, useState } from "react"

const LearnHookRules = () => {
    const [theme, setTheme] = useState("dark")

    // Hook Rules
    // 1 only avilable in functional components
    // 2 Top level Functional Component
    // 3 No Conditional rendering

    const handleClick = () => {
        const [count, setCount] = useState(10)
        // ❌ only available in Top Level Function
    }

    if (theme === "light") {
        return <h1>hello</h1>
    } else {
        useEffect(() => {
            console.log("effect")
        }, [])
        // ❌ no conditional rendering
    }
    return <>
        <div>LearnHookRules</div>
        {/* <h1>{count}</h1> */}
        <h1>{theme}</h1>
        <button onClick={e => setTheme(pre => pre === "dark" ? "light" : "dark")}>toggle</button>
    </>

}

export default LearnHookRules