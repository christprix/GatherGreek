// remember you must use an Auth Provider for client components
// to use useSession
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import greekstep from "/public/greekstep-p01.jpg";
import blackbasketball from "/public/blackbasketball.jpg";
import Taglist from "@/components/Taglist";
import { Anton } from "next/font/google";
import { findAllEvents } from "./actions";
import Link from "next/link";
import FraternityTagList from "@/components/FraternitytagList";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

const greekimage = greekstep;

export default async function Home() {
  const dbevents = await findAllEvents();

  return (
    <div>
      <Hero image={greekimage}></Hero>
      <div className="text-xl md:text-3xl  font-bold flex justify-center  m-4 text-center">
        Find An Event by Category
      </div>
      <div className="my-8">
        <div className="flex flex-wrap flex-row items-center text-bold py-2 justify-evenly">
          {/* <Taglist></Taglist> */}
          <Taglist></Taglist>
        </div>
      </div>
      <Hero2 image={blackbasketball}></Hero2>
      <div className="bg-base-100 min-h-[70vh]">
        <div className="flex justify-center flex-col lg:flex-row-reverse">
          {/* <img src={qstomp.src} className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <div className="mt-8 flex justify-center text-center text-xl md:text-3xl font-bold">
              How to Get Started?
            </div>
            <div className="flex justify-center items-center flex-col py-6">
              <div className="card bg-base-200 md:w-full w-96 ">
                <div className="card-body">
                  <h2 className="card-title">
                    Create: Community or D9 Verified Events
                  </h2>
                  <div>
                    <div className="my-2">
                      Community Events are for anyone in the community that
                      wants to showcase an event for people to go to.
                    </div>
                    <div>
                      D9 Verified Events Are events created by D9 fraternity or
                      sorority users who have been verified
                    </div>
                  </div>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                      <Link href={"/create_event"}>Create Events</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center py-6">
              <div className="card bg-base-200 md:w-full w-96">
                <div className="card-body">
                  <h2 className="card-title">
                    Connect: Search for Events with ease
                  </h2>
                  <p>
                    Look for events by City, Organization, or Category! Organize
                    your tickets on your EventHub.
                  </p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                      <Link href={"/events"}>Find Events</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center py-6">
              <div className="card bg-base-200 md:w-full w-96 ">
                <div className="card-body">
                  <h2 className="card-title">
                    Community: Find and connect with Event organizers
                  </h2>
                  <p>
                    After attending an event, follow the event organizers and
                    stay on the lookout for future chances to attend.
                  </p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                      <Link href={"/profile"}>View your Events</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
