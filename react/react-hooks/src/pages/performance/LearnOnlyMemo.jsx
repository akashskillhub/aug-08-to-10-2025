import { useState } from 'react'
import Test from './Test'
const LearnOnlyMemo = () => {
    const [brand, setBrand] = useState("dell")
    const [count, setCount] = useState(10)
    return <>
        <div>LearnOnlyMemo</div>
        <h1>{count}</h1>
        <button onClick={e => setCount(pre => pre + 1)}>+1</button>
        <button onClick={e => setBrand(pre => pre === "dell" ? "apple" : "dell")}>change brand</button>
        <hr />
        <Test brand={brand}></Test>
    </>
}

// useRef
// useReducer
// lazy loading
// error boundary

export default LearnOnlyMemo