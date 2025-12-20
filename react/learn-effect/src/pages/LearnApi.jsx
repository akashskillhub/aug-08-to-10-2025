import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const LearnApi = () => {
    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("high")
    const [desc, setDesc] = useState("")
    const [allNotes, setAllNotes] = useState([])

    const handleSubmitWithFetch = async () => {
        await fetch("http://localhost:5000/notes", {
            method: "POST",
            body: JSON.stringify({ task, desc, priority }),
            headers: { "Content-Type": "application/json" }
        })
        console.log("Note Create Success")
    }

    const handleSubmitWithAxios = async () => {
        await axios.post("http://localhost:5000/notes", { task, desc, priority })
        // console.log("create success")
        toast.success("create success")
        readNotes()
    }
    const readNotes = async () => {
        const { data } = await axios.get("http://localhost:5000/notes")
        setAllNotes(data)
    }

    useEffect(() => {
        readNotes()
    }, [])
    return <>
        <input type="text" onChange={e => setTask(e.target.value)} />
        <select onChange={e => setPriority(e.target.value)}>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>
        <textarea onChange={e => setDesc(e.target.value)} placeholder="Enter Description"></textarea>

        <button onClick={handleSubmitWithFetch} type="button">Add with Fetch</button>
        <button onClick={handleSubmitWithAxios} type="button">Add with Axios</button>

        <hr />
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>task</th>
                    <th>priority</th>
                    <th>desc</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allNotes.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.priority}</td>
                        <td>{item.desc}</td>
                        <td>
                            <button>edit</button>
                            <button>remove</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>


    </>
}

export default LearnApi