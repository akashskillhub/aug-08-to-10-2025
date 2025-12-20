import React, { useState } from 'react'

const Todo = () => {
    const [notes, setNotes] = useState([])
    const handleClick = arg => {
        setNotes([...notes, { task: arg, id: notes.length + 1 }])
    }
    return <>

        <button onClick={e => handleClick("learn redux")}>click me</button>
        {
            notes.map(item => <h1>{item.id} {item.task}</h1>)
        }
    </>
}

export default Todo