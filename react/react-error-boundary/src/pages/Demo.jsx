import React, { useState } from 'react'

const Demo = () => {
    const [count, setCount] = useState(10)
    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(pre => pre === 15 ? {} : pre + 1)}>+1</button>
    </>
}

export default Demo