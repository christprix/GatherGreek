import blackpeople2 from "/public/blackpeople2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import dateFormat from "dateformat";

export default function ProfileCard({ event }: any) {
  return (
    <>
      <div className="card bg-base-100 min-w-48 shadow-xl m-2">
        <figure className="px-10 pt-10">
          <img
            src={blackpeople2.src}
            alt="event-pic"
            className="rounded-xl h-32"
          />
        </figure>
        <div className="card-body items-left text-left">
          <h2 className="card-title">{event.title}</h2>
          <div className="text-xs flex flex-row">
            <FontAwesomeIcon icon={faCalendarDays} className="w-3 mx-1" />
            <p className="text-sm">
              {dateFormat(`${event.eventDate}`, "dddd, mmmm dS, yyyy")}
            </p>
          </div>
          <div className="text-sm flex flex-row">
            <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
            <p>{event.location}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
}
