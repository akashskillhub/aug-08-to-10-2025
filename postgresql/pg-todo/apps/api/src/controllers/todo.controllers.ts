import { Request, Response } from "express";
import pool from "../config/db";

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { task, description, priority, user_id } = req.body
        await pool.query("INSERT INTO todos(task,description,priority,user_id) VALUES ($1,$2,$3,$4) RETURNING *", [task, description, priority, user_id])

        res.status(201).json({ message: "todo create sucess ccccc" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" })
    }
}

export const readTodo = async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM todos")
        res.status(200).json({ message: "todo read sucess", result: result.rows })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" })
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { task, description, priority } = req.body
        const { tid } = req.params
        await pool.query("UPDATE todos SET task=$1 ,description=$2, priority=$3 WHERE id=$4 RETURNING *", [task, description, priority, tid])
        res.status(200).json({ message: "todo update sucess" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" })
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { tid } = req.params
        await pool.query("DELETE FROM todos WHERE id=$1", [tid])
        res.status(200).json({ message: "todo delete sucess" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" })
    }
}
// ACID
// AGGRIGATION
// JOIN
// SUB QUERIES