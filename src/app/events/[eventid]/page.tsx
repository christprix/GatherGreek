import greekstep from "/public/greekstep-p01.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
const event = {
  title: "Xi Chi Sigma Step Show",
  location: "1 Amb Dr NW, Atlanta, GA 30313",
  description:
    "Join Phi Beta Sigma Fraternity, Inc. for an electrifying evening of rhythm, precision, and cultural celebration at our Step Show Extravaganza!",
  price: "From $1.00",
  imagePath: greekstep.src,
  eventDate: "Saturday July 29th 8:00pm",
  id: 1,
};

export default function EventDetails({
  params,
}: {
  params: { eventid: string };
}) {
  return (
    <>
      <div className="flex container m-4">
        <div id="left" className="grid flex-col flex-grow">
          <div className="text-2xl">{event.title}</div>
          <div className="w-16">
            <Avatar></Avatar>
          </div>
          <div>{event.eventDate}</div>
          <div>{event.description}</div>
          <div>{event.price}</div>
          <button className="btn btn-primary">Get Tickets</button>
        </div>
        <div id="right" className="grid flex-grow">
          <div className="p-4">
            <Image
              className="rounded-md"
              src={event.imagePath}
              alt="event image"
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
