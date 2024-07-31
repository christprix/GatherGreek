import greekstep from "/public/greekstep-p01.jpg";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import dateFormat from "dateformat";
import Avatarlist from "@/components/Avatarlist";
import JoinEventButton from "@/components/event/JoinEventButton";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function EventDetails({
  params,
}: {
  params: { eventid: string };
}) {
  const dbevent = await prisma.event.findUnique({
    where: {
      id: params.eventid,
    },
  });
  // GET SESSION USERID
  const session = await getServerSession(options);
  const userId = session?.user?.id;

  return (
    <>
      {dbevent ? (
        <div>
          <div className="flex m-4">
            <div id="left" className="grid flex-col flex-grow">
              <div className="text-2xl">{dbevent.title}</div>
              <div className="w-16">
                <Avatar></Avatar>
              </div>
              <div>
                {dateFormat(`${dbevent.eventDate}`, "dddd, mmmm dS, yyyy")}
              </div>
              <div>{dbevent.description}</div>
              <div>{dbevent.priceInCents}</div>
              <div className="p-3">
                <Avatarlist></Avatarlist>
              </div>
              <JoinEventButton
                eventId={params.eventid}
                userId={userId}
              ></JoinEventButton>
            </div>
          </div>
        </div>
      ) : (
        <div>Sorry Can't Find Event!</div>
      )}
    </>
  );
}
