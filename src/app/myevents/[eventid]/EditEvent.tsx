import { SubmitButton2 } from "./submit-button2";
import dateFormat from "dateformat";
import { updateEvent } from "@/app/actions";
import { AddressAutofill } from "@mapbox/search-js-react";

const Mapbox_key = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;

export default function EditEvent({ dbevent }: any) {
  const updateEventWithId = updateEvent.bind(null, dbevent.id);
  // console.log(dateFormat(`${dbevent.eventDate}`, "dddd, mmmm dS, yyyy"));
  return (
    <div className="flex justify-center">
      <form
        className="my-4 flex flex-col space-y-4 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
        action={updateEventWithId}
      >
        <label className="w-full">
          <div className="label">
            <span className="label-text text-xl font-bold">
              Fraternity Affiliation
            </span>
          </div>
          <input
            required
            name="fraternity"
            className="input input-bordered w-full rounded-md p-2"
            defaultValue="Phi Beta Sigma"
          />
        </label>

        <label className="w-full">
          <div className="label">
            <span className="label-text text-xl font-bold">Event Name</span>
          </div>
          <input
            required
            type="text"
            name="event_title"
            placeholder="Type here"
            defaultValue={dbevent.title}
            className="input input-bordered w-full rounded-md p-2"
          />
        </label>

        <label className="w-full">
          <div className="label">
            <span className="label-text text-xl font-bold">
              Event Description
            </span>
          </div>
          <textarea
            required
            name="event_description"
            className="textarea textarea-bordered w-full rounded-md p-2 h-32"
            placeholder="Tell us about the event"
            defaultValue={dbevent.description}
          ></textarea>
        </label>

        <div className="space-y-4">
          <label className="w-full">
            <div className="label">
              <span className="label-text text-xl font-bold">Address 1</span>
            </div>
            <AddressAutofill accessToken={Mapbox_key}>
              <input
                className="input input-bordered w-full rounded-md p-2"
                type="text"
                name="address-1"
                defaultValue={dbevent.address1 || ""}
                autoComplete="address-line1"
                required
              />
            </AddressAutofill>
          </label>

          <label className="w-full">
            <div className="label">
              <span className="label-text text-xl font-bold">City</span>
            </div>
            <input
              className="input input-bordered w-full rounded-md p-2"
              type="text"
              name="city"
              defaultValue={dbevent.city || ""}
              autoComplete="address-level2"
              required
            />
          </label>

          <div className="flex space-x-4">
            <label className="w-1/2">
              <div className="label">
                <span className="label-text text-xl font-bold">State</span>
              </div>
              <input
                className="input input-bordered w-full rounded-md p-2"
                type="text"
                name="state"
                defaultValue={dbevent.state || ""}
                autoComplete="address-level1"
                required
              />
            </label>
            <label className="w-1/2">
              <div className="label">
                <span className="label-text text-xl font-bold">Zipcode</span>
              </div>
              <input
                className="input input-bordered w-full rounded-md p-2"
                type="text"
                name="zipcode"
                defaultValue={dbevent.zipcode || ""}
                autoComplete="postal-code"
              />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <label className="w-full">
            <div className="label">
              <span className="label-text text-xl font-bold">Event Date</span>
            </div>
            <input
              required
              type="date"
              name="eventDate"
              className="input input-bordered w-full rounded-md p-2"
              defaultValue={dateFormat(`${dbevent.eventDate}`, "yyyy-mm-dd")}
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
              className="input input-bordered w-full rounded-md p-2"
              defaultValue={dbevent.time || "12:00PM"}
            />
          </label>
        </div>

        <div className="my-4 flex justify-center">
          <button className="btn btn-primary w-full rounded-md p-2">
            Update Event
          </button>
        </div>
      </form>
    </div>
  );
}
