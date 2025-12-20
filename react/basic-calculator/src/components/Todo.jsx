import { useState } from "react"


// Props
const Todo = () => {
    const [task, setTask] = useState("")
    const [notes, setNotes] = useState([])
    const handleRemove = arg => {
        const x = notes.filter(item => item !== arg)
        console.log(x)
        setNotes(x)

    }
    return <>
        <input onChange={e => setTask(e.target.value)} type="text" placeholder='Enter your task' />

        {/*                              👇Copy   👇Push */}
        <button onClick={e => setNotes([...notes, task])}>Add</button>

        <ul>
            {
                notes.map(item => <li>{item}
                    <button onClick={e => handleRemove(item)}>Remove</button>
                </li>)
            }
        </ul>
    </>
}

export default Todo