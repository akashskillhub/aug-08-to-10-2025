import mongoose, { Schema, type Document } from "mongoose"

export interface TODO extends Document {
    task: string
    desc: string
    priority: "low" | "medium" | "high"
    complete: boolean
}
const todoSchema = new Schema<TODO>({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, enum: ["low", "medium", "high"], required: true },
    complete: { type: Boolean, default: false }
})
export default mongoose.model<TODO>("todo", todoSchema)

// monorepo turbo