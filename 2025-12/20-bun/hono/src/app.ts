import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

import { responseTime } from "./middlewares/responseTime";
import { healthRoutes } from "./routes/health";
import { tasksRoutes } from "./routes/tasks";

export const app = new Hono()
  .use(logger())
  .use(prettyJSON())
  .use(responseTime())
  .route("/", healthRoutes)
  .route("/api/tasks", tasksRoutes)
  .notFound((c) => c.json({ ok: false, error: { message: "Not found" } }, 404))
  .onError((err, c) => {
    return c.json(
      {
        ok: false,
        error: {
          message: err instanceof Error ? err.message : "Unknown error",
        },
      },
      500,
    );
  });

