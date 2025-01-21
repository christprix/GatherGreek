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
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

type User = {
  name: string;
  email: string;
  image: string;
  id: string;
  admincheck: boolean;
  organization: string;
  location: string;
};

export default async function Home() {
  const session = await getServerSession(options);
  const dbevents = await findAllEvents();
  let greekimage =
    "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737305761/demogathergreek/fraternityprofilepics/pexels-gatimu-m-1429881_lfjgsh.jpg";
  if (session?.user) {
    const user = session.user as User;
    switch (user.organization) {
      case "Phi Beta Sigma":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737307174/demogathergreek/fraternityhomepagepics/greekstep-p01_vr4zmg.jpg";
        break;
      case "Alpha Phi Alpha":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737307168/demogathergreek/fraternityhomepagepics/alphastep_xvlocc.jpg";
        break;
      case "Zeta Phi Beta":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737307568/demogathergreek/fraternityhomepagepics/zetastep2_mvljrc.jpg";
        break;
      case "Alpha Kappa Alpha":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737307785/demogathergreek/fraternityhomepagepics/akastep_i8zfeh.jpg";
        break;
      case "Omega Psi Phi":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737307162/demogathergreek/fraternityhomepagepics/qstomp_jhbqzz.jpg";
        break;
      case "Kappa Alpha Psi":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737307788/demogathergreek/fraternityhomepagepics/kappastep2_qbivs9.jpg";
        break;
      case "Delta Sigma Theta":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737307572/demogathergreek/fraternityhomepagepics/deltastep2_qqcuqe.jpg";
        break;
      case "Sigma Gamma Rho":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737309545/demogathergreek/fraternityhomepagepics/sgrhos3_qr72jg.webp";
        break;
      case "Iota Phi Theta":
        greekimage =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737308942/demogathergreek/fraternityhomepagepics/iotastep2_drlg0m.jpg";
        break;
      default:
        break;
    }
  }
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
        <div className="flex justify-center flex-row lg:flex-row-reverse">
          {/* <img src={qstomp.src} className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <div className="mt-8 flex justify-center text-center text-xl md:text-3xl font-bold">
              How to Get Started?
            </div>
            <div className="md:flex md:flex-row">
              <div className="flex justify-center items-center flex-col py-6">
                <div className="card bg-base-200 md:full w-96 ">
                  <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">Create</h2>
                    <figure className="px-10 pt-10 w-96">
                      <img
                        src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113760/sigmasignup_kh5zlh.jpg"
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <div>
                      Community Events are for anyone in the community that
                      wants to showcase an event for people to go to.
                    </div>
                    <div className="card-actions justify-center">
                      <button className="btn btn-primary">
                        <Link href={"/create_event"}>Create Events</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center m-3 p-2">
                <div className="card bg-base-200 md:w-full w-96">
                  <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">Connect</h2>
                    <figure className="px-10 pt-10 w-96">
                      <img
                        src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1727451342/a39368a7-4176-4a6a-901f-9acef9a09ca1-meals02_o0lfop.webp"
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <p>
                      Look for events by City, Organization, or Category!
                      Organize your tickets on your EventHub.
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
                  <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">Community</h2>
                    <figure className="px-10 pt-10 w-96">
                      <img
                        src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1727451287/66d385_e1ef661a1fcb45b08b9eff0ec715e248_mv2_ye9it0.jpg"
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
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
    </div>
  );
}
