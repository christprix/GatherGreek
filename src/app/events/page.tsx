import Cardlist from "@/components/Cardlist";
import Calendar from "@/components/Calendar";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";
import sigmabrotherhood from "/public/sigmabrotherhood.jpg";
import qstomp from "/public/qstomp.jpg";
import Image from "next/image";
import map from "/public/mapbox.png";
import { Anton } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const events = [
  {
    title: "Xi Chi Sigma Step Show",
    location: "1 Amb Dr NW, Atlanta, GA 30313",
    description: "From $1.00",
    imagePath: greekstep.src,
    eventDate: "Saturday July 29th 8:00pm",
    id: 1,
  },
  {
    title: "Feed the homeless Community Event",
    location: "1755 Sandy Ln, Douglasville, GA 30134",
    description: "From $0.00",
    imagePath: sigmavolunteer.src,
    eventDate: "Thursday August 2nd 11:00am",
    id: 2,
  },
  {
    title: "Omega Psi Phi BBQ and performance",
    location: "6700 Church St, Douglasville, GA 30134",
    description: "From $5.00",
    imagePath: qstomp.src,
    eventDate: "Monday July 18th 10am",
    id: 3,
  },
  {
    title: "Sghro Community Service Event",
    location: "6700 Church St, Douglasville, GA 30134",
    description: "From $1.00",
    imagePath: sgrhoevent.src,
    eventDate: "Sunday July 17th 10am",
    id: 4,
  },
  {
    title: "Brotherhood Event",
    location: "6700 Church St, Douglasville, GA 30134",
    description: "From $15.00",
    imagePath: sigmabrotherhood.src,
    eventDate: "Sunday July 17th 12am",
    id: 5,
  },
];

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default async function Page() {
  return (
    <>
      <div className="border-t border-blue-100 flex flex-col">
        <div className={`m-4 text-3xl md:text-6xl ${anton.className}`}>
          Events For You
        </div>
        <div className="mx-4">
          <label className="input input-bordered flex items-center gap-2 md:hidden">
            <input
              type="text"
              className="grow"
              placeholder="Search For Your Next Event"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex-row flex m-4 items-center">
          <label className={`w-26 mx-2 ${anton.className}`} form="meeting-time">
            Pick A Date:
          </label>
          <input
            className="m-1"
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            value="2024-07-18T19:30"
            min="2024-06-07T00:00"
            max="2025-06-14T00:00"
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-start flex-wrap">
        <Cardlist></Cardlist>
      </div>
      <div className="m-4 text-3xl">Popular Groups in Your Area</div>
      <div className="m-5 flex overflow-x-auto justify-around">
        {/* turn into component */}
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
