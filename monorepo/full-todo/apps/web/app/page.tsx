"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { TODO_CREATE_REQUEST } from "@repo/types"
import { useForm } from "react-hook-form"
import z from "zod"
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from "../redux/apis/todo.api"
import { useState } from "react"

const page = () => {
  const [show, setShow] = useState<null | string>(null)

  const { data } = useGetTodosQuery()
  const [addTodo] = useAddTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  const todoSchema = z.object({
    task: z.string().min(2),
    desc: z.string().min(2),
    priority: z.string().min(2),
  }) satisfies z.ZodType<TODO_CREATE_REQUEST>

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(todoSchema) })

  const handleFormSubmit = async (todoData: TODO_CREATE_REQUEST) => {
    try {
      if (show) {
        await updateTodo({ ...todoData, _id: show }).unwrap()
        console.log("todo update success")
        setShow(null)
      } else {
        await addTodo(todoData).unwrap()
        console.log("todo create success")
      }

      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return <>
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input  {...register("task")} type="text" placeholder="Enter Task" />
      <div>{errors.task?.message}</div>

      <input  {...register("desc")} type="text" placeholder="Enter Desc" />
      <div>{errors.desc?.message}</div>

      <select {...register("priority")} >
        <option value="">Choose Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <div>{errors.priority?.message}</div>
      {
        show
          ? <button type="submit">Update Todo</button>
          : <button type="submit">Create</button>
      }

    </form>

    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Desc</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.result?.map(item => <tr key={item._id}>
            <td>{item.task}</td>
            <td>{item.desc}</td>
            <td>{item.priority}</td>
            <td>
              <button onClick={() => {
                reset(item)
                setShow(item._id as string)
              }}>Edit</button>

              <button onClick={() => deleteTodo({ _id: item._id as string })}>Remove</button>

            </td>
          </tr>)
        }
      </tbody>
    </table>
  </>
}

export default page