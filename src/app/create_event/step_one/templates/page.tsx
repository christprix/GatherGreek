import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { findMyEvents } from "@/app/actions";
import Link from "next/link";
import MyTemplatesList from "./MyTemplatesList";
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
  let groupic =
    "https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113760/sigmasignup_kh5zlh.jpg";
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Use a Previous Event
          </h1>
          <p className="text-lg text-gray-600">
            Why reinvent the wheel? Pick one of your past events and turn it
            into something even better.
            <br />
            <span className="font-semibold text-blue-600">
              Work smarter, not harder.
            </span>
          </p>
        </div>
      </section>

      {/* No Events Fallback */}
      {myEvents.length === 0 ? (
        <section className="flex flex-col items-center justify-center h-96 space-y-6 bg-gray-50 text-center px-4">
          <h2
            className={`text-2xl md:text-3xl text-gray-700 ${anton.className}`}
          >
            You don’t have any events yet...
          </h2>
          <p className="text-md text-gray-500">
            But that’s an opportunity! Let’s get your first one rolling.
          </p>
          <Link
            href="/create_event"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Create Your First Event
          </Link>
        </section>
      ) : (
        <section className="px-4 py-8 md:px-12">
          <MyTemplatesList events={myEvents} />
        </section>
      )}
    </>
  );
}
