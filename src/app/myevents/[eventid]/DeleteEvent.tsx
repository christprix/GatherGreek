import { Anton } from "next/font/google";
import { deleteEventPrisma } from "@/app/actions";
import { redirect } from "next/navigation";
import { cancelEvent } from "@/app/actions/createStripeRefund";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default function DeleteEvent({ dbevent }: any) {
  const handleclick = () => {
    cancelEvent(dbevent.id);
    // alert("You have successfully deleted this event.");
    redirect("/myevents");
  };

  return (
    <div className="flex justify-evenly flex-col h-80">
      <div
        className={`flex text-center text-md text-xl md:text-4xl ${anton.className}`}
      >
        Would you like to Cancel this event?
      </div>
      <div className="text-md">
        After deleting you will not be able to view this event again. This will
        be permanent. This will also refund all tickets to the people who
        purchased a ticket to this event.
      </div>
      <button className="btn btn-warning w-40" onClick={handleclick}>
        Cancel Event
      </button>
    </div>
  );
}
