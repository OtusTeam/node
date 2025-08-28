import { z } from "zod";
import { prisma } from "@/db/prisma";
import { router, publicProcedure } from "../../trpc";

export const postRouter = router({
  list: publicProcedure.query(() => {
    return prisma.post.findMany({ include: { user: true } });
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string(),
        userId: z.string(),
      })
    )
    .mutation(({ input }) => {
      return prisma.post.create({ data: input });
    }),
});