import React, { useState } from 'react'

// Props
// React Routing
const PracticeState = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")
    return <>
        <input type="text" onChange={e => setTask(e.target.value)} />
        <button onClick={() => setTodos([...todos, task])}>add</button>
        <h1>{todos}</h1>
    </>
}

export default PracticeState