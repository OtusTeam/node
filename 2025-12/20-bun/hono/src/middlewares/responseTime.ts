import type { MiddlewareHandler } from "hono";

export function responseTime(): MiddlewareHandler {
  return async (c, next) => {
    const start = performance.now();
    await next();
    c.header("x-response-time-ms", String(Math.round(performance.now() - start)));
  };
}

