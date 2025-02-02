import EventAttendeesCard from "./EventAttendeesCard";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});
export default function EventAttendeesList({ dbevent }: any) {
  console.log(dbevent.Users_going_to_event.length);
  const showAttendees = dbevent.Users_going_to_event.map((e: any) => {
    console.log(e);
    return <EventAttendeesCard key={e.lastName} user={e}></EventAttendeesCard>;
  });

  return (
    <div>
      <div
        className={`flex text-center flex-grow text-md p-5 mx-5 text-xl md:text-4xl ${anton.className}`}
      >
        Who is going?
      </div>
      <div className="bg-base-100 rounded">
        {dbevent.Users_going_to_event.length === 0 ? (
          <div
            className={`flex text-center flex-grow text-md p-5 mx-5 text-xl md:text-xl ${anton.className}`}
          >
            <div>
              Looks no one has signed up for the event yet! Check back in later!
            </div>
          </div>
        ) : (
          showAttendees
        )}
      </div>
    </div>
  );
}
