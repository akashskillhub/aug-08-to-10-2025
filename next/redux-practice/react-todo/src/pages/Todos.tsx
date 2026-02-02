import { useFormik } from "formik"
import * as yup from "yup"
import type { Note } from "../types/Note"
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery } from "../redux/apis/todo.api"
const Todos = () => {
    const { data } = useGetTodosQuery()
    const [addTodo] = useAddTodoMutation()

    const [deleteTodo] = useDeleteTodoMutation()

    const TodoSchema: yup.ObjectSchema<Note> = yup.object({
        id: yup.number().optional(),
        task: yup.string().required(),
        desc: yup.string().required(),
        priority: yup.string().required(),
    })

    const formik = useFormik<Note>({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: TodoSchema,
        onSubmit: (values, { resetForm }) => {
            handleCreateTodo(values)
            resetForm()
        }
    })

    const handleCreateTodo = async (arg: Note) => {
        try {
            await addTodo(arg).unwrap()
            console.log("todo create success")
        } catch (error) {
            console.log(error)
        }
    }
    const handleRemoveTodo = async (arg: number) => {
        try {
            await deleteTodo(arg).unwrap()
            console.log("todo delete success")
        } catch (error) {
            console.log(error)
        }
    }
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input  {...formik.getFieldProps("task")} type="text" placeholder="task" />
            <input  {...formik.getFieldProps("desc")} type="text" placeholder="desc" />
            <select {...formik.getFieldProps("priority")}  >
                <option value="">Choose priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
            <button type="submit">Create Todo</button>
        </form>

        {
            data && <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>task</th>
                        <th>desc</th>
                        <th>priority</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button onClick={() => handleRemoveTodo(item.id as number)}>delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default Todos