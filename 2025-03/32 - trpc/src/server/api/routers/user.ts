import { z } from "zod";
import { prisma } from "@/db/prisma";
import { router, publicProcedure, adminProcedure } from "../../trpc";

export const userRouter = router({
  list: publicProcedure.query(() => {
    return prisma.user.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
      })
    )
    .mutation(({ input }) => {
      return prisma.user.create({ data: input });
    }),
});