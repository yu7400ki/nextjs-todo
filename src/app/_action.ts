"use server";

import { type Todo, store } from "./_store";
import type { Action } from "./_components";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const parseFormData = (formData: FormData) => {
  const rawId = formData.get("id");
  const title = formData.get("title");
  const deadline = formData.get("deadline");
  const completed = formData.get("completed") === "on";
  let id: number | undefined = undefined;
  if (rawId) {
    id = Number(rawId);
    if (Number.isNaN(id)) {
      return undefined;
    }
  }
  if (!title || !deadline || typeof title !== "string" || typeof deadline !== "string") {
    return undefined;
  }
  const date = new Date(deadline);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }
  return { id, title, deadline, completed };
};

export const add: Action = async (_: undefined, formData: FormData) => {
  const data = parseFormData(formData);
  if (!data) {
    return undefined;
  }
  const todo = {
    ...data,
    completed: false,
  };
  await store.add(todo);
  revalidatePath("/");
  redirect("/");
};

export const edit: Action = async (_: undefined, formData: FormData) => {
  const todo = parseFormData(formData);
  if (!todo) {
    return undefined;
  }
  if (todo.id === undefined) {
    return undefined;
  }
  await store.update({
    id: todo.id,
    title: todo.title,
    deadline: todo.deadline,
    completed: todo.completed,
  });
  revalidatePath("/");
  redirect("/");
};

export const update = async (todo: Todo) => {
  await store.update(todo);
  revalidatePath("/");
};

export const remove = async (id: number) => {
  revalidatePath("/");
  await store.remove(id);
};
