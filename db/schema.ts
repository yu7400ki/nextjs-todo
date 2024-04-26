import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todo", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  deadline: text("deadline").notNull(),
  completed: integer("completed", { mode: "boolean" }).notNull(),
});
