import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Form from "./Form";
import { findDraftEvent, findEvent } from "@/app/actions";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    template: string | undefined;
    draftid: string | undefined;
  }>;
}) {
  const session = await getServerSession(options);
  const user = session?.user;
  // Check if it is a template or a draft
  const templateid = (await searchParams).template;
  const draftid = (await searchParams).draftid;
  let templateEvent;
  let draftconfirmation;
  console.log(draftid);
  if (draftid) {
    templateEvent = await findDraftEvent(draftid as string);
    draftconfirmation = true;
    console.log(templateEvent);
  } else if (templateid) {
    templateEvent = await findEvent(templateid as string);
    draftconfirmation = false;
  }
  return (
    <section className="py-20">
      <div className="container">
        <Form
          user={user}
          templateEvent={templateEvent}
          draftconfirmation={draftconfirmation}
        ></Form>
      </div>
    </section>
  );
}
