import Avatar from "./Avatar";
import Link from "next/link";
import zetastep from "/public/zetastep.jpg";
import dateFormat from "dateformat";
import Avatarlist from "./Avatarlist";

export default function Card({ event }: any) {
  return (
    <div className="p-3">
      <div className="card card-compact bg-base-100 h-[30rem] md:w-96 w-96 h-96 shadow-xl">
        <figure className="">
          <img src={zetastep.src} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link href={`events/${event.id}`}>{event.title}</Link>
          </h2>
          <p>{dateFormat(`${event.eventDate}`, "dddd, mmmm dS, yyyy")}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
          <div>
            <div className="flex flex-row justify-between">
              <div className="w-32">
                <Avatarlist></Avatarlist>
              </div>
            </div>
          </div>
          <div className="btn btn-primary">
            <Link href={`events/${event.id}`}>Get Tickets</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
