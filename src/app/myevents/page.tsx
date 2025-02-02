import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { findMyEvents } from "../actions";
import Link from "next/link";
import MyEventsList from "./MyEventsList";

// CREATE USER TYPE
type User = {
  name: string;
  email: string;
  image: string;
  id: string;
  admincheck: boolean;
  organization: string;
  location: string;
};

export default async function MyEvents() {
  // GET SESSION USER
  const session = await getServerSession(options);
  const user = session?.user as User;
  // GET EVENTS
  const myEvents = await findMyEvents(session?.user?.id as string);
  let groupic =
    "https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113760/sigmasignup_kh5zlh.jpg";
  return (
    // IF NO EVENTS REDIRECT TO CREATE PAGE
    <>
      <div
        className="hero  rounded-md h-40 object-cover"
        style={{
          backgroundImage: `url(${groupic})`,
        }}
      >
        <div className="hero-overlay bg-opacity-65"></div>
        {/* mobile view overlay */}

        {/* desktop overlay */}
        <div className="mt-15 block text-white">
          <span className="mb-1 text-3xl font-bold">My Event Hub</span>
        </div>
      </div>
      {myEvents.length === 0 ? (
        <div className="section">
          <div className="flex flex-col">
            <div>Sorry You have no events but you can make some here!</div>
            <Link className="btn btn-primary" href={"/create_event"}>
              Create Event
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <MyEventsList events={myEvents}></MyEventsList>
        </div>
      )}
    </>
  );
}
