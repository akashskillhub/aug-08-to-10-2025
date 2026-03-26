import type { Request, Response } from "express"
import Todo from "../models/Todo.js"

export const createTodo = async (req: Request, res: Response) => {
    try {
        // await Todo.create({ task: "aaa", desc: true, priority: "low" })
        await Todo.create(req.body)
        res.status(200).json({ message: "todo create success" })
    } catch (error) {
        res.status(400).json({ message: "unable to create todo" })
    }
}
export const readTodo = async (req: Request, res: Response) => {
    try {
        const result = await Todo.find()
        res.status(200).json({ message: "todo fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to fetch todo" })
    }
}
export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { tid } = req.params
        await Todo.findByIdAndUpdate(tid, req.body)
        res.status(200).json({ message: "todo update success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to update todo" })
    }
}
export const deleteTodo = async (req: Request, res: Response) => {
    try {
        await Todo.findByIdAndDelete(req.params.tid)
        res.status(200).json({ message: "todo delete success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to delete todo" })
    }
}