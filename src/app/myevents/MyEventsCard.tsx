import Link from "next/link";
import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ event }: any) {
  const getTags = event.tags.map((e: any) => {
    return (
      <button
        key={e}
        className="bg-base-300 hover:bg-base-200 rounded-xl p-1 m-1"
      >
        {e.replace(/_/g, " ").toLowerCase()}
      </button>
    );
  });
  return (
    <div className="p-3">
      <div className="card card-compact bg-base-100 h-[30rem] md:w-96 w-96 h-80 shadow-xl">
        <figure className="">
          <img src={event.imagePath} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div>{event.title}</div>
          </h2>
          <div className="text-xs flex flex-row">
            <FontAwesomeIcon icon={faCalendarDays} className="w-3 mx-1" />
            <div className="text-sm">
              <div className="flex flex-col">
                <div>
                  {dateFormat(`${event.eventDate}`, "dddd, mmmm dS, yyyy")}{" "}
                </div>
                <div>{dateFormat(`${event.eventDate}`, "UTC:h:MM TT ")}</div>
              </div>
            </div>
          </div>
          <div className="text-sm flex flex-row">
            <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
            <p>{event.address1 + ", " + event.city || "TBA"}</p>
          </div>
          <Link className="btn btn-primary" href={`myevents/${event.id}`}>
            View/Edit Event Details
          </Link>
        </div>
      </div>
    </div>
  );
}
