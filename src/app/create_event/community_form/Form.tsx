"use client";

import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { AddressAutofill } from "@mapbox/search-js-react";
import z from "zod";
import { FormDataSchema } from "@/app/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import ImageUploader from "@/components/eventsForm/ImageUploader";
import { createEvent } from "@/app/actions";
import { useActionState } from "react";
import { SubmitButton } from "@/app/signup/submit-button";

const Mapbox_key = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;

export default function Form({ user }: any) {
  // ADD USERID TO CREATEEVENT FUNCTION
  const createEventWithId = createEvent.bind(null, user);
  // CREATE  STEPS
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: "Step 1", name: "Step One Information" },
    { id: "Step 2", name: "Step Two Information" },
    { id: "Step 3", name: "Step Three Information" },
    { id: "Step 4", name: "Step Four Information" },
    { id: "Step 5", name: "Step Five Information" },
  ];
  // CREATE NEXT AND PREV BUTTON
  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {/* steps for form */}
      <ul className="steps">
        <li className="step step-primary">Event Description</li>
        <li className={clsx("step", { "step-primary": currentStep >= 1 })}>
          Address
        </li>
        <li className={clsx("step", { "step-primary": currentStep >= 2 })}>
          Cost and Seats
        </li>
        <li className={clsx("step", { "step-primary": currentStep >= 3 })}>
          Date and Time
        </li>
        <li className={clsx("step", { "step-primary": currentStep === 4 })}>
          Final Check
        </li>
      </ul>
      {/* FORM START */}
      <form
        className="my-10 flex flex-col justify-center"
        action={createEventWithId}
      >
        {/* PART 1 */}
        {currentStep === 0 && (
          <div className="w-96 h-56 flex flex-col">
            <label className="w-full">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  What would you like to name this event?
                </span>
              </div>
              <input
                required
                type="text"
                name="event_title"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  Can you explain what this event is in a few sentences?
                </span>
              </div>
              <textarea
                required
                name="event_description"
                className="textarea textarea-bordered textarea-lg w-full max-w"
                placeholder="Tell us about the event"
              ></textarea>
            </label>
            <label className="w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  Type of Event
                </span>
              </div>
              <select
                required
                name="event_type"
                className="input input-bordered w-full max-w"
              >
                <option value={"OTHER"}>Other</option>
                <option value={"SOCIAL"}>Social</option>
                <option value={"GOVERNMENT"}>Government</option>
                <option value={"COMMUNITY_SERVICE"}>Service</option>
                <option value={"EDUCATION"}>Education</option>
                <option value={"ECONOMICS"}>Finance</option>
              </select>
            </label>
          </div>
        )}
        {/* PART 2 */}
        {currentStep === 1 && (
          <div className="w-96 h-56">
            <div className="flex flex-col">
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-xl font-bold">
                    Address 1
                  </span>
                </div>
                <AddressAutofill accessToken={Mapbox_key}>
                  <input
                    className="input input-bordered w-full max-w"
                    type="text"
                    name="address-1"
                    autoComplete="address-line1"
                  />
                </AddressAutofill>
              </label>
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-xl font-bold">
                    Address 2
                  </span>
                </div>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="address-2"
                  autoComplete="address-line2"
                />
              </label>
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-xl font-bold">City</span>
                </div>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="city"
                  autoComplete="address-level2"
                />
              </label>
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-xl font-bold">State</span>
                </div>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="state"
                  autoComplete="address-level1"
                />
              </label>
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-xl font-bold">Zip</span>
                </div>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="zip"
                  autoComplete="postal-code"
                />
              </label>
            </div>
          </div>
        )}
        {/* part 3 */}
        {currentStep === 2 && (
          <div className="w-96 h-56">
            <label className="w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  Maximum Participants
                </span>
              </div>
              <input
                required
                type="number"
                name="total_seats"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
              ></input>
            </label>
            <label className="w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">Cost</span>
              </div>
              <input
                required
                type="text"
                name="event_cost"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
              />
            </label>
          </div>
        )}
        {/* part 4 */}
        {currentStep === 3 && (
          <div className="w-96 h-56">
            <label className="w-full max-w">
              <div className="label">
                <span className="label-text text-xl font-bold">Event Date</span>
              </div>
              <input
                required
                type="date"
                name="eventDate"
                className="input input-bordered w-full"
              />
            </label>
            <label className="w-full">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  Event Start Time
                </span>
              </div>
              <input
                required
                type="time"
                name="event_time"
                placeholder="12:45PM"
                className="input input-bordered w-full max-w"
                // TODO: add event time to schema and register it in form
              />
            </label>
          </div>
        )}
        {/* submit button */}
        {currentStep === 4 && (
          <div className="my-4 flex justify-center">
            <SubmitButton></SubmitButton>
          </div>
        )}
      </form>
      {/* NAVIGATION */}
      <div className="md:mt-40 mt-36 pt-5">
        <div className="flex justify-between">
          {/* previous */}
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-primary text-white px-2 py-1 mx-2 text-sm font-semibold"
          >
            Prev
          </button>
          {/* next */}
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-primary px-2 py-1 text-white text-sm font-semibold "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// type Inputs = z.infer<typeof FormDataSchema>;

