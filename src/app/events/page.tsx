import Cardlist from "@/components/Cardlist";
import Calendar from "@/components/Calendar";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";
import sigmabrotherhood from "/public/sigmabrotherhood.jpg";
import qstomp from "/public/qstomp.jpg";
import Image from "next/image";
import blackpeople from "/public/blackpeople.jpg";
import map from "/public/mapbox.png";
import { Anton } from "next/font/google";
import prisma from "@/lib/prisma";
import {
  findEvents,
  findEventsEconomics,
  findEventsService,
  findEventsGovernment,
  findEventsEducation,
  findEventsOther,
  findEventsSocial,
} from "../actions";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string; tag?: string };
}) {
  let searchevents;

  if (searchParams.tag === "Finance") {
    searchevents = await findEventsEconomics(searchParams.tag);
  } else if (searchParams.tag === "Social") {
    searchevents = await findEventsSocial(searchParams.tag);
  } else if (searchParams.tag === "Service") {
    searchevents = await findEventsService(searchParams.tag);
  } else if (searchParams.tag === "Government") {
    searchevents = await findEventsGovernment(searchParams.tag);
  } else if (searchParams.tag === "Education") {
    searchevents = await findEventsEducation(searchParams.tag);
  } else if (searchParams.tag === "Other") {
    searchevents = await findEventsOther(searchParams.tag);
  } else if (!searchParams.q || searchParams.q === "") {
    searchevents = await prisma.event.findMany();
  } else {
    searchevents = await findEvents(searchParams.q);
  }

  return (
    <>
      <div className="border-t border-blue-100 flex flex-col">
        <Image
          src={blackpeople.src}
          width={600}
          height={500}
          alt="image"
          className="rounded md:hidden block"
        ></Image>
        <div className="rounded-md p-2 m-4 flex md:flex-row flex-col justify-between">
          <div>
            <div className={`m-4 text-3xl md:text-6xl ${anton.className}`}>
              Find an Event Near You
            </div>
            <div className="mx-4">
              <label className="input input-bordered flex items-center gap-2 md:hidden">
                <input type="text" className="grow" placeholder="Search" />
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
              <label
                className={`w-26 mx-2 ${anton.className}`}
                form="meeting-time"
              >
                Search by Date:
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
            <div className="flex-row flex m-4 items-center">
              <label
                className={`w-26 mx-2 ${anton.className}`}
                form="meeting-time"
              >
                Search by Organization:
              </label>
              <div className="dropdown  w-26">
                <div tabIndex={0} role="button" className="btn m-1">
                  Divine 9
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Image
            src={blackpeople.src}
            width={600}
            height={500}
            alt="image"
            className="rounded hidden md:block"
          ></Image>
        </div>
      </div>
      <div className={`m-4 text-2xl md:text-4xl ${anton.className}`}>
        Top Events In Your Area
      </div>
      <div className="m-4 text-2xl md:text-4xl">
        Search: "{searchParams.q || searchParams.tag}"
      </div>
      <div className="flex justify-center md:justify-start flex-wrap">
        <Cardlist events={searchevents}></Cardlist>
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
