import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BasicTodo = () => {
    const [task, setTask] = useState("")
    const [desc, setDesc] = useState("")
    const [priority, setPriority] = useState("")
    const [allNotes, setAllNotes] = useState([])

    const API_URL = "http://localhost:5000/notes"

    const readTodo = async () => {
        try {
            const { data } = await axios.get(API_URL)
            setAllNotes(data)
        } catch (error) {
            console.log(error)
        }
    }
    const createTodo = async () => {
        try {
            await axios.post(API_URL, { task, desc, priority })
            console.log("todo create success")
            readTodo()
        } catch (error) {
            console.log(error)
        }
    }
    const deleteTodo = async id => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            console.log("todo delete success")
            readTodo()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { readTodo() }, [])
    return <>
        <input type="text" onChange={e => setTask(e.target.value)} />
        <textarea onChange={e => setDesc(e.target.value)}></textarea>
        <select onChange={e => setPriority(e.target.value)}>
            <option value="">Choose Priority</option>
            <option value="high">high</option>
            <option value="meduim">meduim</option>
            <option value="low">low</option>
        </select>
        <button onClick={createTodo}>Add</button>

        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Desc</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allNotes.map(item => <tr key={item.id}>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>
                            <button onClick={e => deleteTodo(item.id)}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default BasicTodo