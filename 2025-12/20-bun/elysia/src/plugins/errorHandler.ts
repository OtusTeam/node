import { Elysia } from "elysia";

export const errorHandler = new Elysia({ name: "plugin:errorHandler" }).onError(
  ({ code, error, set }) => {
    if (code === "NOT_FOUND") {
      set.status = 404;
      return { ok: false, error: { message: "Not found" } };
    }

    // Validation errors and others will land here too; keep the response stable for demos.
    set.status = 500;
    return {
      ok: false,
      error: {
        message: error instanceof Error ? error.message : "Unknown error",
      },
    };
  },
);

