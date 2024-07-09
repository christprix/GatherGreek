import { Nav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Avatar from "@/components/Avatar";
import qstomp from "/public/qstomp.jpg";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";

const events = [
  {
    title: "Xi Chi Sigma Step Show",
    location: "1 Amb Dr NW, Atlanta, GA 30313",
    description: "From $1.00",
    imagePath: greekstep.src,
    eventDate: "Saturday July 29th 8:00pm",
    id: 1,
  },
  {
    title: "Feed the homeless Community Event",
    location: "1755 Sandy Ln, Douglasville, GA 30134",
    description: "From $0.00",
    imagePath: sigmavolunteer.src,
    eventDate: "Thursday August 2nd 11:00am",
    id: 2,
  },
  {
    title: "Sghro Community Service Event",
    location: "6700 Church St, Douglasville, GA 30134",
    description: "From $1.00",
    imagePath: sgrhoevent.src,
    eventDate: "Sunday July 17th 10am",
    id: 3,
  },
];

export default function Home() {
  const eventcard = events.map((e) => {
    return <Card event={e} key={e.id}></Card>;
  });
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <div className="flex flex-col justify-around items-center">
        <div className="flex flex-row max-w-64 m-4"></div>
      </div>
      <div className="flex md:flex-row flex-col justify-around items-center m-3">
        <>{eventcard}</>
      </div>
      <Footer></Footer>
    </div>
  );
}
