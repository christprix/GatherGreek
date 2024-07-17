import greekstep from "/public/greekstep-p01.jpg";
import kappastep from "/public/kappastep.jpg";
import deltastep from "/public/deltastep.jpg";
import qstomp from "/public/qstomp.jpg";
import alphastep from "/public/alphastep.jpg";
import sgrhostep from "/public/sgrhostep.jpg";
import zetastep from "/public/zetastep.jpg";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import dateFormat from "dateformat";
import Avatarlist from "@/components/Avatarlist";

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

export default async function EventDetails({
  params,
}: {
  params: { eventid: string };
}) {
  const dbevent = await prisma.event.findUnique({
    where: {
      id: params.eventid,
    },
  });
  return (
    <>
      {/* <Image
        className="rounded-md md:hidden"
        src={event.imagePath}
        alt="event image"
        width={1000}
        height={1000}
      ></Image> */}
      <div className="flex justify-center md:hidden">
        <div className="carousel rounded w-full h-80 md:w-1/2">
          {/* <div className="carousel-item w-full">
            <img
              src={greekstep.src}
              className="rounded"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={alphastep.src}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div> */}
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
      <div className="flex m-4">
        <div id="left" className="grid flex-col flex-grow">
          <div className="text-2xl">{dbevent.title}</div>
          <div className="w-16">
            <Avatar></Avatar>
          </div>
          <div>{dateFormat(`${dbevent.eventDate}`, "dddd, mmmm dS, yyyy")}</div>
          <div>{dbevent.description}</div>
          {/* <div>{event.price}</div> */}
          <div className="p-3">
            <Avatarlist></Avatarlist>
          </div>
          <button className="btn btn-primary">Get Tickets</button>
        </div>
        {/* <div id="right" className="grid hidden md:block flex-grow">
          <div className="p-4">
            <Image
              className="rounded-md"
              src={event.imagePath}
              alt="event image"
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div> */}
      </div>
    </>
  );
}