// const steps = [
//   { id: "Step 1", name: "Step One Information" },
//   { id: "Step 2", name: "Step Two Information" },
//   { id: "Step 3", name: "Step Three Information" },
//   { id: "Step 4", name: "Step Four Information" },
//   { id: "Step 5", name: "Step Five Information" },
// ];

// export default function Form() {
// const [currentStep, setCurrentStep] = useState(0);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     trigger,
//     formState: { errors },
//   } = useForm<Inputs>({
//     resolver: zodResolver(FormDataSchema),
//   });

//   const processForm: SubmitHandler<Inputs> = (data) => {
//     console.log(data);
//     console.log("Submittted!");
//     // TODO Server Action Call!
//     reset();
//   };

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

// const next = () => {
//   if (currentStep < steps.length - 1) {
//     setCurrentStep((step) => step + 1);
//   }
// };

// const prev = () => {
//   if (currentStep > 0) {
//     setCurrentStep((step) => step - 1);
//   }
// };

//   return (
//     <section className="items-center flex flex-col">
// <ul className="steps">
//   <li className="step step-primary">Event Description</li>
//   <li className={clsx("step", { "step-primary": currentStep >= 1 })}>
//     Address
//   </li>
//   <li className={clsx("step", { "step-primary": currentStep >= 2 })}>
//     Cost and Seats
//   </li>
//   <li className={clsx("step", { "step-primary": currentStep >= 3 })}>
//     Date and Time
//   </li>
//   <li className={clsx("step", { "step-primary": currentStep === 4 })}>
//     Final Check
//   </li>
// </ul>
//       {/* FORM */}
//       <form className="mt-2 py-12" onSubmit={handleSubmit(onSubmit)}>
//         {currentStep === 0 && (
//           <>
//             <div className="h-56">
//               <label className="w-full">
//                 <div className="label">
//                   <span className="label-text text-xl font-bold">
//                     What would you like to name this event?
//                   </span>
//                 </div>
//                 <input
//                   required
//                   type="text"
//                   name="event_title"
//                   placeholder="Type here"
//                   className="input input-bordered w-full "
//                   {...register("title")}
//                 />
//               </label>
//               <label className="w-full max-w-xs">
//                 <div className="label">
//                   <span className="label-text text-xl font-bold">
//                     Can you explain what this event is in a few sentences?
//                   </span>
//                 </div>
//                 <textarea
//                   required
//                   name="event_description"
//                   className="textarea textarea-bordered textarea-lg w-full max-w"
//                   placeholder="Tell us about the event"
//                   {...register("short_description")}
//                 ></textarea>
//               </label>
//               <label className="w-full max-w-xs">
//                 <div className="label">
//                   <span className="label-text text-xl font-bold">
//                     Type of Event
//                   </span>
//                 </div>
//                 <select
//                   required
//                   name="event_type"
//                   className="input input-bordered w-full max-w"
//                   {...register("tag")}
//                 >
//                   <option value={"OTHER"}>Other</option>
//                   <option value={"SOCIAL"}>Social</option>
//                   <option value={"GOVERNMENT"}>Government</option>
//                   <option value={"COMMUNITY_SERVICE"}>Service</option>
//                   <option value={"EDUCATION"}>Education</option>
//                   <option value={"ECONOMICS"}>Finance</option>
//                 </select>
//               </label>
//             </div>
//           </>
//         )}
//         {currentStep === 1 && (
//           <>
//             <div className="h-56">
//               <div className="flex flex-col w-96">
//                 <label className="w-full">
//                   <div className="label">
//                     <span className="label-text text-xl font-bold">
//                       Address 1
//                     </span>
//                   </div>
//                   <AddressAutofill accessToken={Mapbox_key}>
//                     <input
//                       className="input input-bordered w-full max-w"
//                       type="text"
//                       name="address-1"
//                       autoComplete="address-line1"
//                       {...register("location")}
//                     />
//                   </AddressAutofill>
//                 </label>
//                 <label className="w-full">
//                   <div className="label">
//                     <span className="label-text text-xl font-bold">
//                       Address 2
//                     </span>
//                   </div>
//                   <input
//                     className="input input-bordered w-full"
//                     type="text"
//                     name="address-2"
//                     autoComplete="address-line2"
//                   />
//                 </label>
//                 <label className="w-full">
//                   <div className="label">
//                     <span className="label-text text-xl font-bold">City</span>
//                   </div>
//                   <input
//                     className="input input-bordered w-full"
//                     type="text"
//                     name="city"
//                     autoComplete="address-level2"
//                   />
//                 </label>
//                 <label className="w-full">
//                   <div className="label">
//                     <span className="label-text text-xl font-bold">State</span>
//                   </div>
//                   <input
//                     className="input input-bordered w-full"
//                     type="text"
//                     name="state"
//                     autoComplete="address-level1"
//                   />
//                 </label>
//                 <label className="w-full">
//                   <div className="label">
//                     <span className="label-text text-xl font-bold">Zip</span>
//                   </div>
//                   <input
//                     className="input input-bordered w-full"
//                     type="text"
//                     name="zip"
//                     autoComplete="postal-code"
//                   />
//                 </label>
//               </div>
//             </div>
//           </>
//         )}
//         {currentStep === 2 && (
//           <>
//             <div className="h-56">
//               <label className="w-full max-w-xs">
//                 <div className="label">
//                   <span className="label-text text-xl font-bold">
//                     Maximum Participants
//                   </span>
//                 </div>
//                 <input
//                   required
//                   type="number"
//                   name="total_seats"
//                   placeholder="Type here"
//                   className="input input-bordered w-full max-w"
//                   {...register("totalSeats")}
//                 ></input>
//               </label>

