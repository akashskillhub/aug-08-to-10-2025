"use client"
import { useGetTodosQuery } from "@/redux/apis/todo.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const Dashboard = () => {
    const { data } = useGetTodosQuery()

    const todoSchema = z.object({
        task: z.string().min(1),
        desc: z.string().min(1),
        priority: z.string().min(1),
    })

    type todoType = z.infer<typeof todoSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<todoType>({
        defaultValues: {
            task: "",
            desc: "",
            priority: ""
        },
        resolver: zodResolver(todoSchema)
    })

    const handleCreate = (values: todoType) => {
        console.log(values)
    }

    return <>
        <form onSubmit={handleSubmit(handleCreate)}>
            <input  {...register("task")} type="text" placeholder="enter task" />
            <input  {...register("desc")} type="text" placeholder="enter desc" />
            <select {...register("priority")}  >
                <option value="">Choose priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
            <button type="submit">add todo</button>
        </form>
    </>
}

export default Dashboard