import { TRPCError } from "@trpc/server/unstable-core-do-not-import";
import { publicProcedure, router } from "./trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";

export const appRouter = router({
  authCallback: publicProcedure.query(() => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    // TODO :Check bearer token also
    if (!user.id || !user.email) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return { success: true };
  }),
});

export type AppRouter = typeof appRouter;
