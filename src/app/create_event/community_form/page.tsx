import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ImageUploader from "@/components/eventsForm/ImageUploader";
import Form from "./Form";
export default async function Page() {
  const session = await getServerSession(options);
  const user = session?.user;
  return (
    <section className="py-20">
      <div className="container">
        <Form user={user}></Form>
      </div>
    </section>
  );
}
