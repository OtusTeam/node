import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { tasksRepo } from "../lib/tasks";

const listQuerySchema = z.object({
  completed: z.enum(["true", "false"]).optional(),
  search: z.string().trim().min(1).max(120).optional(),
});

const createTaskSchema = z.object({
  title: z.string().trim().min(1).max(120),
});

const patchTaskSchema = z.object({
  title: z.string().trim().min(1).max(120).optional(),
  completed: z.boolean().optional(),
});

export const tasksRoutes = new Hono()
  .get("/", zValidator("query", listQuerySchema), (c) => {
    const q = c.req.valid("query");
    const completed = q.completed === undefined ? undefined : q.completed === "true";
    const list = tasksRepo.list({ completed, search: q.search });
    return c.json({ ok: true, data: list });
  })
  .post("/", zValidator("json", createTaskSchema), (c) => {
    const body = c.req.valid("json");
    const created = tasksRepo.create({ title: body.title });
    c.status(201);
    return c.json({ ok: true, data: created });
  })
  .get("/:id", (c) => {
    const id = c.req.param("id");
    const task = tasksRepo.get(id);
    if (!task) return c.json({ ok: false, error: { message: "Not found" } }, 404);
    return c.json({ ok: true, data: task });
  })
  .patch("/:id", zValidator("json", patchTaskSchema), (c) => {
    const id = c.req.param("id");
    const patch = c.req.valid("json");
    const updated = tasksRepo.update(id, patch);
    if (!updated) return c.json({ ok: false, error: { message: "Not found" } }, 404);
    return c.json({ ok: true, data: updated });
  })
  .delete("/:id", (c) => {
    const id = c.req.param("id");
    const existed = tasksRepo.delete(id);
    if (!existed) return c.json({ ok: false, error: { message: "Not found" } }, 404);
    c.status(204);
    return c.body(null);
  });

