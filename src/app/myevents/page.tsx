import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { findMyEvents, findMyDraftEvents } from "../actions";
import Link from "next/link";
import MyEventsList from "./MyEventsList";
import MyDraftEventsList from "./MyDraftEventsList";
import { Anton } from "next/font/google";

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
};

export default async function MyEvents() {
  // GET SESSION USER
  const session = await getServerSession(options);
  const user = session?.user as User;
  // GET EVENTS
  const myEvents = await findMyEvents(session?.user?.id as string);
  const myDraftEvents = await findMyDraftEvents(session?.user?.id as string);

  let groupic =
    "https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113760/sigmasignup_kh5zlh.jpg";
  return (
    // IF NO EVENTS REDIRECT TO CREATE PAGE
    <>
      {/* <div
        className="hero  rounded-md h-40 object-cover"
        style={{
          backgroundImage: `url(${groupic})`,
        }}
      >
        <div className="hero-overlay bg-opacity-65"></div>
        <div className="mt-15 block text-white">
          <span className="mb-1 text-3xl font-bold">My Event Hub</span>
        </div>
      </div> */}
      <section className="hero bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            My Event Hub
          </h1>
          <p className="text-lg text-gray-600">
            View and edit your upcoming events. Or continue working on any
            drafts you've saved
            <br />
            <span className="font-semibold text-blue-600">
              Be the captain of your fate
            </span>
          </p>
        </div>
      </section>
      {myEvents.length === 0 ? (
        <div className="section">
          <div className="flex flex-col h-80 justify-around items-center">
            <div
              className={`flex text-center text-md text-xl md:text-xl ${anton.className}`}
            >
              Sorry You have no events but you can make some here!
            </div>
            <Link className="btn btn-primary w-40" href={"/create_event"}>
              Create Event
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <MyEventsList events={myEvents}></MyEventsList>
        </div>
      )}
      {myDraftEvents.length === 0 ? (
        <div className="section">
          <div className="flex flex-col h-80 justify-around items-center">
            <div
              className={`flex text-center text-md text-xl md:text-xl ${anton.className}`}
            >
              No Drafts
            </div>
          </div>
        </div>
      ) : (
        <div>
          <MyDraftEventsList events={myDraftEvents}></MyDraftEventsList>
        </div>
      )}
    </>
  );
}
