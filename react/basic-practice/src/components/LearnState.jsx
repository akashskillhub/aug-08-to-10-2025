import React, { useState } from 'react'

const LearnState = () => {
    let [count, setCount] = useState(10)

    let x = 10
    const normalInc = () => {
        x++
        console.log(x)
    }
    const stateInc = () => {
        // count++
        // console.log(count) // will not render on screen
        setCount(count + 1)

    }
    return <div>
        <h1>{x}</h1>
        <button onClick={normalInc}>+1 Normal</button>
        <h1>{count}</h1>
        <button onClick={stateInc}>+1 State</button>
    </div>
}

export default LearnState