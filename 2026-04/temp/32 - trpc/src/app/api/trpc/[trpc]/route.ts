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

// export { handler as GET, handler as POST };
// @Injectable()
// export class SectionTrpcRouter extends BaseRouter {
//   routes;

//   constructor(private readonly trpcService: TrpcService) {
//     super();

//     this.routes = {
//       sections: this.trpcService.router({
//         create: this.create(),
//         list: this.list(),
//       }),
//     };
//   }

//   create() {
//     return this.trpcService.procedure
//       .input(
//         type({
//           name: 'string',
//         }),
//       )
//       .mutation(() => {
//         const item = {
//           id: Math.random(),
//           name: faker.book.title(),
//           blocks: [],
//           space_id: 1,
//         } satisfies TSection;
//         sections.push(item);
//         return item;
//       });
//   }

//   list() {
//     return this.trpcService.procedure.query(() => {
//       return sections;
//     });
//   }
// }