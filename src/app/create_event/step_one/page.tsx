import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import StepOne from "./Step_one";
export default async function Page() {
  const session = await getServerSession(options);
  const user = session?.user;
  return (
    <section className="py-20">
      <div className="container">
        <StepOne user={user}></StepOne>
      </div>
    </section>
  );
}
