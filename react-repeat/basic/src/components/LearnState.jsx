import React, { useState } from 'react'

const LearnState = () => {
    let [count, setCount] = useState(500)

    let x = 10
    const inc = () => {
        x = x + 1
        console.log(x)
    }

    const stateInc = () => {
        setCount(count + 1)

    }

    return <>
        <h1>{x}</h1>
        <button onClick={inc}>+1</button>
        <hr />

        <button onClick={() => setCount(count - 1)}>-1</button>
        <h1>{count}</h1>
        <button onClick={stateInc}>+1</button>
    </>

}

export default LearnState