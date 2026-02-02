"use client"
import { useAddTodoMutation, useGetTodosQuery } from "@/app/redux/apis/todo.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const Todos = () => {

    const { data } = useGetTodosQuery()
    const [addTodo] = useAddTodoMutation()

    const noteSchema = z.object({
        task: z.string().min(1),
        desc: z.string().min(1),
        priority: z.string().min(1),
    })

    type Note = z.infer<typeof noteSchema>

    const { register, reset, formState: { errors }, handleSubmit } = useForm<Note>({
        defaultValues: {
            task: "",
            desc: "",
            priority: ""
        },
        resolver: zodResolver(noteSchema)
    })

    const createTodo = async (data: Note) => {
        try {
            await addTodo(data).unwrap()
            console.log("todo create success")
        } catch (error) {
            console.log(error)
        }
        reset()
    }

    return <>
        <form onSubmit={handleSubmit(createTodo)}>
            <input  {...register("task")} type="text" placeholder="task" />
            <input  {...register("desc")} type="text" placeholder="desc" />
            <select {...register("priority")}    >
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
                                <button >delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default Todos