import "server-only";

export type Todo = {
  id: number;
  title: string;
  deadline: number;
  completed: boolean;
};

export type TodoInput = Omit<Todo, "id">;

let id = 1;
const storage = new Map<number, Todo>();

export const store = {
  getAll: () => Array.from(storage.values()),
  get: (id: number) => storage.get(id),
  add: (todo: TodoInput) => {
    storage.set(id, { ...todo, id });
    id++;
  },
  update: (todo: Todo) => {
    storage.set(todo.id, todo);
  },
  delete: (id: number) => {
    storage.delete(id);
  },
};
