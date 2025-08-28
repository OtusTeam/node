import { appRouter } from "@/server/api/routers/_app";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "@/server/trpc";
import { NextRequest } from "next/server";


// история, как с graphQL - один эндпоинт для работы

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
  });
};

export { handler as GET, handler as POST };