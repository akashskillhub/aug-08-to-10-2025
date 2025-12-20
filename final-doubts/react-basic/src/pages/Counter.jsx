import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(10)

    let x = 10
    const inc = () => {
        x++
        console.log(x)
    }

    const incCount = () => {
        setCount(count + 1)
    }


    return <>
        <h1>{x}</h1>
        <button onClick={inc}>+1</button>
        <hr />
        <h1>{count}</h1>
        <button onClick={incCount}>+1</button>
        <button onClick={e => setCount(count - 1)}>-1</button>
    </>
}

export default Counter