"use server";

import { type Todo, store } from "./_store";
import type { Action } from "./_components";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { parseWithZod } from "@conform-to/zod";
import { todoCreateSchema, todoSchema } from "./_schema";
import type { SubmissionResult } from "@conform-to/react";

export const add: Action = async (_: SubmissionResult | undefined, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: todoCreateSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  await store.add(submission.value);
  revalidatePath("/");
  redirect("/");
};

export const edit: Action = async (_: SubmissionResult | undefined, formData: FormData) => {
  const submmission = parseWithZod(formData, {
    schema: todoSchema,
  });
  if (submmission.status !== "success") {
    return submmission.reply();
  }
  await store.update(submmission.value);
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
