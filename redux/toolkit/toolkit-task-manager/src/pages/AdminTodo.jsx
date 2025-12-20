import { useEffect } from 'react'
import Center from '../components/Center'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, deleteTodo, readEmployee, readTodo } from '../redux/actions/admin.actions'
import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from '../share/utility'
import { toast } from 'react-toastify'

const AdminTodo = () => {
    const dispatch = useDispatch()
    const {
        allEmployees,
        allTodos,
        loading,
        createSuccess,
        deleteSuccess,
        error } = useSelector(state => state.admin)

    const formik = useFormik({
        initialValues: {
            employee: "",
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            employee: yup.string().required(),
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(createTodo({ ...values, complete: false }))
            resetForm()
        }
    })


    useEffect(() => {
        dispatch(readEmployee())
        dispatch(readTodo())
    }, [])

    useEffect(() => {
        if (createSuccess) {
            toast.success("todo create success")
        }
    }, [createSuccess])

    useEffect(() => {
        if (deleteSuccess) {
            toast.success("todo delete success")
        }
    }, [deleteSuccess])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    useEffect(() => {
        if (createSuccess || deleteSuccess) {
            dispatch(readTodo())
        }
    }, [createSuccess, deleteSuccess])


    if (loading) {
        return <div class="spinner-border text-primary"></div>
    }

    return <>
        <Center>
            <div class="card">
                <div class="card-header">Todo CRUD</div>
                <div class="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <select
                                className={handleClasses(formik, "employee")}
                                {...formik.getFieldProps("employee")}>
                                <option value="">Choose Employee</option>
                                {
                                    allEmployees && allEmployees.map(item => <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <div className="invalid-feedback">{formik.errors.employee}</div>
                        </div>
                        <div>
                            <input type="text" placeholder='task' className={handleClasses(formik, "task")} {...formik.getFieldProps("task")} />
                            <div className="invalid-feedback">{formik.errors.task}</div>
                        </div>
                        <div>
                            <input type="text" placeholder='desc' className={handleClasses(formik, "desc")} {...formik.getFieldProps("desc")} />
                            <div className="invalid-feedback">{formik.errors.desc}</div>
                        </div>
                        <div>
                            <select className={handleClasses(formik, "priority")} {...formik.getFieldProps("priority")}>
                                <option value="">Choose Priority</option>
                                <option value="high">high</option>
                                <option value="medium">medium</option>
                                <option value="low">low</option>
                            </select>
                            <div className="invalid-feedback">{formik.errors.priority}</div>
                        </div>
                        <button className='btn btn-primary w-100 btn-lg' type='submit'>Create Todo</button>
                    </form>
                </div>
            </div>
        </Center>

        <div className="container">
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee</th>
                        <th>Task</th>
                        <th>Desc</th>
                        <th>Priority</th>
                        <th>Complete</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTodos && allTodos.map(item => <tr>
                            <td>{item.id}</td>
                            <td>
                                {
                                    allEmployees && allEmployees.filter(emp => emp.id == item.employee).map(emp => emp.name)
                                }
                            </td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>{
                                item.complete
                                    ? <span class="badge text-bg-success">Complete</span>
                                    : <div class="spinner-border text-light"></div>
                            }</td>
                            <td> <button onClick={e => dispatch(deleteTodo(item.id))}>delete</button> </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default AdminTodo