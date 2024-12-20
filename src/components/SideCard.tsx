import dateFormat from "dateformat";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Avatarlist from "./Avatarlist";
import sgrhoevent from "/public/sgrhoevent.jpg";
import Link from "next/link";

export default function SideCard({ event }: any) {
  return (
    <Link
      href={`event/${event.id}`}
      className="card m-1 hover:bg-base-300 h-fit card-side bg-base-100 border"
    >
      <figure className="rounded-lg p-2 min-w-24">
        <img src={event.imagePath} alt="Movie" className="rounded-lg h-32" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <div className="text-xs flex flex-row">
          <FontAwesomeIcon icon={faCalendarDays} className="w-3 mx-1" />
          <div className="text-sm">
            {dateFormat(`${event.eventDate}`, "dddd, mmmm dS, yyyy")}
          </div>
        </div>
        <div className="test-xs text-wrap">{event.location}</div>
      </div>
    </Link>
  );
}
