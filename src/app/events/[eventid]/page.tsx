import greekstep from "/public/greekstep-p01.jpg";
import kappastep from "/public/kappastep.jpg";
import deltastep from "/public/deltastep.jpg";
import qstomp from "/public/qstomp.jpg";
import alphastep from "/public/alphastep.jpg";
import sgrhostep from "/public/sgrhostep.jpg";
import zetastep from "/public/zetastep.jpg";

import Image from "next/image";
import Avatar from "@/components/Avatar";

import Link from "next/link";
import Nav from "@/components/Nav";
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
      {/* <Image
        className="rounded-md md:hidden"
        src={event.imagePath}
        alt="event image"
        width={1000}
        height={1000}
      ></Image> */}
      <div className="flex md:hidden justify-center">
        <div className="carousel rounded w-2/3">
          <div className="carousel-item w-full glass">
            <img
              src={greekstep.src}
              className="justify-center"
              alt="Tailwind CSS Carousel component"
            />
            {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button className="btn btn-circle">❮</button>
              <button className="btn btn-circle">❯</button>
            </div> */}
          </div>
          <div className="carousel-item w-full">
            <img
              src={alphastep.src}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={kappastep.src}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={deltastep.src}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={qstomp.src}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={sgrhostep.src}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={zetastep.src}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
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
        <div id="right" className="grid hidden md:block flex-grow">
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
