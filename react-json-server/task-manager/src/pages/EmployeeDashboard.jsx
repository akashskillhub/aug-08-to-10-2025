import axios from 'axios'
import { API_URL } from '../share/utility'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../App'
import { toast } from 'react-toastify'

const EmployeeDashboard = () => {
    const { auth } = useContext(AuthContext)
    const [allEmployeeTodos, setAllEmployeeTodos] = useState([])
    const readTodos = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/todos`, { params: { emp: auth.id } })
            setAllEmployeeTodos(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleComplete = async (id, status) => {
        try {
            await axios.patch(`${API_URL}/todos/${id}`, { complete: status })
            toast.success("todo complete success")
            readTodos()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        readTodos()
    }, [])
    return <div className='container mt-3'>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Desc</th>
                    <th>Priority</th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody>
                {
                    allEmployeeTodos.map(item => <tr className={`${item.complete ? "table-success" : "table-danger"}`}>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>
                            {
                                item.complete
                                    ? <button
                                        onClick={e => handleComplete(item.id, false)}
                                        type="button"
                                        class="btn btn-danger">Mark InCommplete</button>
                                    : <button
                                        onClick={e => handleComplete(item.id, true)}
                                        type="button"
                                        class="btn btn-success">Mark Commplete</button>
                            }

                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default EmployeeDashboard