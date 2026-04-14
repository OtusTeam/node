import { Elysia } from "elysia";

export const rootRoutes = new Elysia({ name: "routes:root" })
  .get("/", () => ({
    ok: true,
    service: "elysia-on-bun",
    docs: "/swagger",
    routes: ["/health", "/api/v1/tasks", "/api/v1/admin/stats", "/ws"],
  }))
  .get("/health", () => "ok");

