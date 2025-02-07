import prisma from "@/lib/prisma";
import Image from "next/image";
import dateFormat from "dateformat";
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
import { findUserInfo, findMyEvents, findMyEventsbyId } from "@/app/actions";
import Link from "next/link";

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
  let userId;
  const EventCreatorInfo = await findUserInfo(dbevent?.authorId as string);
  let dbmyevents;
  if (session?.user) {
    userId = session?.user?.id;
    dbmyevents = await findMyEventsbyId(userId as string);
  }

  // CHECK IF TICKETS AVAILABLE
  // CREATE AN ARRAY
  let eventIds: string[] = [];
  let doIAlreadyHaveTickets;
  if (session?.user) {
    // PUSH EVENT TICKET IDS INTO ARRAY
    function findEventIds(event: any) {
      eventIds.push(event.id);
    }
    // LOOP THROUGH ARRAYS
    dbmyevents?.User_Scheduled_Events.forEach(findEventIds);
    // CHECK IF TICKET AND EVENT MATCH
    doIAlreadyHaveTickets = eventIds.includes(params.eventid);
  }

  // Make address
  let address;
  let encodedAddress;
  if (dbevent?.address1) {
    address = dbevent.address1 + " " + dbevent.city + " " + dbevent.zipcode;
    encodedAddress = encodeURI(address as string);
  }
  console.log(encodeURI(address as string));
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
                  <div className="text-sm flex flex">
                    <div className="text-xl">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="w-3 mx-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        {dateFormat(
                          `${dbevent.eventDate}`,
                          "dddd, mmmm dS, yyyy"
                        )}{" "}
                      </div>
                      <div>
                        {dateFormat(`${dbevent.eventDate}`, "UTC:h:MM TT ")}
                      </div>
                    </div>
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
                    {dbevent.address1 ? (
                      <Link
                        href={`https://www.google.com/maps/dir/?api=1&origin=${encodedAddress}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {address}
                      </Link>
                    ) : (
                      <div>TBA</div>
                    )}
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
              </div>
            </div>
            <div
              id="right"
              className="flex flex-col h-fit md:w-2/5 md:sticky md:top-0 w-full md:ml-2 rounded items-center md:my-0 my-2 p-4 bg-base-200"
            >
              {!session?.user && (
                <>
                  <div className="text-xl m-2">
                    Sorry but you can't get tickets just yet!
                  </div>
                  <div className="text-xl m-2">
                    Remaining Tickets: {dbevent.totalSeats}
                  </div>
                  <Link className="disabled btn btn-primary" href={"/signup"}>
                    Sign Up/Log in to View Tickets
                  </Link>
                </>
              )}
              {(session?.user && dbevent.totalSeats === 0) ||
                (doIAlreadyHaveTickets && (
                  <>
                    <div className="text-xl m-2">
                      You already have tickets for this Event!
                    </div>
                    <div className="text-xl m-2">
                      Remaining Tickets: {dbevent.totalSeats}
                    </div>
                    <Link className="btn btn-primary" href={"/profile"}>
                      View Tickets
                    </Link>
                  </>
                ))}
              {session?.user &&
                dbevent.totalSeats > 0 &&
                !doIAlreadyHaveTickets && (
                  <>
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
                  </>
                )}
              {session?.user && dbevent.totalSeats <= 0 && (
                <>
                  <div className="text-xl m-2">
                    Sorry there are no more tickets available
                  </div>
                  <div className="text-xl m-2">
                    Remaining Tickets: {dbevent.totalSeats}
                  </div>
                  <div className="btn-disabled btn">Get Tickets</div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>Sorry Can't Find Event!</div>
      )}
    </>
  );
}
