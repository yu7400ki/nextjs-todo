import "server-only";
import type { Todo, TodoInput } from "db";
import { db, todos } from "db";
import { eq } from "drizzle-orm";

export type { Todo, TodoInput };

export const store = {
  getAll: async () => await db.select().from(todos).all(),
  get: async (id: number) => await db.query.todos.findFirst({ where: eq(todos.id, id) }),
  add: async (todo: TodoInput) => {
    await db.insert(todos).values(todo);
  },
  update: async (todo: Todo) => {
    await db.update(todos).set(todo).where(eq(todos.id, todo.id));
  },
  remove: async (id: number) => {
    await db.delete(todos).where(eq(todos.id, id));
  },
};
