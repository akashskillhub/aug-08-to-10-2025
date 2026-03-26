import { type Config } from "drizzle-kit"
import dotenv from "dotenv"
dotenv.config()
export default {
    dialect: "postgresql",
    schema: "./src/models/index.ts",
    out: "./drizzle",
    dbCredentials: { url: process.env.PG_URL as string }
} satisfies Config