import React, { useState } from 'react'

const PracticeState = () => {

    const [count, setCount] = useState(100)

    const [demo, setDemo] = useState("")
    const [test, setTest] = useState("")
    const [arr, setArr] = useState([])

    return <>
        <div>PracticeState</div>
        <ul>
            {
                arr.map(item => <li key={item.name}>{item.name} {item.age}</li>)
            }
        </ul>

        <button onClick={e => setArr([...arr, { name: "BILL", age: 20 }])}>add</button>
        <hr />
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>


    </>

}

export default PracticeState