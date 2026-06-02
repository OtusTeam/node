import { Elysia } from "elysia";
import type { TaskStore } from "../storage/taskStore";

export const adminRoutes = (store: TaskStore) =>
  new Elysia({ name: "routes:admin" })
    .guard((app) => app.requireAdmin())
    .get(
      "/admin/stats",
      ({ user }) => ({
        ok: true,
        data: {
          user,
          tasksCount: store.count(),
        },
      }),
      { detail: { tags: ["Admin"] } },
    );

