import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email(),
    age: z.number().int().min(0).max(150).optional(),
  })

export const createUserSchema = z.object({
  body: userSchema,
});

export type User = z.infer<typeof userSchema>;  

export const updateUserSchema = z.object({
  params: z.object({ id: z.string().uuid() }),
  body: z.object({
    name: z.string().min(1).max(100).optional(),
    email: z.string().email().optional(),
    age: z.number().int().min(0).max(150).optional(),
  })
  .strict()
  .refine((v) => Object.keys(v).length > 0, { message: "At least one field must be provided" }),
});

export const idParamSchema = z.object({
  params: z.object({ id: z.string().uuid() }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>["body"];
export type UpdateUserInput = z.infer<typeof updateUserSchema>["body"];