import { useFormik } from 'formik'
import * as yup from 'yup'
import { API_URL, handleClasses } from '../share/utility'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useEffect, useState } from 'react'

const AdminTodo = () => {
    const [allTodos, setAllTodos] = useState([])
    const [allEmployees, setAllEmployees] = useState([])
    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
            emp: "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
            emp: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            createTodo()
            readTodo()
            resetForm()
        }
    })

    const createTodo = async () => {
        try {
            await axios.post(`${API_URL}/todos`, { ...formik.values, complete: false })
            toast.success("todo create success")
        } catch (error) {
            console.log(error)
            toast.error("unable to create todo")
        }
    }
    const readTodo = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/todos`)
            setAllTodos(data)
        } catch (error) {
            console.log(error)
            toast.error("unable to create todo")
        }
    }


    const deleteTodo = async id => {
        try {
            await axios.delete(`${API_URL}/todos/${id}`)
            toast.success("todo delete success")
            readTodo()
        } catch (error) {
            console.log(error)
            toast.error("unable to create todo")
        }
    }


    const readEmployees = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/users`, { params: { role: "employee", active: true } })
            setAllEmployees(data)
        } catch (error) {
            console.log(error)
            toast.error("unable to create todo")
        }
    }
    const handleEmployeeName = empId => allEmployees
        .filter(item => item.id == empId)
        .map(item => item.name)

    useEffect(() => {
        readTodo()
        readEmployees()
    }, [])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Task Manager</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <select className={handleClasses(formik, "emp")} {...formik.getFieldProps("emp")}>
                                        <option value="">Choose Employee</option>
                                        {
                                            allEmployees.map(item => <option value={item.id}>{item.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    <input
                                        className={handleClasses(formik, "task")}
                                        {...formik.getFieldProps("task")}
                                        type="text"
                                        placeholder='task' />
                                    <div className="invalid-feedback">{formik.errors.task}</div>
                                </div>
                                <div>
                                    <textarea
                                        placeholder='desc'
                                        className={handleClasses(formik, "desc")}
                                        {...formik.getFieldProps("desc")}></textarea>
                                    <div className="invalid-feedback">{formik.errors.desc}</div>
                                </div>
                                <div>
                                    <select className={handleClasses(formik, "priority")}
                                        {...formik.getFieldProps("priority")}>
                                        <option selected>Choose priority</option>
                                        <option value="high">high</option>
                                        <option value="medium">medium</option>
                                        <option value="low">low</option>
                                    </select>
                                    <div className="invalid-feedback">{formik.errors.priority}</div>
                                </div>
                                <button type='submit' className='btn btn-primary w-100 mt-3'>Create New Task</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>task</th>
                        <th>desc</th>
                        <th>priority</th>
                        <th>employee</th>
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
                            <td>{handleEmployeeName(item.emp)}</td>
                            <td>
                                {
                                    item.complete
                                        ? <span class="badge text-bg-success">Complete</span>
                                        : <div className="spinner spinner-border text-danger"></div>
                                }
                            </td>
                            <td>
                                <button>edit</button>
                                <button onClick={e => deleteTodo(item.id)}>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div >
    </>
}

export default AdminTodo