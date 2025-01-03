import saint2 from "/public/saint2.jpg";
import { Anton } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPeopleGroup,
  faUserGraduate,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import sigmabrotherhood from "/public/sigmabrotherhood.jpg";
import SideCardlist from "@/components/SideCardList";
import { findMyEvents, findScheduledEvents } from "../actions";
import ProfileAvatar from "@/components/profile/ProfileAvatar";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});
export default async function Page() {
  const session = await getServerSession(options);
  const myEvents = await findMyEvents(session?.user?.id as string);
  let dbmyScheduledEvents = await findScheduledEvents(
    session?.user?.id as string
  );
  let myScheduledEvents = dbmyScheduledEvents[0].User_Scheduled_Events;
  return (
    <div className="bg-base-200 p-4">
      <div
        className="hero h-80 rounded-md md:h-40"
        style={{
          backgroundImage: `url(${sigmabrotherhood.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-65"></div>
        {/* mobile view overlay */}
        <div className="mt-40 md:hidden text-white">
          <div className="text-center">
            <ProfileAvatar></ProfileAvatar>
          </div>
          <div className="max-w-sm">
            <h2 className="card-title text-xs">
              Welcome, {session?.user?.name}
            </h2>
            <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
              <div>Douglasville, GA</div>
            </div>
            <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faPeopleGroup} className="w-3 mx-1" />
              <div>Phi Beta Sigma, Mu Epsilon Chapter</div>
            </div>
            <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faUserGraduate} className="w-3 mx-1" />
              <div>Florida State University</div>
            </div>
          </div>
        </div>
        {/* desktop overlay */}
        <div className="mt-15 hidden md:block text-white">
          <span className="mb-1 text-3xl font-bold">My Event Hub</span>
        </div>
      </div>

      <div className="flex">
        {/* desktop view */}
        <div className="hidden md:block card bg-base-100 w-96 h-fit m-3 ">
          <figure className="px-10 pt-10">
            <div className="text-center">
              <ProfileAvatar></ProfileAvatar>
            </div>
          </figure>
          <div className="card-body items-left text-left">
            <h2 className="card-title">Welcome Back, {session?.user?.name}</h2>
            <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
              <div>Douglasville, GA</div>
            </div>
            <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faPeopleGroup} className="w-3 mx-1" />
              <div>Phi Beta Sigma, Mu Epsilon Chapter</div>
            </div>
            <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faUserGraduate} className="w-3 mx-1" />
              <div>Florida State University</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {/* scheduled events block */}
          <div className="rounded-lg md:w-full md:h-full  m-1 p-2 mt-3 bg-base-100">
            <div className={`mx-5 text-xl md:text-4xl ${anton.className}`}>
              Tickets
            </div>
            <div className="md:grid grid-cols-2">
              {<SideCardlist events={myScheduledEvents}></SideCardlist>}
            </div>
          </div>
          {/* user events block */}
          <div className="rounded-lg md:w-full md:h-full  m-1 p-2 mt-3 bg-base-100">
            <div className={`mx-5 text-xl md:text-4xl ${anton.className}`}>
              My Events
            </div>
            <div className="md:grid grid-cols-2">
              <SideCardlist events={myEvents}></SideCardlist>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
