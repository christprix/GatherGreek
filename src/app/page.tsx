// remember you must use an Auth Provider for client components
// to use useSession
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Cardlist from "@/components/Cardlist";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";
import qstomp from "/public/qstomp.jpg";
import blackbasketball from "/public/blackbasketball.jpg";
import Taglist from "@/components/Taglist";
import { Anton } from "next/font/google";
import prisma from "@/lib/prisma";
import { findAllEvents } from "./actions";

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
      <div className="text-2xl md:text-5xl  font-bold flex justify-center md:justify-start m-4 text-center">
        Find An Event by Category
      </div>
      <div className="my-8">
        <div className="flex flex-wrap flex-row items-center text-bold py-2 justify-evenly ">
          <Taglist></Taglist>
        </div>
      </div>
      <Hero2 image={blackbasketball}></Hero2>
      <div className="bg-base-100 min-h-[70vh]">
        <div className="flex justify-center flex-col lg:flex-row-reverse">
          {/* <img src={qstomp.src} className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <div className="text-5xl font-bold">How to Get Started?</div>
            <div className="flex flex-col py-6">
              <div className="card bg-base-100 md:w-full w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    Create: Community or D9 Verified Events
                  </h2>
                  <p>
                    <div className="my-2">
                      Community Events are for anyone in the community that
                      wants to showcase an event for people to go to.
                    </div>
                    <div>
                      D9 Verified Events Are events created by D9 fraternity or
                      sorority users who have been verified
                    </div>
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">
                      Create an Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-6">
              <div className="card bg-base-100 md:w-full w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    Connect: Search for Events with ease
                  </h2>
                  <p>
                    Look for events by City, Organization, or Category! Organize
                    your tickets on your EventHub.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Find Events</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-6">
              <div className="card bg-base-100 md:w-full w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    Community: Find and connect with Event organizers
                  </h2>
                  <p>
                    After attending an event, follow the event organizers and
                    stay on the lookout for future chances to attend.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">
                      View your Events
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
