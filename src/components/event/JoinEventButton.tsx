"use client";
import { redirect } from "next/navigation";

import { addUserToEvent } from "@/app/actions";
import { revalidatePath } from "next/cache";
export default function JoinEventButton({ userId, eventId, eventSeats }: any) {
  function handleClick() {
    try {
      addUserToEvent(userId, eventId, eventSeats);
      console.log("You connected", userId, "and", eventId);
      // alert("You have successfully registered for this event.");
      revalidatePath(`/`, "layout");
      redirect("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  // CHECK IS SEATS AVAILABLE
  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        Attend this Event
      </button>
    </>
  );
}
