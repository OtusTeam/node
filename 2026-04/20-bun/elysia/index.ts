import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

const tasks = new Map<string, Task>();

function nowIso() {
  return new Date().toISOString();
}

function randomId() {
  return crypto.randomUUID();
}

const port = Number(process.env.PORT ?? 3000);

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "Elysia on Bun — demo API",
          version: "1.0.0",
        },
      },
    }),
  )
  .onError(({ code, error, set }) => {
    if (code === "NOT_FOUND") {
      set.status = 404;
      return { ok: false, error: { message: "Not found" } };
    }
    set.status = 500;
    return {
      ok: false,
      error: { message: error instanceof Error ? error.message : "Unknown error" },
    };
  })
  .derive(() => ({ ts: nowIso() }))
  .get("/", () => ({
    ok: true,
    service: "elysia-on-bun",
    docs: "/swagger",
    routes: ["/health", "/api/tasks", "/ws"],
  }))
  .get("/health", () => "ok")
  .group("/api", (api) =>
    api
      .get(
        "/tasks",
        ({ query }) => {
          const completed =
            query.completed === undefined
              ? undefined
              : query.completed === "true";

          let list = [...tasks.values()];
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
          tasks.set(id, task);
          set.status = 201;
          return { ok: true, data: task };
        },
        {
          body: t.Object({
            title: t.String({ minLength: 1, maxLength: 120 }),
          }),
        },
      )
      .get("/tasks/:id", ({ params, set }) => {
        const task = tasks.get(params.id);
        if (!task) {
          set.status = 404;
          return { ok: false, error: { message: "Not found" } };
        }
        return { ok: true, data: task };
      })
      .patch(
        "/tasks/:id",
        ({ params, body, set }) => {
          const task = tasks.get(params.id);
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
          tasks.set(params.id, updated);
          return { ok: true, data: updated };
        },
        {
          body: t.Object({
            title: t.Optional(t.String({ minLength: 1, maxLength: 120 })),
            completed: t.Optional(t.Boolean()),
          }),
        },
      )
      .delete("/tasks/:id", ({ params, set }) => {
        if (!tasks.has(params.id)) {
          set.status = 404;
          return { ok: false, error: { message: "Not found" } };
        }
        tasks.delete(params.id);
        set.status = 204;
        return;
      }),
  )
  .ws("/ws", {
    message(ws, message) {
      ws.send(
        JSON.stringify({
          ok: true,
          echo: message,
          serverTime: nowIso(),
        }),
      );
    },
  })
  .listen(port);

console.log(`Elysia server listening on http://localhost:${port}`);