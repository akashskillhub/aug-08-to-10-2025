import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, removeTodo } from '../redux/actions/todoActions'
// import { createTodo } from '../redux/store'

// typeScript

const Todo = () => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()
    //       👇from todoReducer                   👇 from combinedReducer
    const { notes } = useSelector(state => state.todos)
    return <>
        <input type="text" onChange={e => setTask(e.target.value)} />
        <button onClick={e => dispatch(createTodo(task))}>add</button>

        <ul>
            {
                notes.map(item => <li>
                    {item}
                    <button onClick={e => dispatch(removeTodo(item))}>remove</button>
                </li>)
            }
        </ul>
    </>
}

export default Todo