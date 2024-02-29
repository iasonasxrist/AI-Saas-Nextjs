"use client";
import React, { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "../app/_trpc/client";
import { httpBatchLink } from "@trpc/client";

const Provider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => {
    new QueryClient();
  });

  const [trpcClient] = useState(() => {
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhsot:3000/api/trpc",
        }),
      ],
    });
  });
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
      {children}
    </trpc.Provider>
  );
};

export default Provider;
