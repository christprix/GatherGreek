"use client";

import clsx from "clsx";
import { useState } from "react";
import { AddressAutofill } from "@mapbox/search-js-react";

import ImageUploader from "@/components/eventsForm/ImageUploader";
import { CldImage } from "next-cloudinary";
import { createEvent } from "@/app/actions";
import { SubmitButton } from "@/app/signup/submit-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { Anton } from "next/font/google";
import TagsInput from "react-tagsinput";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

const Mapbox_key = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;

export default function Form({ user }: any) {
  // ADD USERID TO CREATEEVENT FUNCTION
  // CREATE  STEPS
  const [currentStep, setCurrentStep] = useState(0);
  // CREATE STORE FOR ITEM
  const [title, setTitle] = useState("");
  const [fraternity, setFraternity] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [cost, setCost] = useState("");
  const [seats, setSeats] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [imagepath, setImagepath] = useState("");
  const [warningmessage, setWarningmessage] = useState("");
  const [tags, setTags] = useState([]);

  const createEventWithId = createEvent.bind(null, user.id);
  const createEventwithImage = createEventWithId.bind(null, imagepath);
  // CREATE HANDLER FOR EACH CHANGE
  const handleTagsChange = (newTags: any) => {
    setTags(newTags);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };
  const handleFraternityChange = (newfraternity: string) => {
    setFraternity(newfraternity);
  };
  const handleDescriptionChange = (newdescription: string) => {
    setDescription(newdescription);
  };
  const handleTypeChange = (newType: string) => {
    setType(newType);
  };
  const handleAddress1Change = (newAddress1: string) => {
    setAddress1(newAddress1);
  };
  const handleAddress2Change = (newAddress2: string) => {
    setAddress2(newAddress2);
  };
  const handleCityChange = (newCity: string) => {
    setCity(newCity);
  };
  const handleStateChange = (newState: string) => {
    setState(newState);
  };
  const handleZipcodeChange = (newType: string) => {
    setZipcode(newType);
  };

  const handleCostChange = (newType: string) => {
    setCost(newType);
  };

  const handleSeatsChange = (newType: string) => {
    setSeats(newType);
  };

  const handleDateChange = (newType: string) => {
    setDate(newType);
  };

  const handleTimeChange = (newType: string) => {
    setTime(newType);
  };

  const steps = [
    { id: "Step 1", name: "Step One Information" },
    { id: "Step 2", name: "Step Two Information" },
    { id: "Step 3", name: "Step Three Information" },
    { id: "Step 4", name: "Step Four Information" },
    { id: "Step 5", name: "Step Five Information" },
  ];
  // NEXT BUTTON VALIDATOR
  // CHECK IF CURRENT STEP IS PROPERLY FILLED OUT
  const nextvalidator = () => {
    switch (currentStep) {
      case 0:
        if (title.length < 5) {
          setWarningmessage("Title must be at least 5 characters");
        } else if (description.length < 10) {
          setWarningmessage("Description must be at least 10 characters");
        } else {
          setCurrentStep((step) => step + 1);
          setWarningmessage("");
        }
        break;
      case 1:
        if (address1.length < 1) {
          setWarningmessage("Please enter an address");
        } else if (city.length < 1) {
          setWarningmessage("Please include a city");
        } else if (state.length < 1) {
          setWarningmessage("Please include a State");
        } else if (zipcode.length < 1) {
          setWarningmessage("Please include a Zip code");
        } else {
          setCurrentStep((step) => step + 1);
          setWarningmessage("");
        }
        break;
      case 2:
        if (date.length < 1) {
          setWarningmessage("Please enter a date");
        } else if (time.length < 1) {
          setWarningmessage("Please enter a time");
        } else if (seats.length < 1) {
          setWarningmessage("Please enter how many tickets you want available");
        } else if (cost.length < 1) {
          setWarningmessage("Please enter a ticket cost");
        } else {
          setCurrentStep((step) => step + 1);
          setWarningmessage("");
        }
        break;
      default:
        setCurrentStep((step) => step + 1);
        setWarningmessage("");
    }
  };
  // CREATE NEXT AND PREV BUTTON
  const next = () => {
    if (currentStep < steps.length - 1) {
      nextvalidator();
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
      setWarningmessage("");
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* steps for form */}
      <ul className="steps">
        <li className="step step-primary">Step 1</li>
        <li className={clsx("step", { "step-primary": currentStep >= 1 })}>
          Step 2
        </li>
        <li className={clsx("step", { "step-primary": currentStep >= 2 })}>
          Step 3
        </li>
        <li className={clsx("step", { "step-primary": currentStep >= 3 })}>
          Upload Picture
        </li>
        <li className={clsx("step", { "step-primary": currentStep === 4 })}>
          Final Check
        </li>
      </ul>
      {/* FORM START */}
      <form className="my-4 flex flex-col justify-center">
        {/* PART 1 */}
        {currentStep === 0 && (
          <div className="flex flex-col w-96 space-y-4 p-4 bg-white shadow-lg rounded-xl">
            {/* Event Name */}
            <label className="w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  What would you like to name this event?
                </span>
              </div>
              <input
                required
                type="text"
                name="event_title"
                placeholder="Type here..."
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>

            {/* Fraternity Affiliation */}
            <label className="w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  Fraternity Affiliation
                </span>
              </div>
              <select
                required
                name="fraternity"
                className="select select-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={fraternity}
                onChange={(e) => handleFraternityChange(e.target.value)}
              >
                <option value="None">None</option>
                <option value="Phi Beta Sigma">Phi Beta Sigma</option>
                <option value="Zeta Phi Beta">Zeta Phi Beta</option>
                <option value="Alpha Phi Alpha">Alpha Phi Alpha</option>
                <option value="Alpha Kappa Alpha">Alpha Kappa Alpha</option>
                <option value="Omega Psi Phi">Omega Psi Phi</option>
                <option value="Kappa Alpha Psi">Kappa Alpha Psi</option>
                <option value="Sigma Gamma Rho">Sigma Gamma Rho</option>
                <option value="Delta Sigma Theta">Delta Sigma Theta</option>
                <option value="Iota Phi Theta">Iota Phi Theta</option>
              </select>
            </label>

            {/* Event Description */}
            <label className="w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  Can you explain what this event is in a few sentences?
                </span>
              </div>
              <textarea
                required
                name="event_description"
                className="textarea textarea-bordered w-full h-28 rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about the event..."
                value={description}
                onChange={(e) => handleDescriptionChange(e.target.value)}
              ></textarea>
            </label>

            {/* Event Type */}
            <label className="w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  Type of Event
                </span>
              </div>
              <select
                required
                name="event_type"
                className="select select-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={type}
                onChange={(e) => handleTypeChange(e.target.value)}
              >
                <option value="other">Other</option>
                <option value="social">Social</option>
                <option value="government">Government</option>
                <option value="service">Service</option>
                <option value="education">Education</option>
                <option value="economics">Finance</option>
                <option value="neophyte">Neophyte</option>
                <option value="conference">Conference</option>
              </select>
            </label>

            {/* Tags Input */}
            <div>
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  Tags
                </span>
              </div>
              <div className="border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <TagsInput value={tags} onChange={handleTagsChange} />
              </div>
            </div>
          </div>
        )}
        {/* PART 2 */}
        {currentStep === 1 && (
          <div className="w-96 p-4 bg-white shadow-lg rounded-xl space-y-4">
            <div className="flex flex-col space-y-4">
              {/* Address 1 */}
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold text-gray-700">
                    Address 1
                  </span>
                </div>
                <AddressAutofill accessToken={Mapbox_key}>
                  <input
                    className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    name="address-1"
                    value={address1}
                    onChange={(e) => handleAddress1Change(e.target.value)}
                    autoComplete="address-line1"
                  />
                </AddressAutofill>
              </label>

              {/* Address 2 */}
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold text-gray-700">
                    Address 2
                  </span>
                </div>
                <input
                  className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  name="address-2"
                  value={address2}
                  onChange={(e) => handleAddress2Change(e.target.value)}
                  autoComplete="address-line2"
                />
              </label>

              {/* City */}
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold text-gray-700">
                    City
                  </span>
                </div>
                <input
                  className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => handleCityChange(e.target.value)}
                  autoComplete="address-level2"
                />
              </label>

              {/* State */}
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold text-gray-700">
                    State
                  </span>
                </div>
                <input
                  className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  name="state"
                  value={state}
                  onChange={(e) => handleStateChange(e.target.value)}
                  autoComplete="address-level1"
                />
              </label>

              {/* Zipcode */}
              <label className="w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold text-gray-700">
                    Zipcode
                  </span>
                </div>
                <input
                  className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  name="zipcode"
                  value={zipcode}
                  onChange={(e) => handleZipcodeChange(e.target.value)}
                  autoComplete="postal-code"
                />
              </label>
            </div>
          </div>
        )}
        {/* part 3 */}
        {currentStep === 2 && (
          <div className="w-96 p-4 bg-white shadow-lg rounded-xl space-y-4">
            {/* Event Date */}
            <label className="w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  Event Date
                </span>
              </div>
              <input
                required
                type="date"
                name="eventDate"
                className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={date}
                onChange={(e) => handleDateChange(e.target.value)}
              />
            </label>

            {/* Event Start Time */}
            <label className="w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  Event Start Time
                </span>
              </div>
              <input
                required
                type="time"
                name="event_time"
                placeholder="12:45 PM"
                className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={time}
                onChange={(e) => handleTimeChange(e.target.value)}
              />
            </label>

            {/* Maximum Participants */}
            <label className="w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  Maximum Participants
                </span>
              </div>
              <input
                required
                type="number"
                name="total_seats"
                placeholder="Enter max participants"
                className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={seats}
                onChange={(e) => handleSeatsChange(e.target.value)}
              />
            </label>

            {/* Cost */}
            <label className="w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold text-gray-700">
                  Cost
                </span>
              </div>
              <input
                required
                type="text"
                name="event_cost"
                placeholder="0.00"
                className="input input-bordered w-full rounded-lg px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={cost}
                onChange={(e) => handleCostChange(e.target.value)}
              />
            </label>
          </div>
        )}
      </form>
      {/* part 4 */}
      {currentStep === 3 && (
        <div className="m-4">
          <ImageUploader setImagepath={setImagepath}></ImageUploader>
        </div>
      )}
      {/* submit button */}
      {currentStep === 4 && (
        <>
          <div className="flex flex-col w-96 md:w-3/5 bg-base-100">
            <div className="flex flex-col md:flex-row w-full justify-evenly p-4 md:p-4">
              <div
                id="left"
                className="grid flex-col h-5/6 bg-base-200 w-full rounded p-4 md:p-20"
              >
                <div className="md:text-4xl text-3xl">{title}</div>
                <div className="flex justify-center">
                  {imagepath === "" ? (
                    <CldImage
                      width="200"
                      height="200"
                      src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png"
                      sizes="100vw"
                      className="rounded"
                      alt="Description of my image"
                    />
                  ) : (
                    <CldImage
                      width="200"
                      height="200"
                      src={imagepath}
                      sizes="100vw"
                      className="rounded"
                      alt="Description of my image"
                    />
                  )}
                </div>
                {/* TODO ADD SHORT DESCRIPTION */}
                {/* <div className="m-3">{description}</div> */}
                <div className="flex flex-col ">
                  <div className={`flex flex-col my-1`}>
                    <p className={`text-3xl flex flex-col ${anton.className}`}>
                      Date and Time
                    </p>
                    <div className="text-sm flex">
                      <div className="text-xl">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="w-3 mx-1"
                        />
                      </div>
                      {date} 4pm - 5pm EST
                    </div>
                  </div>
                  <div className="flex flex-col my-1">
                    <p className={`text-3xl ${anton.className}`}>Location</p>
                    <div className="flex">
                      <div className="text-xl">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="w-3 mx-1"
                        />
                      </div>
                      {address1}
                    </div>
                  </div>
                  <div className="flex flex-col my-1">
                    <p className={`text-3xl ${anton.className}`}>
                      About This Event
                    </p>
                    <p className="text-wrap md:w-96 break-all">{description}</p>
                  </div>
                  <div className="flex flex-col my-5">
                    <p className={`text-3xl ${anton.className}`}>Tags</p>
                    <div className="flex flex-wrap">{type}</div>
                  </div>
                  <div className="flex flex-col my-5">
                    <p className={`text-3xl ${anton.className}`}>Price</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            className="my-4 flex flex-col justify-center item-center w-xl"
            action={createEventwithImage}
          >
            <div className="hidden">
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
                    defaultValue={fraternity}
                    readOnly
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
                    defaultValue={title}
                    className="input input-bordered w-full "
                    readOnly
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
                    className="textarea textarea-bordered textarea-lg w-full md:max-w"
                    placeholder="Tell us about the event"
                    defaultValue={description}
                    readOnly
                  ></textarea>
                </label>
                <label className="w-full">
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
                </label>
              </div>
              <div className="w-96 ">
                <div className="flex flex-col">
                  <label className="w-full">
                    <div className="label">
                      <span className="label-text text-xl font-bold">
                        Address 1
                      </span>
                    </div>
                    <input
                      className="input input-bordered w-full max-w"
                      type="text"
                      name="address-1"
                      defaultValue={address1}
                      autoComplete="address-line1"
                      readOnly
                    />
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
                      defaultValue={address2}
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
                      defaultValue={city}
                      autoComplete="address-level2"
                      readOnly
                    />
                  </label>
                  <label className="w-full">
                    <div className="label">
                      <span className="label-text text-xl font-bold">
                        State
                      </span>
                    </div>
                    <input
                      className="input input-bordered w-full"
                      type="text"
                      name="state"
                      defaultValue={state}
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
                      defaultValue={zipcode}
                      autoComplete="postal-code"
                      readOnly
                    />
                  </label>
                </div>
              </div>
              <div className="w-96 ">
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
                    defaultValue={seats}
                    readOnly
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
                    defaultValue={cost}
                    readOnly
                  />
                </label>
              </div>
              <div className="w-96 ">
                <label className="w-full max-w">
                  <div className="label">
                    <span className="label-text text-xl font-bold">
                      Event Date
                    </span>
                  </div>
                  <input
                    required
                    type="date"
                    name="eventDate"
                    className="input input-bordered w-full"
                    defaultValue={date}
                    readOnly
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
                    defaultValue={time}
                    readOnly
                    // TODO: add event time to schema and register it in form
                  />
                </label>
              </div>
            </div>
            <div className="my-4 flex justify-center">
              <SubmitButton></SubmitButton>
            </div>
          </form>
        </>
      )}
      {warningmessage.length > 0 && (
        <div className="text-red-600">{warningmessage}</div>
      )}
      {/* NAVIGATION */}
      <div className="">
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
