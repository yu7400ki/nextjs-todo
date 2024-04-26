import "server-only";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { todos } from "./schema";
import Database from "better-sqlite3";

const sqlite = new Database("./db/db.sqlite");
const db = drizzle(sqlite, { schema: { todos } });

type Todo = typeof todos.$inferSelect;
type TodoInput = typeof todos.$inferInsert;

export { db, todos };
export type { Todo, TodoInput };
