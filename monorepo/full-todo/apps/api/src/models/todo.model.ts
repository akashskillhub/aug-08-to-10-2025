import { Todo } from "@repo/types";
import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema<Todo>({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
})
export default mongoose.model("todo", todoSchema)