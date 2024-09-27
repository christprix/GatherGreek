import Avatar from "./Avatar";
import Link from "next/link";
import zetastep from "/public/zetastep.jpg";
import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import Avatarlist from "./Avatarlist";
import { CldImage } from "next-cloudinary";

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
      <div className="card card-compact bg-base-100 h-[30rem] md:w-96 w-96 h-96 shadow-xl">
        <figure className="">
          <img src={event.imagePath} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link href={`event/${event.id}`}>{event.title}</Link>
          </h2>
          <div className="test-xs flex">
            {/* CHECK FOR VERIFICATION */}
            <div className="flex flex-wrap">{getTags}</div>
            {/* {event.author.isVerified ? (
              <div className="flex flex-row text-center bg-base-200 rounded-xl p-1">
                <div>{event.author.organization}</div>
              </div>
            ) : (
              <div className="bg-base-200 rounded-xl p-1">Community Event</div>
            )} */}
          </div>
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
          <p className="text-sm">From ${event.priceInCents}</p>
          <div className="text-sm">
            Organizer: {event.author.firstName} {event.author.lastName}
          </div>
          {/* <div>
            <div className="flex flex-row justify-between">
              <div className="w-32">
                <Avatarlist></Avatarlist>
              </div>
            </div>
          </div> */}
          <div></div>
          <div className="btn btn-primary">
            <Link href={`event/${event.id}`}>Get Tickets</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
