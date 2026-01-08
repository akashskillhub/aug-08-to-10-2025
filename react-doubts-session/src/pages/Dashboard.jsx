

// CRUD
// Pagination
// Search and Filter
// hooks

import { useFormik } from "formik"
import { memo, useCallback, useState } from "react"
import * as yup from "yup"
import { useAddTodoMutation, useGetTodoQuery, useModifyTodoMutation, useRemoveTodoMutation } from "../redux/apis/admin.api"
import { toast } from "react-toastify"
const Dashboard = () => {
    const [pagi, setPagi] = useState({ limit: 2, page: 1 })

    const { data } = useGetTodoQuery(pagi)
    const [add] = useAddTodoMutation()
    const [modify] = useModifyTodoMutation()
    const [remove] = useRemoveTodoMutation()


    const createTodo = useCallback(async todoData => {
        try {
            await add(todoData).unwrap()
            toast.success("todo create success")
        } catch (error) {
            toast.error(error ? error.message : "unable to create todo")
            console.log(error)
        }
    }, [])

    const updateTodo = useCallback(async todoData => {
        try {

        } catch (error) {
            console.log(error)
        }
    }, [])

    const deleteTodo = useCallback(async todoData => {
        try {

        } catch (error) {
            console.log(error)
        }
    }, [])


    const formik = useFormik({
        initialValues: {
            task: "Learn Pagination",
            desc: "pagination",
            priority: "high",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            createTodo({ ...values, complete: false })
            resetForm()
        }
    })

    const handlePagination = useCallback(() => {
        if (data) {
            const numberOfButtons = Math.ceil(data.total / pagi.limit)

            const preBtn = pagi.page !== 1 &&
                <button
                    type="button"
                    key={"pre"}
                    onClick={e => setPagi({ ...pagi, page: pagi.page - 1 })}
                    className="btn btn-outline-primary btn-sm" >
                    Pre
                </button>

            const nextBtn = pagi.page !== numberOfButtons &&
                <button
                    type="button"
                    key={"next"}
                    onClick={e => setPagi({ ...pagi, page: pagi.page + 1 })}
                    className="btn btn-outline-primary btn-sm" >
                    Next
                </button >

            const allBtn = Array
                .from({ length: numberOfButtons })
                .map((_, i) => <button
                    key={`page-${i}`}
                    type="button"
                    onClick={e => setPagi({ ...pagi, page: i + 1 })}
                    className={`btn mx-1 btn-sm ${pagi.page === i + 1 ? "btn-primary" : "btn-outline-primary"}`}>
                    {i + 1}
                </button>)

            allBtn.unshift(preBtn)
            allBtn.push(nextBtn)
            return allBtn
        }
    }, [pagi, data])

    return <>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="task" {...formik.getFieldProps("task")} />
            <input type="text" placeholder="desc" {...formik.getFieldProps("desc")} />
            <select {...formik.getFieldProps("priority")}>
                <option value="">Choose Priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
            <button type="submit">add</button>
        </form>

        <select value={pagi.limit} onChange={e => setPagi({ page: 1, limit: e.target.value })}>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>

        <div className="d-flex justify-content-center my-2">
            {handlePagination()}
        </div>

        {
            data && <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Desc</th>
                        <th>Priority</th>
                        <th>Complete</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr key={`todo-${item.id}`}>
                            <td>{item.id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>{item.complete ? "complete" : "in complete"}</td>
                            <td>
                                <button>edit</button>
                                <button>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default memo(Dashboard)