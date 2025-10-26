import EventAttendeesCard from "./EventAttendeesCard";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});
export default function EventAttendeesList({ dbevent }: any) {
  const showAttendees = dbevent.Users_going_to_event.map((e: any) => {
    console.log(e);
    return <EventAttendeesCard key={e.lastName} user={e}></EventAttendeesCard>;
  });

  return (
    <div className=" text-center">
      <div
        className={`flex text-center flex-grow p-5 mx-5 text-3xl md:text-4xl ${anton.className}`}
      >
        Ticket Dashboard
      </div>
      <div className="flex flex-row place-content-evenly">
        {/* RIGHT BOX */}
        <div className="flex flex-col w-40 md:w-64 space-y-4 p-6 md:p-10 bg-white shadow-md rounded-xl">
          <div className={`left-0 ${anton.className}`}>Tickets Available</div>
          <div className="justify-end">{dbevent.totalSeats}</div>
        </div>
        <div className="flex flex-col w-40 md:w-64 space-y-4 p-6 md:p-10 bg-white shadow-md rounded-xl">
          <div className={`left-0 ${anton.className}`}>Tickets Sold</div>
          <div className="justify-end">
            {dbevent.Users_going_to_event.length}
          </div>
        </div>
        {/* LEFT BOX */}
      </div>
      <div className="bg-base-100 rounded m-2 p-4">
        {dbevent.Users_going_to_event.length === 0 ? (
          <div
            className={`flex text-center flex-grow text-md p-5 mx-5 text-xl md:text-xl ${anton.className}`}
          >
            <div>
              Looks no one has signed up for the event yet! Check back in later!
            </div>
          </div>
        ) : (
          <div>
            <div
              className={`flex text-center flex-grow text-md p-5 mx-5 ${anton.className}`}
            >
              View Who is Going
            </div>
            <div>{showAttendees}</div>
          </div>
        )}
      </div>
    </div>
  );
}
