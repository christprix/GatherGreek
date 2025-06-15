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
import SideCardlist from "@/components/SideCardList";
import { findMyEvents, findScheduledEvents } from "../actions";
import ProfileAvatar from "@/components/profile/ProfileAvatar";
import Link from "next/link";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

// CREATE USER TYPE
type User = {
  name: string;
  email: string;
  image: string;
  id: string;
  admincheck: boolean;
  organization: string;
  location: string;
  university: any;
  chapter: any;
};

export default async function Page(props: {
  searchParams: Promise<{ message?: string }>;
}) {
  // NEW USER TOUR ATTEMPT
  // TODO: Make user view message on first log in
  // const searchParams = await props.searchParams;
  // let message;
  // if (searchParams.message) {
  //   switch (searchParams.message) {
  //     case "newuser":
  //       message = (
  //         <>
  //           <button className="btn hidden">open modal</button>
  //           <dialog id="my_modal_1 modal-open" className="modal">
  //             <div className="modal-box">
  //               <h3 className="font-bold text-lg">Hello!</h3>
  //               <p className="py-4">
  //                 Press ESC key or click the button below to close
  //               </p>
  //               <div className="modal-action">
  //                 <form method="dialog">
  //                   {/* if there is a button in form, it will close the modal */}
  //                   <button className="btn">Close</button>
  //                 </form>
  //               </div>
  //             </div>
  //           </dialog>
  //         </>
  //       );
  //       break;

  //     default:
  //       break;
  //   }
  // }
  // GET SESSION USER
  const session = await getServerSession(options);
  const user = session?.user as User;
  // GET EVENTS
  const myEvents = await findMyEvents(session?.user?.id as string);
  let dbmyScheduledEvents = await findScheduledEvents(
    session?.user?.id as string
  );
  let myScheduledEvents = dbmyScheduledEvents[0].User_Scheduled_Events;
  // DETERMINE ORGANIZATION PICTURE
  let groupic =
    "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737305761/demogathergreek/fraternityprofilepics/pexels-gatimu-m-1429881_lfjgsh.jpg";
  switch (user.organization) {
    case "Phi Beta Sigma":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737304824/demogathergreek/fraternityprofilepics/sigmabrotherhood_cudwmi.jpg";
      break;
    case "Alpha Phi Alpha":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737304672/demogathergreek/fraternityprofilepics/alphas_iuw0vx.jpg";
      break;
    case "Zeta Phi Beta":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737304670/demogathergreek/fraternityprofilepics/zetas_eoathg.jpg";
      break;
    case "Alpha Kappa Alpha":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737304780/demogathergreek/fraternityprofilepics/akas_koqf9z.avif";
      break;
    case "Omega Psi Phi":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737304669/demogathergreek/fraternityprofilepics/omegas_goaesw.jpg";
      break;
    case "Kappa Alpha Psi":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737304671/demogathergreek/fraternityprofilepics/kappas_fzdw0y.jpg";
      break;
    case "Delta Sigma Theta":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737304669/demogathergreek/fraternityprofilepics/deltas_qbve32.jpg";
      break;
    case "Sigma Gamma Rho":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737306846/demogathergreek/fraternityprofilepics/sgrhos2_vljz82.jpg";
      break;
    case "Iota Phi Theta":
      groupic =
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1737304670/demogathergreek/fraternityprofilepics/iotas_w5fozu.jpg";
      break;
    default:
      break;
  }

  return (
    <div className="bg-base-200 p-4">
      <div
        className="hero h-80 rounded-md md:h-40"
        style={{
          backgroundImage: `url(${groupic})`,
        }}
      >
        {message}
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
            {/* ADD LATER IF YOU WANT LOCATION */}
            {/* <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
              <div>{user.location}</div>
            </div> */}
            <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faPeopleGroup} className="w-3 mx-1" />
              <div className="flex-col">
                <div>{user.organization}</div>
                <div>{user.chapter || "Chapter: Unknown"}</div>
              </div>
            </div>
            <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faUserGraduate} className="w-3 mx-1" />
              <div>{user.university || "University: Unknown"}</div>
            </div>
          </div>
        </div>
        {/* desktop overlay */}
        <div className="mt-15 hidden md:block text-white">
          <span className="mb-1 text-3xl font-bold">My Profile</span>
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
            {/* ADD IF YOU WANT LOCATION */}
            {/* <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
              <div>{user.location}</div>
            </div> */}
            <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faPeopleGroup} className="w-3 mx-1" />
              <div className="flex-col">
                <div>{user.organization}</div>
                <div>{user.chapter || "Chapter Unknown"}</div>
              </div>
            </div>
            <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faUserGraduate} className="w-3 mx-1" />
              <div>{user.university || "University Unknown"}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          {/* scheduled events block */}
          <div className="rounded-lg md:w-full md:h-full  m-1 p-2 mt-3 bg-base-100 flex-col">
            <div className={`mx-5 text-xl md:text-4xl ${anton.className}`}>
              Tickets
            </div>
            {myScheduledEvents.length === 0 ? (
              <div className="flex flex-col">
                <div className="mx-5 text-m md:text-xl">
                  Looks like you aren't signed up for any event! Check out the
                  events going on near you!
                </div>
                <Link className="mx-5 btn btn-primary w-40" href={"/events"}>
                  Browse Event
                </Link>
              </div>
            ) : (
              <div className="md:grid grid-cols-2">
                <SideCardlist events={myScheduledEvents}></SideCardlist>
              </div>
            )}
          </div>
          {/* user events block */}
          <div className="rounded-lg md:w-full md:h-full  m-1 p-2 mt-3 bg-base-100">
            <div className={`mx-5 text-xl md:text-4xl ${anton.className}`}>
              My Events
            </div>
            {myEvents.length === 0 ? (
              <div className="flex flex-col">
                <div className="mx-5 text-m md:text-xl">
                  Looks like you Haven't made any events! Try creating one!
                </div>
                <Link
                  className="mx-5 btn btn-primary w-40"
                  href={"/create_event"}
                >
                  Create Event
                </Link>
              </div>
            ) : (
              <div className="md:grid grid-cols-2">
                <SideCardlist events={myEvents}></SideCardlist>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
