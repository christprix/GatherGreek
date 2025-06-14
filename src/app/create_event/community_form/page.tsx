import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Form from "./Form";
import { findEvent } from "@/app/actions";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ template: string | undefined }>;
}) {
  const session = await getServerSession(options);
  const user = session?.user;
  const templateid = (await searchParams).template;
  let templateEvent;
  if (templateid) {
    templateEvent = await findEvent(templateid as string);
  }
  return (
    <section className="py-20">
      <div className="container">
        <Form user={user} templateEvent={templateEvent}></Form>
      </div>
    </section>
  );
}
