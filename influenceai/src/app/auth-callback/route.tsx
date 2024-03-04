import React from "react";
import { useRouter } from "next/router";
import { trpc } from "../_trpc/client";

import { useSearchParams } from "next/navigation";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
  });
};

export default Page;
