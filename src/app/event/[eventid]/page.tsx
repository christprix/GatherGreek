import greekstep from "/public/greekstep-p01.jpg";
import prisma from "@/lib/prisma";
import Image from "next/image";
import dateFormat from "dateformat";
import Avatarlist from "@/components/Avatarlist";
import JoinEventButton from "@/components/event/JoinEventButton";
import { getServerSession } from "next-auth/next";
import { Anton } from "next/font/google";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { findUserInfo } from "@/app/actions";

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
  });
  // GET SESSION USERID
  const session = await getServerSession(options);
  const userId = session?.user?.id;
  const EventCreatorInfo = await findUserInfo(dbevent?.authorId as string);

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
  // CHECK IF TICKETS AVAILABLE

  return (
    <>
      {dbevent ? (
        <div className="flex flex-col items-center bg-base-100">
          <div className="w-full flex justify-center">
            <Image
              src={dbevent.imagePath}
              alt="event pic"
              height={200}
              width={500}
              // objectFit="true"
              className="rounded-lg max-h-96 mt-1 object-cover"
            ></Image>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-evenly p-4">
            <div
              id="left"
              className="grid flex-col h-5/6 bg-base-200 md:w-3/5 w-full rounded  p-4"
            >
              <div className="text-sm">
                {dateFormat(`${dbevent.eventDate}`, "dddd, mmmm dS, yyyy")}
              </div>
              <div className="md:text-4xl text-3xl">{dbevent.title}</div>
              <div className="m-3">{dbevent.short_description}</div>
              <div className="card m-1 w-full card-side bg-base-200 border">
                <figure className="rounded-lg min-w-16">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="w-10 rounded-full border contents">
                      <FontAwesomeIcon icon={faUser} className="size-6" />
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                  <div className="text-xs flex flex-col">
                    <h2 className="card-title">
                      {EventCreatorInfo?.firstName} {EventCreatorInfo?.lastName}
                    </h2>
                    <p className="text-sm">Organizer info</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className={`flex flex-col my-10`}>
                  <p className={`text-3xl flex flex-col ${anton.className}`}>
                    Date and Time
                  </p>
                  <div className="text-sm flex">
                    <div className="text-xl">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="w-3 mx-1"
                      />
                    </div>
                    {dateFormat(`${dbevent.eventDate}`, "dddd, mmmm dS, yyyy")}{" "}
                    4pm - 5pm EST
                  </div>
                </div>
                <div className="flex flex-col my-10">
                  <p className={`text-3xl ${anton.className}`}>Location</p>
                  <div className="flex">
                    <div className="text-xl">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="w-3 mx-1"
                      />
                    </div>
                    {dbevent.location}
                  </div>
                </div>
                <div className="flex flex-col my-10">
                  <p className={`text-3xl ${anton.className}`}>
                    About This Event
                  </p>
                  <p>{dbevent.description}</p>
                </div>
                <div className="flex flex-col my-10">
                  <p className={`text-3xl ${anton.className}`}>Tags</p>
                  <div className="flex flex-wrap">{getTags}</div>
                </div>
                <div className="flex flex-col my-10">
                  <p className={`text-3xl ${anton.className}`}>Price</p>
                  <p>{dbevent.priceInCents}</p>
                </div>
                <div>Other Events by {EventCreatorInfo?.firstName} </div>
              </div>
            </div>
            <div
              id="right"
              className="flex flex-col h-fit md:w-2/5 md:sticky md:top-0 w-full md:ml-2 rounded items-center md:my-0 my-2 p-4 bg-base-200"
            >
              <div className="text-xl m-2">Sign Up Today!</div>
              <div className="text-xl m-2">
                Remaining Tickets: {dbevent.totalSeats}
              </div>

              <JoinEventButton
                className="p-3"
                eventId={params.eventid}
                userId={userId}
                eventSeats={dbevent.totalSeats}
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