//               <label className="w-full max-w-xs">
//                 <div className="label">
//                   <span className="label-text text-xl font-bold">Cost</span>
//                 </div>
//                 <input
//                   required
//                   type="text"
//                   name="event_cost"
//                   placeholder="Type here"
//                   className="input input-bordered w-full max-w"
//                   {...register("priceInCents")}
//                 />
//               </label>
//             </div>
//           </>
//         )}
//         {currentStep === 3 && (
//           <>
//             <div className="h-56 w-96">
//               <label className="w-full max-w">
//                 <div className="label">
//                   <span className="label-text text-xl font-bold">
//                     Event Date
//                   </span>
//                 </div>
//                 <input
//                   required
//                   type="date"
//                   name="eventDate"
//                   className="input input-bordered w-full"
//                   {...register("eventDate")}
//                 />
//               </label>

//               <label className="w-full">
//                 <div className="label">
//                   <span className="label-text text-xl font-bold">
//                     Event Start Time
//                   </span>
//                 </div>
//                 <input
//                   required
//                   type="time"
//                   name="event_time"
//                   placeholder="12:45PM"
//                   className="input input-bordered w-full max-w"
//                   // TODO: add event time to schema and register it in form
//                 />
//               </label>
//             </div>
//           </>
//         )}
//         {currentStep === 4 && (
//           <>
//             <div className="h-56 flex flex-col items-center justify-around">
//               <div>
//                 Thanks for Creating this event! Would you like to upload a flyer
//                 or pictures? You can add pictures later if you want.
//               </div>
//               <div className="btn btn-primary">
//                 {/* TODO MAKE UPLOAD PIC ROUTE */}
//                 <ImageUploader></ImageUploader>
//               </div>
//             </div>
//             <button className="btn" type="submit">
//               Submit
//             </button>
//           </>
//         )}
//       </form>
// {/* NAVIGATION */}
// <div className="md:mt-40 mt-36 pt-5">
//   <div className="flex justify-between">
//     {/* previous */}
//     <button
//       type="button"
//       onClick={prev}
//       disabled={currentStep === 0}
//       className="rounded bg-primary text-white px-2 py-1 mx-2 text-sm font-semibold"
//     >
//       Prev
//     </button>
//     {/* next */}
//     <button
//       type="button"
//       onClick={next}
//       disabled={currentStep === steps.length - 1}
//       className="rounded bg-primary px-2 py-1 text-white text-sm font-semibold "
//     >
//       Next
//     </button>
//   </div>
// </div>
//     </section>
//   );
// }
