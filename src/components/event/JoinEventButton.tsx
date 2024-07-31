"use client";
import { addUserToEvent } from "@/app/actions";
export default async function JoinEventButton({ userId, eventId }: any) {
  function handleClick() {
    try {
      addUserToEvent(userId, eventId);
      console.log("You connected", userId, "and", eventId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        Attend this Event
      </button>
    </>
  );
}
