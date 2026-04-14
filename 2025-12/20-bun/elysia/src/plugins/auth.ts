import { Elysia } from "elysia";

export type AuthUser = {
  id: string;
  role: "admin";
};

export const auth = (opts?: { adminToken?: string }) => {
  const adminToken = opts?.adminToken ?? process.env.ADMIN_TOKEN ?? "devtoken";

  return new Elysia({ name: "plugin:auth" })
    .derive(({ headers }) => {
      const authHeader = headers.authorization;
      const token = authHeader?.startsWith("Bearer ")
        ? authHeader.slice("Bearer ".length)
        : undefined;

      const user: AuthUser | null =
        token && token === adminToken ? { id: "admin", role: "admin" } : null;

      return { user };
    })
    .macro(({ onBeforeHandle }) => ({
      requireAdmin() {
        onBeforeHandle(({ user, set }) => {
          if (!user) {
            set.status = 401;
            return { ok: false, error: { message: "Unauthorized" } };
          }
        });
      },
    }));
};

