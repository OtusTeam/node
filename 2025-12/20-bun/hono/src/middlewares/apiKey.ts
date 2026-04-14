import type { MiddlewareHandler } from "hono";

/**
 * Simple API key middleware for demonstration purposes.
 * Usage:
 *   app.route("/api/secure", new Hono().use(apiKey()).get("/", ...))
 * Provide key via header: "x-api-key: <KEY>" or query "?api_key=<KEY>"
 */
export function apiKey(options?: { key?: string; headerName?: string; queryName?: string }): MiddlewareHandler {
  const expectedKey = options?.key ?? process.env.API_KEY ?? "dev-key";
  const headerName = (options?.headerName ?? "x-api-key").toLowerCase();
  const queryName = options?.queryName ?? "api_key";

  return async (c, next) => {
    const headerKey = c.req.header(headerName) ?? c.req.header(headerName.toUpperCase());
    const queryKey = c.req.query(queryName);
    const provided = headerKey ?? queryKey;
    if (provided !== expectedKey) {
      return c.json({ ok: false, error: { message: "Unauthorized" } }, 401);
    }
    await next();
  };
}

