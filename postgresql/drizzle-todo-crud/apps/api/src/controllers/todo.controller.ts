import { TODO_CREATE_REQUEST, TODO_CREATE_RESPONSE, TODO_DELETE_REQUEST, TODO_DELETE_RESPONSE, TODO_READ_REQUEST, TODO_READ_RESPONSE, TODO_UPDATE_REQUEST, TODO_UPDATE_RESPONSE } from "@repo/todo";
import { Request, Response } from "express";
import db from "../config/db";
import { notes } from "../models";
import { eq } from "drizzle-orm";

export const createTodo = async (
    req: Request<{}, {}, TODO_CREATE_REQUEST>,
    res: Response<TODO_CREATE_RESPONSE>) => {
    try {
        const { task, description } = req.body
        await db.insert(notes).values({ task, description })
        res.status(201).json({ message: "todo create success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "somthing went wrong" })
    }
}

export const readTodo = async (
    req: Request<{}, {}, TODO_READ_REQUEST>,
    res: Response<TODO_READ_RESPONSE>) => {
    try {
        const result = await db.select().from(notes)
        console.log(result)
        res.status(200).json({ message: "todo read success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "somthing went wrong" })
    }
}

export const updateTodo = async (
    req: Request<{ tid: string }, {}, TODO_UPDATE_REQUEST>,
    res: Response<TODO_UPDATE_RESPONSE>) => {
    try {
        const { tid } = req.params
        const { task, description } = req.body
        await db.update(notes).set({ task, description }).where(eq(notes.id, Number(tid)))
        res.status(200).json({ message: "todo update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "somthing went wrong" })
    }
}

export const deleteTodo = async (
    req: Request<{ tid: string }, {}, TODO_DELETE_REQUEST>,
    res: Response<TODO_DELETE_RESPONSE>) => {
    try {
        const { tid } = req.params
        await db.delete(notes).where(eq(notes.id, Number(tid)))
        res.status(200).json({ message: "todo delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "somthing went wrong" })
    }
}