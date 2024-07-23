// remember you must use an Auth Provider for client components
// to use useSession
import Hero from "@/components/Hero";
import Cardlist from "@/components/Cardlist";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";
import Taglist from "@/components/Taglist";
import { Anton } from "next/font/google";
import prisma from "@/lib/prisma";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default async function Home() {
  const dbevents = await prisma.event.findMany();
  return (
    <div>
      <Hero></Hero>
      <div
        className={`m-4 text-3xl md:text-6xl md:justify-start justify-start flex ${anton.className}`}
      >
        Find Events By Category
      </div>
      <div className="flex flex-wrap flex-row items-center py-4 justify-evenly ">
        <Taglist></Taglist>
      </div>
      <div
        className={`m-4 text-2xl md:text-4xl md:justify-start justify-center flex ${anton.className}`}
      >
        Events Near Atlanta, Georgia
      </div>
      <div className="flex justify-center">
        <div className="flex md:flex-row flex-col justify-around items-center m-1">
          <Cardlist events={dbevents}></Cardlist>
        </div>
      </div>
    </div>
  );
}
