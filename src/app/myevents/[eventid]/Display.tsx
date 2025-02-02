"use client";
import SideNav from "./sidenav";
import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { Anton } from "next/font/google";
import { useState } from "react";
import EventAttendeesList from "./EventAttendees";
import DeleteEvent from "./DeleteEvent";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default function Display({ dbevent, EventCreatorInfo }: any) {
  // TAGS FUNCTION
  const getTags = dbevent?.tags.map((e: any) => {
    return (
      <button
        key={e}
        className="rounded-lg w-fit p-1 m-1 hover:bg-base-200 bg-base-300"
      >
        {e.replace(/_/g, " ").toLowerCase()}
      </button>
    );
  });

  const [display, setDisplay] = useState("main");
  function changeDisplay(input: string) {
    setDisplay(input);
  }
  function displayRightSide() {
    switch (display) {
      case "main":
        return (
          <>
            {" "}
            <div className="flex flex-col items-center bg-base-100">
              <div className="flex flex-col md:flex-row w-full justify-evenly p-4">
                <div
                  id="left"
                  className="grid flex-col h-5/6 bg-base-100 md:w-3/5 w-full rounded  p-4"
                >
                  <div className="md:text-4xl text-3xl">{dbevent.title}</div>
                  <div className="text-sm">
                    {dateFormat(`${dbevent.eventDate}`, "dddd, mmmm dS, yyyy")}
                  </div>
                  <div className="m-3">{dbevent.short_description}</div>
                  <div className="card m-1 w-full card-side bg-base-200 border">
                    <figure className="rounded-lg min-w-16">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                      >
                        <div className="w-10 rounded-full border contents">
                          <FontAwesomeIcon icon={faUser} className="size-6" />
                        </div>
                      </div>
                    </figure>
                    <div className="card-body">
                      <div className="text-xs flex flex-col">
                        <h2 className="card-title">
                          {EventCreatorInfo?.firstName}{" "}
                          {EventCreatorInfo?.lastName}
                        </h2>
                        <p className="text-sm">Organizer info</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className={`flex flex-col my-10`}>
                      <p
                        className={`text-3xl flex flex-col ${anton.className}`}
                      >
                        Date and Time
                      </p>
                      <div className="text-sm flex">
                        <div className="text-xl">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="w-3 mx-1"
                          />
                        </div>
                        {dateFormat(
                          `${dbevent.eventDate}`,
                          "dddd, mmmm dS, yyyy"
                        )}{" "}
                        4pm - 5pm EST
                      </div>
                    </div>
                    <div className="flex flex-col my-10">
                      <p className={`text-3xl ${anton.className}`}>Location</p>
                      <div className="flex">
                        <div className="text-xl">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="w-3 mx-1"
                          />
                        </div>
                        {dbevent.location}
                      </div>
                    </div>
                    <div className="flex flex-col my-10">
                      <p className={`text-3xl ${anton.className}`}>
                        About This Event
                      </p>
                      <p>{dbevent.description}</p>
                    </div>
                    <div className="flex flex-col my-10">
                      <p className={`text-3xl ${anton.className}`}>Tags</p>
                      <div className="flex flex-wrap">{getTags}</div>
                    </div>
                    <div className="flex flex-col my-10">
                      <p className={`text-3xl ${anton.className}`}>Price</p>
                      <p>{dbevent.priceInCents}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        break;
      case "Attendees":
        return <EventAttendeesList dbevent={dbevent}></EventAttendeesList>;
      case "Edit":
        return <>Edit Page</>;
      case "Delete Event":
        return <DeleteEvent dbevent={dbevent}></DeleteEvent>;
      default:
        return <>TBA</>;
        break;
    }
  }

  return (
    <div className="flex h-full flex-col md:flex-row overflow-hidden ">
      <div className="w-full flex-none md:w-64">
        <SideNav
          imagepath={dbevent?.imagePath}
          changeDisplay={changeDisplay}
        ></SideNav>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {dbevent ? (
          <div>{displayRightSide()}</div>
        ) : (
          <div>Sorry Can't Find Event!</div>
        )}
      </div>
    </div>
  );
}
