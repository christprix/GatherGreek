import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Tag } from "@prisma/client";
import ImageUploader from "@/components/eventsForm/ImageUploader";
import Form from "./Form";
export default async function Page() {
  const session = await getServerSession(options);
  let eventId;
  return (
    <section className="py-24">
      <div className="container">
        <Form></Form>
      </div>
    </section>
  );
  // async function createEvent(formData: FormData) {
  //   "use server";
  //   const userId = session?.user?.id;
  //   const timestamp = formData.get("event_date");
  //   const date = new Date(timestamp as string);
  //   const eventData = {
  //     title: formData.get("event_title") as String,
  //     description: formData.get("event_description") as String,
  //     priceInCents: formData.get("event_cost") as String,
  //     imagePath: "greekstep",
  //     location: formData.get("event_address") as String,
  //     eventDate: date as Date,
  //     totalSeats: formData.get("total_seats") as String,
  //     tag: formData.get("event_type") as String,
  //   };
  //   const newEvent = await prisma.user.update({
  //     where: { id: userId },
  //     data: {
  //       events: {
  //         create: {
  //           title: eventData.title as string,
  //           description: eventData.description as string,
  //           priceInCents: eventData.priceInCents as string,
  //           imagePath: "greekstep",
  //           location: eventData.location as string,
  //           eventDate: eventData.eventDate as Date,
  //           totalSeats: Number(eventData.totalSeats) as any,
  //           tag: eventData.tag as Tag,
  //         },
  //       },
  //     },
  //   });
  //   console.log(newEvent);
  //   eventId = newEvent.id;
  // }

  // return (
  //   <div className="m-5 p-5 flex flex-col justify-center items-center">
  //     <form
  //       action={createEvent}
  //       className="flex flex-col w-2/3 items-center text-center p-5 rounded-lg bg-base-200"
  //     >
  //       <label className="w-full">
  //         <div className="label">
  //           <span className="label-text text-xl font-bold">
  //             What would you like to name this event?
  //           </span>
  //         </div>
  //         <input
  //           required
  //           type="text"
  //           name="event_title"
  //           placeholder="Type here"
  //           className="input input-bordered w-full "
  //         />
  //       </label>
  //       <label className="w-full max-w-xs">
  //         <div className="label">
  //           <span className="label-text text-xl font-bold">
  //             Can you explain what this event is in a few sentences?
  //           </span>
  //         </div>
  //         <textarea
  //           required
  //           name="event_description"
  //           className="textarea textarea-bordered textarea-lg w-full max-w-xs"
  //           placeholder="Tell us about the event"
  //         ></textarea>
  //       </label>
  //       <label className="w-full max-w-xs">
  //         <div className="label">
  //           <span className="label-text text-xl font-bold">Event Date</span>
  //         </div>
  //         <input
  //           required
  //           type="date"
  //           name="event_date"
  //           className="input input-bordered w-full max-w-xs"
  //         />
  //       </label>
  //       <label className="w-full max-w-xs">
  //         <div className="label">
  //           <span className="label-text text-xl font-bold">
  //             Maximum Participants
  //           </span>
  //         </div>
  //         <input
  //           required
  //           type="number"
  //           name="total_seats"
  //           placeholder="Type here"
  //           className="input input-bordered w-full max-w-xs"
  //         />
  //       </label>
  //       <label className="w-full max-w-xs">
  //         <div className="label">
  //           <span className="label-text text-xl font-bold">Address</span>
  //         </div>
  //         <input
  //           required
  //           type="text"
  //           name="event_address"
  //           placeholder="Type here"
  //           className="input input-bordered w-full max-w-xs"
  //         />
  //       </label>
  //       <label className="w-full max-w-xs">
  //         <div className="label">
  //           <span className="label-text text-xl font-bold">Type of Event</span>
  //         </div>
  //         <select
  //           required
  //           name="event_type"
  //           className="input input-bordered w-full max-w-xs"
  //         >
  //           <option value={"OTHER"}>Other</option>
  //           <option value={"SOCIAL"}>Social</option>
  //           <option value={"GOVERNMENT"}>Government</option>
  //           <option value={"COMMUNITY_SERVICE"}>Service</option>
  //           <option value={"EDUCATION"}>Education</option>
  //           <option value={"ECONOMICS"}>Finance</option>
  //         </select>
  //       </label>
  //       <label className="w-full max-w-xs">
  //         <div className="label">
  //           <span className="label-text text-xl font-bold">Cost</span>
  //         </div>
  //         <input
  //           required
  //           type="text"
  //           name="event_cost"
  //           placeholder="Type here"
  //           className="input input-bordered w-full max-w-xs"
  //         />
  //       </label>
  //       <button type="submit" className="btn btn-primary m-3 w-full">
  //         Create Event
  //       </button>
  //     </form>
  //     <button className="btn btn-secondary">
  //       <ImageUploader eventId={eventId}></ImageUploader>
  //     </button>
  //   </div>
  // );
}

// {
//   /* <option value={"PhiBetaSigma"}>Phi Beta Sigma</option>
//             <option value={"ZetaPhiBeta"}>Zeta Phi Beta</option>
//             <option value={"Alpha Kappa Alpha"}>Alpha Kappa Alpha</option>
//             <option value={"AlphaPhiAlpha"}>Alpha Phi Alpha</option>
//             <option value={"Omega Psi Phi"}>Omega Psi Phi</option>
//             <option value={"SigmaGammaRho"}>Sigma Gamma Rho</option>
//             <option value={"DeltaSigmaTheta"}>Delta Sigma Theta</option>
//             <option value={"KappaAlphaPsi"}>Kappa Alpha Psi</option> */
// }
