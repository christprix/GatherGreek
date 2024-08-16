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
import SearchBar from "@/components/Search";
import DateSearch from "@/components/DateSearch";
import {
  findEvents,
  findEventsEconomics,
  findEventsService,
  findEventsGovernment,
  findEventsEducation,
  findEventsOther,
  findEventsSocial,
  findAllUsers,
  findAllEvents,
} from "../actions";
import UserCardList from "@/components/UserCardList";
import LocationFinder from "@/components/Locationfinder";
import OrganizationSearch from "@/components/OrganizationSearch";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string; tag?: string; date?: string };
}) {
  let searchevents;
  // SEARCH DB BASED ON TAG INPUT
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
  } else if (searchParams.date) {
    searchevents = await findAllEvents();
  } else if (!searchParams.q || searchParams.q === "") {
    searchevents = await findAllEvents();
  } else {
    searchevents = await findEvents(searchParams.q);
  }
  const dbusers = await findAllUsers();
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
          <div className="bg-base-200 rounded">
            <div className={`m-4 text-3xl md:text-6xl ${anton.className}`}>
              Find an Event Near You
            </div>

            <div className="mx-4 max-w-lg">
              <SearchBar></SearchBar>
            </div>

            <div className="flex-row flex m-4 items-center">
              <DateSearch></DateSearch>
            </div>
            <div className="flex-row flex m-4 items-center">
              <OrganizationSearch></OrganizationSearch>
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
        <LocationFinder></LocationFinder>
      </div>
      {/* turn below into component to have conditional rendering */}
      <div className="m-4 text-2xl md:text-4xl">
        {!searchParams.q ? (
          <></>
        ) : (
          <div>Search: "{searchParams.q || searchParams.tag}"</div>
        )}
      </div>
      <div className="flex justify-center md:justify-start flex-wrap">
        <Cardlist events={searchevents}></Cardlist>
      </div>
      <div className="m-4 text-3xl">Popular Groups in Your Area</div>
      <div className="m-5 flex overflow-x-auto justify-around">
        {/* turn into component */}
        <UserCardList users={dbusers}></UserCardList>
        {/* <div className="card bg-base-100 min-w-48 shadow-xl m-2">
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
        </div> */}
      </div>
    </>
  );
}
