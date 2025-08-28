import { initTRPC, TRPCError } from "@trpc/server";

const users: Record<string, string> = {
   'admin-token': 'admin',
   'anon-token': 'anon',
}

export async function createContext({ req }: { req: Request }) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1] ?? null;

  const role = token ? users[token] ?? '' : '';

  return { role };
}

export type Context = Awaited<ReturnType<typeof createContext>>;

export const t = initTRPC.context<Context>().create();

const isAdmin = t.middleware(({ ctx, next }) => {
   if (ctx.role !== "admin") {
     throw new TRPCError({ code: "FORBIDDEN" });
   }

   return next();
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const adminProcedure = t.procedure.use(isAdmin);



// trpc server подключается в backend server, 
// а фронтенд работает через backend server с trpc

// import { initTRPC, TRPCError } from "@trpc/server";



// export async function createContext({ req }: { req: Request }) {
//   const authHeader = req.headers.get('authorization');
//   const token = authHeader?.split(' ')[1] ?? null;

//   const role = token ? users[token] ?? '' : '';

//   return { role };
// }

// export type Context = Awaited<ReturnType<typeof createContext>>;

// export const t = initTRPC.context<Context>().create();

// const isAdmin = t.middleware(({ ctx, next }) => {
//   if (ctx.role !== "admin") {
//     throw new TRPCError({ code: "FORBIDDEN" });
//   }
//   return next();
// });

// export const router = t.router;
// export const publicProcedure = t.procedure;
// export const adminProcedure = t.procedure.use(isAdmin);