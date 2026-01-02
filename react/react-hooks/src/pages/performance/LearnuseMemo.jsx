import React, { useCallback, useMemo, useState } from 'react'

const LearnuseMemo = () => {
    const [count, setCount] = useState(10)
    const [theme, setTheme] = useState("dark")

    const sum = () => {
        let total = 0
        for (let i = 0; i < 1e10; i++) {
            total += i
        }
        return total
    }

    // const x = useCallback(sum, [])
    // console.log(x)
    //  cache / memoize :  entire function 

    const y = useMemo(sum, [theme])
    console.log(y)
    //  cache / memoize : function retutn value

    return <>
        <h1>{count}</h1>
        <h1>{y}</h1>
        <button onClick={e => setCount(pre => pre + 1)}>+1</button>
        <hr />
        <h1>{theme}</h1>
        <button onClick={e => setTheme(pre => pre === "dark" ? "light" : "dark")}>toggle</button>
    </>
}

export default LearnuseMemo