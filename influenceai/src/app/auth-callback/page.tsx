"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
    onError: ({ error }) => {
      if (error.data?.code == `UNAUTHORIZED`) {
        router.push(`/sign-in`);
      }
    },
    retry: true,
    retryDelay: 500,
  });

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col mt-24 items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />

        <h3>Setting up your account...</h3>
        <p> You will br directed automatically.</p>
      </div>
    </div>
  );
};

export default Page;
