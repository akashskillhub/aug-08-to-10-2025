import React, { useEffect, useState } from 'react'

const LearnEffect = () => {
    // Re render
    // use => hook
    const [count, setCount] = useState(1)
    const [theme, setTheme] = useState("light")

    // formik yup clsx axios
    // POST GET PATCH DELETE

    useEffect(() => {
        console.log("mount")
        // 1 mount
        // 2 change in dependancy (priority 2)

        //      👇 cleanup function
        return () => {
            console.log("unmount")
            // 1 unmount
            // 2 change in dependancy(priority 1)
        }
    }, [count])
    // 👆 dependancy array
    return <>
        <div>LearnEffect</div>
        <h1>{count}</h1>
        <button onClick={e => setCount(count === 5 ? 5 : count + 1)}>+1</button>
        <button onClick={e => setCount(count - 1)}>-1</button>
        <hr />
        <h1>{theme}</h1>
        <button onClick={e => setTheme(theme === "light" ? "dark" : "light")}>toggle</button>
    </>
}

export default LearnEffect