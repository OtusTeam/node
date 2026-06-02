import { Hono } from "hono";

export const healthRoutes = new Hono()
  .get("/", (c) =>
    c.json({
      ok: true,
      service: "hono-on-bun",
      routes: ["/health", "/api/tasks"],
    }),
  )
  .get("/health", (c) => c.text("ok"));

