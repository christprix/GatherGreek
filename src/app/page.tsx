// remember you must use an Auth Provider for client components
// to use useSession
import Hero from "@/components/Hero";
import Cardlist from "@/components/Cardlist";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";
import Taglist from "@/components/Taglist";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="flex flex-wrap flex-row items-center py-4 justify-evenly ">
        <Taglist></Taglist>
      </div>
      <div className="flex flex-col justify-around items-center">
        <div className="text-3xl p-5">Events Near Douglasville, Georgia</div>
        <div className="flex flex-row max-w-64 m-4"></div>
      </div>
      <div className="flex md:flex-row flex-col justify-around items-center m-1">
        <Cardlist></Cardlist>
      </div>
    </div>
  );
}
