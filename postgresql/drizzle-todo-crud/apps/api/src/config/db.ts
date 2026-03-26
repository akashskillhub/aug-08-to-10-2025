import { Pool } from 'pg'
import { drizzle } from "drizzle-orm/node-postgres"
import dotenv from "dotenv"
dotenv.config()
// const pool = new Pool({
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: Number(process.env.DB_PORT),
// })
const pool = new Pool({ connectionString: process.env.PG_URL })

export default drizzle(pool)

