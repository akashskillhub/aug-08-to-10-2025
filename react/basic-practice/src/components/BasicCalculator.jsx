import React, { useState } from 'react'

// Component
const BasicCalculator = () => {
    // use => Hook
    const [result, setResult] = useState(0)
    let num1, num2
    // Render
    return <div>
        <h1>{result}</h1>
        <input type="text" onChange={e => num1 = +e.target.value} />
        <input type="text" onChange={e => num2 = +e.target.value} />
        <button onClick={() => setResult(num1 + num2)}>+</button>
        <button onClick={() => setResult(num1 - num2)}>-</button>
        <button>*</button>
        <button>/</button>
    </div>
}

export default BasicCalculator