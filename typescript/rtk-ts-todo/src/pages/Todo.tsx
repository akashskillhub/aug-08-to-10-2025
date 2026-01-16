import { useFormik } from "formik"
import * as yup from "yup"
import type { TODO_TYPE } from "../types/note"
import { useAddNoteMutation, useDeleteNoteMutation, useGetNotesQuery, useUpdateNoteMutation } from "../redux/apis/todo.api"
import { toast } from "react-toastify"

const Todo = () => {
    const { data } = useGetNotesQuery()
    const [createNote] = useAddNoteMutation()
    const [removeTodo] = useDeleteNoteMutation()
    const [modifyTodo] = useUpdateNoteMutation()

    const formik = useFormik<TODO_TYPE>({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
            complete: false
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: async (values) => {
            try {
                await createNote(values).unwrap()
                toast.success("todo create success")
            } catch (error) {
                console.log(error)
                toast.error("unable to create todo")
            }

        }
    })

    const deleteTodo = async (id: number) => {
        try {
            await removeTodo(id).unwrap()
            toast.success("todo delete success")
        } catch (error) {
            console.log(error)
            toast.error("unable to delete todo")
        }
    }

    const updateTodo = async (arg: TODO_TYPE) => {
        try {
            await modifyTodo(arg).unwrap()
            toast.success("todo update success")
        } catch (error) {
            console.log(error)
            toast.error("unable to update todo")
        }
    }
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input  {...formik.getFieldProps("task")} type="text" placeholder="enter task" />
            <input  {...formik.getFieldProps("desc")} type="text" placeholder="desc" />
            <select {...formik.getFieldProps("priority")} >
                <option value="">Choose priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
            <button type="submit">add</button>
        </form>

        {
            data && <table>
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
                    {data.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>{item.complete ? "yes" : "no"}</td>
                        <td>
                            {
                                item.complete
                                    ? <button onClick={() => updateTodo({ ...item, complete: false })}>mark in complete</button>
                                    : <button onClick={() => updateTodo({ ...item, complete: true })}>mark complete</button>
                            }
                            <button onClick={() => deleteTodo(item.id as number)}>Remove</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        }
    </>
}

export default Todo