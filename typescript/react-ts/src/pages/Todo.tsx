import { useState } from "react"
const Todo = () => {

    type TODO = {
        task: string,
        desc: string,
        priority: string,
        complete?: boolean,
        id?: number
    }
    const [allTodos, setAllTodos] = useState<TODO[]>([])

    const [note, setNote] = useState<TODO>({
        task: "",
        desc: "",
        priority: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target
        setNote({ ...note, [name]: value })
    }

    const handleDelete = (id: number) => {
        setAllTodos(allTodos.filter(item => item.id !== id))
    }

    const handleUpdate = (id: number, complete: boolean) => {
        const copy = [...allTodos]
        const index = allTodos.findIndex(item => item.id === id)
        copy[index].complete = complete
        setAllTodos(copy)
    }
    return <>
        <input onChange={handleChange} name="task" type="text" placeholder="enter task" />
        <textarea onChange={handleChange} name="desc" placeholder="enter desc"></textarea>
        <select onChange={handleChange} name="priority">
            <option value="">Choose priority</option>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>
        <button onClick={() => setAllTodos([...allTodos, {
            ...note,
            id: allTodos.length + 1,
            complete: false
        }])} type="submit">Create</button>

        <hr />

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>task</th>
                    <th>desc</th>
                    <th>priority</th>
                    <th>complete</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allTodos.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>{item.complete ? "Yes" : "No"}</td>
                        <td>
                            {
                                item.complete
                                    ? <button onClick={() => handleUpdate(item.id as number, false)}>mark in complete</button>
                                    : <button onClick={() => handleUpdate(item.id as number, true)}>mark complete</button>
                            }
                            <button onClick={() => handleDelete(item.id as number)}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>

        </table>
    </>
}

export default Todo