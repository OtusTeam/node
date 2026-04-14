import { Elysia, t } from "elysia";
import type { Task } from "../domain/task";
import { randomId } from "../lib/id";
import { nowIso } from "../lib/time";
import type { TaskStore } from "../storage/taskStore";

export const tasksRoutes = (store: TaskStore) =>
  new Elysia({ name: "routes:tasks" })
    .get(
      "/tasks",
      ({ query }) => {
        const completed =
          query.completed === undefined ? undefined : query.completed === "true";

        let list = store.list();
        if (completed !== undefined)
          list = list.filter((t) => t.completed === completed);
        if (query.search) {
          const s = query.search.toLowerCase();
          list = list.filter((t) => t.title.toLowerCase().includes(s));
        }
        list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

        return { ok: true, data: list };
      },
      {
        query: t.Object({
          completed: t.Optional(t.Union([t.Literal("true"), t.Literal("false")])),
          search: t.Optional(t.String({ minLength: 1, maxLength: 120 })),
        }),
        detail: { tags: ["Tasks"] },
      },
    )
    .post(
      "/tasks",
      ({ body, set, ts }) => {
        const id = randomId();
        const task: Task = {
          id,
          title: body.title.trim(),
          completed: false,
          createdAt: ts,
          updatedAt: ts,
        };
        store.set(task);
        set.status = 201;
        return { ok: true, data: task };
      },
      {
        body: t.Object({
          title: t.String({ minLength: 1, maxLength: 120 }),
        }),
        detail: { tags: ["Tasks"] },
      },
    )
    .get(
      "/tasks/:id",
      ({ params, set }) => {
        const task = store.get(params.id);
        if (!task) {
          set.status = 404;
          return { ok: false, error: { message: "Not found" } };
        }
        return { ok: true, data: task };
      },
      { detail: { tags: ["Tasks"] } },
    )
    .patch(
      "/tasks/:id",
      ({ params, body, set }) => {
        const task = store.get(params.id);
        if (!task) {
          set.status = 404;
          return { ok: false, error: { message: "Not found" } };
        }

        const updated: Task = {
          ...task,
          ...(body.title !== undefined ? { title: body.title.trim() } : {}),
          ...(body.completed !== undefined ? { completed: body.completed } : {}),
          updatedAt: nowIso(),
        };
        store.set(updated);
        return { ok: true, data: updated };
      },
      {
        body: t.Object({
          title: t.Optional(t.String({ minLength: 1, maxLength: 120 })),
          completed: t.Optional(t.Boolean()),
        }),
        detail: { tags: ["Tasks"] },
      },
    )
    .delete(
      "/tasks/:id",
      ({ params, set }) => {
        if (!store.has(params.id)) {
          set.status = 404;
          return { ok: false, error: { message: "Not found" } };
        }
        store.delete(params.id);
        set.status = 204;
        return;
      },
      { detail: { tags: ["Tasks"] } },
    );

