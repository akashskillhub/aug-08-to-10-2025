import { TODO_CREATE_REQUEST, TODO_CREATE_RESPONSE, TODO_DELETE_REQUEST, TODO_DELETE_RESPONSE, TODO_READ_REQUEST, TODO_READ_RESPONSE, TODO_UPDATE_REQUEST, TODO_UPDATE_RESPONSE } from "@repo/types";
import { Request, Response } from "express";
import Todo from "./../models/todo.model"

export const createTodo = async (
    req: Request<{}, {}, TODO_CREATE_REQUEST>,
    res: Response<TODO_CREATE_RESPONSE>
) => {
    try {
        await Todo.create(req.body)
        res.status(201).json({ message: "todo create success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to  create todo" })
    }
}

export const readTodo = async (
    req: Request<{}, {}, TODO_READ_REQUEST>,
    res: Response<TODO_READ_RESPONSE>
) => {
    try {
        const result = await Todo.find()
        res.status(201).json({ message: "todo read success", result })
    } catch (error) {
        res.status(500).json({ message: "unable to  create todo" })
    }
}

export const updateTodo = async (
    req: Request<{ tid: string }, {}, TODO_UPDATE_REQUEST>,
    res: Response<TODO_UPDATE_RESPONSE>
) => {
    try {
        const { tid } = req.params
        await Todo.findByIdAndUpdate(tid, req.body)
        res.status(201).json({ message: "todo update success" })
    } catch (error) {
        res.status(500).json({ message: "unable to update todo" })
    }
}

export const deleteTodo = async (
    req: Request<{ tid: string }, {}, TODO_DELETE_REQUEST>,
    res: Response<TODO_DELETE_RESPONSE>
) => {
    try {
        const { tid } = req.params
        await Todo.findByIdAndDelete(tid)
        res.status(201).json({ message: "todo delete success" })
    } catch (error) {
        res.status(500).json({ message: "unable to delete todo" })
    }
}