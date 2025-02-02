import EventAttendeesCard from "./EventAttendeesCard";

export default function EventAttendeesList({ dbevent }: any) {
  const showAttendees = dbevent.Users_going_to_event.map((e: any) => {
    console.log(e);
    return <EventAttendeesCard key={e.lastName} user={e}></EventAttendeesCard>;
  });
  return (
    <div>
      <div>Event Dashboard</div>
      <div className="bg-base-100 rounded">{showAttendees}</div>
    </div>
  );
}
