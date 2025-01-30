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
  console.log(myEvents);
  return (
    // IF NO EVENTS REDIRECT TO CREATE PAGE
    <>
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
