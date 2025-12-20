import axios from "axios"
import clsx from "clsx"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import * as yup from "yup"

const Dashboard = () => {
    const [allTodos, setAllTodos] = useState([])
    const [selectedTodo, setSelectedTodo] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: selectedTodo ? selectedTodo.task : "",
            desc: selectedTodo ? selectedTodo.desc : "",
            priority: selectedTodo ? selectedTodo.priority : "",
            dueDate: selectedTodo ? selectedTodo.dueDate : "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
            dueDate: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedTodo) {
                updateTodo()
            } else {
                createTodo()
            }
            resetForm()
        }
    })
    const handleClassess = key => clsx({
        "form-control": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })


    /*
        Create          POST        URL Body
        Read            GET         URL
        Update          PUT/Patch   URL+id Body
        Delete          DELETE      URL+id
    */
    const API_URL = "http://localhost:5000/notes"
    const createTodo = async () => {
        try {
            await axios.post(API_URL, { ...formik.values, complete: false })
            toast.success("Todo Create Success")
            readTodo()
        } catch (error) {
            console.log(error)
            toast.error("unable to create todo")
        }
    }
    const readTodo = async () => {
        try {
            const { data } = await axios.get(API_URL)
            setAllTodos(data)
        } catch (error) {
            console.log(error)
        }
    }
    const updateTodo = async () => {
        try {
            await axios.patch(`${API_URL}/${selectedTodo.id}`, formik.values)
            toast.success("Todo update success")
            readTodo()
            setSelectedTodo(null)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteTodo = async id => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            toast.success("todo delete success")
            readTodo()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        readTodo()
    }, [])


    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    {...formik.getFieldProps("task")}
                    className={handleClassess("task")}
                    type="text"
                    placeholder='task' />
                <span className="invalid-feedback">{formik.errors.task}</span>
            </div>

            <div>
                <textarea
                    {...formik.getFieldProps("desc")}
                    className={handleClassess("desc")}
                    placeholder='desc'>
                </textarea>
                <span className="invalid-feedback">{formik.errors.desc}</span>
            </div>
            <div>
                <select
                    {...formik.getFieldProps("priority")}
                    className={handleClassess("priority")}>
                    <option value="">Choose Priority</option>
                    <option value="high">high</option>
                    <option value="meduim">meduim</option>
                    <option value="low">low</option>
                </select>
                <span className="invalid-feedback">{formik.errors.priority}</span>
            </div>
            <div>
                <input
                    {...formik.getFieldProps("dueDate")}
                    className={handleClassess("dueDate")}
                    type="date"
                    placeholder='Due date' />
                <span className="invalid-feedback">{formik.errors.dueDate}</span>
            </div>
            {
                selectedTodo
                    ? <button className="btn btn-warning" type="submit">Update</button>
                    : <button className="btn btn-primary" type="submit">Add</button>
            }

        </form>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Desc</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Complete</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allTodos.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>{item.dueDate}</td>
                        <td>{item.complete}</td>
                        <td>
                            <button onClick={e => setSelectedTodo(item)} className="btn btn-outline-warning me-2"> <i className="bi bi-pencil"></i> </button>
                            <button onClick={e => deleteTodo(item.id)} className="btn btn-outline-danger"> <i className="bi bi-trash"></i> </button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Dashboard