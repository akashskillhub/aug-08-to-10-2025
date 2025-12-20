import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    let x = 0
    return <>
        <h1>{x}</h1>
        <button onClick={e => x = x + 1}>+1</button>
        <button onClick={e => x = x - 1}>-1</button>
        <hr />
        <h1>{count}</h1>
        <button onClick={e => setCount(count === 5 ? 5 : count + 1)}>+1</button>
        <button onClick={e => setCount(count - 1)}>-1</button>
    </>
}

export default Counter