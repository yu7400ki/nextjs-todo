import { z } from "zod";

export const todoSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1).max(100),
  deadline: z.string().regex(/^\d{1,4}\/\d{1,2}\/\d{1,2}$/),
  completed: z.boolean().default(false),
});

export const todoCreateSchema = todoSchema.omit({ id: true });
