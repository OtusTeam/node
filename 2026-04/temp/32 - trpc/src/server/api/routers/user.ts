import { z } from "zod";
import { prisma } from "@/db/prisma";
import { router, publicProcedure, adminProcedure } from "../../trpc";

export const userRouter = router({
  list: publicProcedure.query(async () => {
    return await prisma.user.findMany();
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

// Создавали сервер и в сервер импортировали роуты
// Создается сервер, но чтобы подключить роуты, мы импортируем сервер в роуты.