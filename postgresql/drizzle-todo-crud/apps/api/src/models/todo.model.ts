import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
    id: serial().primaryKey(),
    task: text().notNull(),
    description: text().notNull(),
    isComplete: boolean().default(false),
})