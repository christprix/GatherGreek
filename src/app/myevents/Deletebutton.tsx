"use client";
import { deleteDraftEventPrisma } from "../actions";
import { redirect } from "next/navigation";

export default function DeleteButton({ eventid }: any) {
  const handleclick = () => {
    deleteDraftEventPrisma(eventid);
    // alert("You have successfully deleted this event.");
    redirect("/myevents");
  };
  return (
    <button className="btn btn-warning w-40 " onClick={handleclick}>
      Delete
    </button>
  );
}
