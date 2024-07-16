import Avatar from "./Avatar";
import Link from "next/link";

export default function Card({ event }: any) {
  return (
    <div className="p-3">
      <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
        <figure className="h-72">
          <img src={event.imagePath} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link href={"events/1"}>{event.title}</Link>
          </h2>
          <p>{event.eventDate}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
          <div>
            <div className="flex flex-row justify-between">
              <div className="w-12">
                <Avatar></Avatar>
              </div>
              <div className="btn btn-primary">
                <Link href={"/events/1"}>Get Tickets</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
