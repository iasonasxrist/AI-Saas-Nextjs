import React from "react";
import { useRouter } from "next/router";

import { useSearchParams } from "next/navigation";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const apiResponse = await fetch(`/api/whatever`)

  const data = await apiResponse.json()

  return <div>route</div>;
};

export default Page;
