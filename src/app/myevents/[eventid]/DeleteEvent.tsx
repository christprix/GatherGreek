import { Anton } from "next/font/google";
import { deleteEventPrisma } from "@/app/actions";
import { redirect } from "next/navigation";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default function DeleteEvent({ dbevent }: any) {
  const handleclick = () => {
    deleteEventPrisma(dbevent.id);
    // alert("You have successfully deleted this event.");
    redirect("/myevents");
  };

  return (
    <div className="flex justify-evenly flex-col h-80">
      <div
        className={`flex text-center text-md text-xl md:text-4xl ${anton.className}`}
      >
        Would you like to delete this event?
      </div>
      <div className="text-md">
        After deleting you will not be able to view this event again. This will
        be permanent.
      </div>
      <button className="btn btn-warning w-40" onClick={handleclick}>
        Delete Event
      </button>
    </div>
  );
}
