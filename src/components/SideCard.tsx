import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SideCard({ event }: any) {
  return (
    <Link
      href={`event/${event.id}`}
      className="card m-1 hover:bg-base-300 h-fit max-h-40 card-side bg-base-100 border"
    >
      <figure className="">
        <img
          src={event.imagePath}
          alt="Event Image"
          className="w-32 h-full object-cover"
        />
      </figure>
      <div className="card-body w-40">
        <h2 className="card-title text-sm">{event.title}</h2>
        <div className="text-sm flex flex-wrap">
          <FontAwesomeIcon icon={faCalendarDays} className="w-3 mx-1" />
          <div className="text-sm">
            {dateFormat(`${event.eventDate}`, "dddd, mmmm dS, yyyy")}
          </div>
        </div>
        <div className="text-sm text-wrap">
          {event.address1}, {event.city}
        </div>
      </div>
    </Link>
  );
}
