import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Dashboard from "../../components/Dashboard";

const Page = async () => {
  const user = getKindeServerSession().getUser();

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard');
  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    redirect("/auth-callback?origin=dashboard");
  }
  return <div>{user.email}</div>;
};
export default Page;
