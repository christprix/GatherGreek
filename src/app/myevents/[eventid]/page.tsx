import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { Anton } from "next/font/google";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { findUserInfo, findMyEvents, findMyEventsbyId } from "@/app/actions";
import Display from "./Display";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default async function EventDetails(props: {
  params: Promise<{ eventid: string }>;
}) {
  const params = await props.params;
  const dbevent = await prisma.event.findUnique({
    where: {
      id: params.eventid,
    },
    include: {
      Users_going_to_event: {
        select: {
          firstName: true,
          lastName: true,
          organization: true,
          email: true,
          university: true,
        },
      },
    },
  });

  // GET SESSION USERID
  const session = await getServerSession(options);
  let userId;
  const EventCreatorInfo = await findUserInfo(dbevent?.authorId as string);
  let dbmyevents;
  let dbmyeventstats = {};
  async function getEventInfoifsession() {
    if (session?.user) {
      userId = session?.user?.id;
      dbmyevents = await findMyEventsbyId(userId as string);
      dbmyeventstats = {
        seats: dbevent?.totalSeats,
        info: dbevent?.short_description,
      };
    }
  }
  const eventinfo = await getEventInfoifsession();

  // TAGS FUNCTION
  const getTags = dbevent?.tags.map((e: any) => {
    return (
      <button
        key={e}
        className="rounded-lg w-fit p-1 m-1 hover:bg-base-200 bg-base-300"
      >
        {e.replace(/_/g, " ").toLowerCase()}
      </button>
    );
  });

  return (
    <>
      <Display dbevent={dbevent} EventCreatorInfo={EventCreatorInfo}></Display>
    </>
  );
}
