"use client";
import Link from "next/link";
import Image from "next/image";

export default function SideNav({ imagepath, changeDisplay }: any) {
  const handleEditChange = () => {
    changeDisplay("Edit");
    console.log("Edit");
  };

  const handleAttendeesChange = () => {
    changeDisplay("Attendees");
    console.log("Attendees");
  };

  const handleMainChange = () => {
    changeDisplay("main");
    console.log("main");
  };

  const handleDeleteChange = () => {
    changeDisplay("Delete Event");
    console.log("Delete");
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex items-center justify-center">
        <Image
          src={imagepath}
          alt="event pic"
          height={200}
          width={500}
          // objectFit="true"
          className="mb-2 flex items-end justify-start rounded-md bg-blue-600 object-cover md:h-40 h-60"
        ></Image>
      </div>
      {/* </Link> */}
      <div className="flex md:h-96 flex-col justify-between md:space-x-0 md:space-y-2">
        <div className=" h-auto w-full grow rounded-md bg-gray-50 block">
          <div className="md:block hidden flex-row items-center space-y-2 flex-grow w-full p-1">
            <button
              onClick={handleMainChange}
              className="btn flex-grow w-full items-center justify center"
            >
              Event Dashboard
            </button>
            <button
              onClick={handleEditChange}
              className="btn flex-grow w-full items-center justify center"
            >
              Edit Event
            </button>
            <button
              onClick={handleAttendeesChange}
              className="btn flex-grow w-full items-center justify center"
            >
              Who is going
            </button>
            <button
              onClick={handleDeleteChange}
              className="btn flex-grow w-full items-center justify center"
            >
              Delete Event
            </button>
          </div>
          <details className="dropdown md:hidden block flex">
            <summary className="btn md:hidden block bg-base-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow">
              <li>
                <button
                  onClick={handleMainChange}
                  className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                  Event Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={handleEditChange}
                  className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                  Edit Event
                </button>
              </li>
              <li>
                <button
                  onClick={handleAttendeesChange}
                  className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                  Who is going
                </button>
              </li>
              <li>
                <button
                  onClick={handleDeleteChange}
                  className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                  Delete Event
                </button>
              </li>
              <li>
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                  <Link href={"/myevents"}>Back to My Events</Link>
                </button>
              </li>
            </ul>
          </details>
        </div>

        <button className="md:block hidden flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <Link href={"/myevents"}>Back to My Events</Link>
        </button>
      </div>
    </div>
  );
}
