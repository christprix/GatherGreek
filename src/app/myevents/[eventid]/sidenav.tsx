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

  const handleScholarshipChange = () => {
    changeDisplay("Scholarship");
    console.log("Scholarship");
  };

  const handleMainChange = () => {
    changeDisplay("main");
    console.log("main");
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
      <div className="w-32 text-white md:w-40"></div>
      {/* </Link> */}
      <div className="flex md:h-96 flex-col justify-between md:flex-col md:space-x-0 md:space-y-2">
        <div className=" h-auto w-full grow rounded-md bg-gray-50 block">
          <div className="flex-row items-center space-y-2 flex-grow w-full p-1">
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
              onClick={handleScholarshipChange}
              className="btn flex-grow w-full items-center justify center"
            >
              Scholarships
            </button>
          </div>
        </div>

        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <Link href={"/myevents"}>Back to My Events</Link>
        </button>
      </div>
    </div>
  );
}
