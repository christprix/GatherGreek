import Cardlist from "@/components/Cardlist";
import { Anton } from "next/font/google";
import Mapbox from "@/components/Mapbox";
import SearchBar from "@/components/Search";
import Taglist from "@/components/Taglist";
import { findAllUsers, findAllEvents, findEventsbySearch } from "../actions";
import LocationFinder from "@/components/Locationfinder";
import FraternityTagList from "@/components/FraternitytagList";

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
  // TODO! CHANGE TAG SEARCH TO ONE ACTIONS FUNCTION
  if (!searchParams.q || searchParams.q === "") {
    searchevents = await findAllEvents();
  } else {
    searchevents = await findEventsbySearch(searchParams.q);
  }
  const dbusers = await findAllUsers();
  return (
    <>
      <div className="border-t border-blue-100 justify-center flex flex-col-reverse p-4 justify-around">
        <div className="md:mt-5 flex justify-center">
          {/* <Mapbox></Mapbox> */}
        </div>
        <div className="rounded-md p-2 m-4 flex md:flex-row flex-col justify-around">
          <div className="bg-base-200 rounded">
            <div
              className={`flex justify-center m-4 text-3xl md:text-6xl ${anton.className}`}
            >
              Find an Event Near You
            </div>

            <div className="flex flex-col justify-center m-4 w-lg">
              <SearchBar></SearchBar>
              {/* <div className=" flex-row flex-wrap hidden md:flex justify-center">
                <Taglist></Taglist>
              </div> */}
            </div>
          </div>
          {/* <div className="flex flex-row flex-wrap md:hidden justify-center">
            <Taglist></Taglist>
          </div> */}
        </div>
      </div>
      <div className={`m-4 ml-10 text-2xl md:text-4xl ${anton.className}`}>
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
      <div className="flex justify-center md:justify-start md:ml-10 flex-wrap">
        <Cardlist events={searchevents}></Cardlist>
      </div>
    </>
  );
}
