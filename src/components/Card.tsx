import Link from "next/link";
import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ event }: any) {
  let address;
  let encodedAddress;
  if (event?.address1) {
    address = event.address1 + " " + event.city + " " + event.zipcode;
    encodedAddress = encodeURI(address as string);
  }

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
      <div className="card card-compact bg-base-100 h-[30rem] md:w-96 h-96 shadow-xl">
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
          </div>
          <div className="text-xs flex flex-row">
            <FontAwesomeIcon icon={faCalendarDays} className="w-3 mx-1" />
            <p className="text-sm">
              <div className="flex flex-col">
                <div>
                  {dateFormat(`${event.eventDate}`, "dddd, mmmm dS, yyyy")}{" "}
                </div>
                <div>{dateFormat(`${event.eventDate}`, "UTC:h:MM TT ")}</div>
              </div>
            </p>
          </div>
          <div className="text-sm flex flex-row">
            <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
            <p>
              {event.address1 ? (
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {address}
                </Link>
              ) : (
                <div>TBA</div>
              )}
            </p>
          </div>
          {/* <p className="text-sm">From ${event.priceInCents}</p> */}
          <Link className="btn btn-primary" href={`event/${event.id}`}>
            Get Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}
