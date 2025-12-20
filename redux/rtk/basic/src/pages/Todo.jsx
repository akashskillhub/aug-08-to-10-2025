import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useCreateTodoMutation, useDeleteTodoMutation, useReadTodoQuery } from '../redux/apis/todo.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Todo = () => {
    const { data } = useReadTodoQuery()

    //      👇 action       👇 rtk will crate these variables in redux
    const [createTodo, { isLoading, isError, isSuccess, error }] = useCreateTodoMutation()

    const [deleteTodo, {
        isSuccess: deleteSuccess,
        isError: deleteIsError,
        isLoading: deleteIsLoading,
        error: deleteError
    }] = useDeleteTodoMutation()

    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            createTodo(values)
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })


    useEffect(() => {
        if (isSuccess) {
            toast.success("todo create success")

        }
    }, [isSuccess])

    useEffect(() => {
        if (deleteSuccess) {
            toast.success("todo delete success")
        }
    }, [deleteSuccess])

    useEffect(() => {
        if (deleteIsError) {
            toast.error("unable to delete todo")
        }
    }, [deleteIsError])


    if (isError) {
        console.log(error)
    }
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input type="text" {...formik.getFieldProps("title")} className={handleClasses("title")} />
                                <div className="invalid-feedback">{formik.errors.title}</div>
                            </div>
                            <div>
                                <input type="text" {...formik.getFieldProps("desc")} className={handleClasses("desc")} />
                                <div className="invalid-feedback">{formik.errors.desc}</div>
                            </div>
                            <div>
                                <select {...formik.getFieldProps("priority")} className={handleClasses("priority")}  >
                                    <option selected>Choose Priority</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                                <div className="invalid-feedback">{formik.errors.priority}</div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {
            data && <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>desc</th>
                        <th>priority</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button>edit</button>
                                <button onClick={e => deleteTodo(item.id)}>delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>}

    </div>

}

export default Todo