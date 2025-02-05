import { SubmitButton2 } from "./submit-button2";
import dateFormat from "dateformat";
import { updateEvent } from "@/app/actions";
import { AddressAutofill } from "@mapbox/search-js-react";

const Mapbox_key = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;

export default function EditEvent({ dbevent }: any) {
  const updateEventWithId = updateEvent.bind(null, dbevent.id);
  let date = dateFormat(`${dbevent.eventDate}`, "dddd, mmmm dS, yyyy");
  return (
    <div className="flex align-start justify-start item center">
      <form
        className="my-4 flex flex-col justify-center item-center md:w-1/2 w-96 md:mr-20"
        // TODO CREATE FORMACTION FUNCTION TO EDIT
        action={updateEventWithId}
      >
        <label className="w-full">
          {/* <span className="label-text text-xl font-bold">Event Image</span> */}
          <div className="flex justify-center">
            {/* {imagepath === "" ? (
                  <CldImage
                    width="300"
                    height="300"
                    src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png"
                    sizes="100vw"
                    className="rounded"
                    alt="Description of my image"
                  />
                ) : (
                  <CldImage
                    width="300"
                    height="300"
                    src={imagepath}
                    sizes="100vw"
                    className="rounded"
                    alt="Description of my image"
                  />
                )} */}
          </div>
        </label>
        <div className=" flex flex-col">
          <label className="w-full">
            <div className="label">
              <span className="label-text text-xl font-bold">
                Fraternity Affiliation
              </span>
            </div>
            <input
              required
              name="fraternity"
              className="input input-bordered w-full"
              defaultValue="Phi Beta Sigma"
            ></input>
          </label>
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
              defaultValue={dbevent.title}
              className="input input-bordered w-full "
            />
          </label>
          <label className="w-full">
            <div className="label">
              <span className="label-text text-xl font-bold">
                Can you explain what this event is in a few sentences?
              </span>
            </div>
            <textarea
              required
              name="event_description"
              className="textarea textarea-bordered textarea-xl w-full md:max-w"
              placeholder="Tell us about the event"
              defaultValue={dbevent.description}
            ></textarea>
          </label>
          {/* <label className="w-full">
            <div className="label">
              <span className="label-text text-xl font-bold">
                Type of Event
              </span>
            </div>
            <input
              required
              name="event_type"
              className="input input-bordered w-full"
              defaultValue={type}
              readOnly
            ></input>
          </label> */}
        </div>
        <div className="">
          <div className="flex flex-col">
            <label className="w-full">
              <div className="label">
                <span className="label-text text-xl font-bold">Address 1</span>
              </div>
              <AddressAutofill accessToken={Mapbox_key}>
                <input
                  className="input input-bordered w-full max-w"
                  type="text"
                  name="address-1"
                  defaultValue={dbevent.address1 || ""}
                  autoComplete="address-line1"
                />
              </AddressAutofill>
            </label>
            <label className="w-full">
              <div className="label">
                <span className="label-text text-xl font-bold">Address 2</span>
              </div>
              <input
                className="input input-bordered w-full"
                type="text"
                name="address-2"
                defaultValue={dbevent.address2 || ""}
                autoComplete="address-line2"
                readOnly
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
                defaultValue={dbevent.city || ""}
                autoComplete="address-level2"
                readOnly
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
                defaultValue={dbevent.state || ""}
                autoComplete="address-level1"
                readOnly
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
                defaultValue={dbevent.zipcode || ""}
                autoComplete="postal-code"
                readOnly
              />
            </label>
          </div>
        </div>
        <div className=" ">
          {/* <label className="w-full max-w-xs">
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
              defaultValue={dbevent.total_seats}
            ></input>
          </label> */}
          {/* <label className="w-full max-w-xs">
            <div className="label">
              <span className="label-text text-xl font-bold">Cost</span>
            </div>
            <input
              required
              type="text"
              name="event_cost"
              placeholder="Type here"
              className="input input-bordered w-full max-w"
              defaultValue={dbevent.priceInCents}
            />
          </label> */}
        </div>
        <div className="">
          <label className="w-full max-w">
            <div className="label">
              <span className="label-text text-xl font-bold">Event Date</span>
            </div>
            <input
              required
              type="date"
              name="eventDate"
              className="input input-bordered w-full"
              defaultValue={date}
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
              defaultValue={dbevent.time || "12:00PM"}

              // TODO: add event time to schema and register it in form
            />
          </label>
        </div>
        <div className="my-4 flex justify-center">
          <SubmitButton2></SubmitButton2>
        </div>
      </form>
    </div>
  );
}
