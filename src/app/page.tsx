// remember you must use an Auth Provider for client components
// to use useSession
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Cardlist from "@/components/Cardlist";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeAngle,
  faChampagneGlasses,
  faLandmark,
  faUserGraduate,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";

// mock data replace with events from prisma
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

// turn into component
const element = <FontAwesomeIcon icon={faHandshakeAngle} />;
const element2 = <FontAwesomeIcon icon={faChampagneGlasses} />;
const element3 = <FontAwesomeIcon icon={faLandmark} />;
const element4 = <FontAwesomeIcon icon={faUserGraduate} />;
const element5 = <FontAwesomeIcon icon={faMoneyBillTrendUp} />;

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="flex flex-row items-center py-4  justify-evenly">
        {/* turn into component */}
        <div className="avatar m-1">
          <div className="p-4 hover:p-3 border w-16 rounded-full ring-offset-2">
            <div>{element}</div>
          </div>
        </div>
        <div className="avatar m-1">
          <div className="p-4 hover:p-3 w-16 rounded-full border ring-offset-2">
            <div>{element2}</div>
          </div>
        </div>
        <div className="avatar m-1">
          <div className="p-4 hover:p-3 border w-16 rounded-full ring-offset-2">
            <div>{element3}</div>
          </div>
        </div>
        <div className="avatar m-1">
          <div className="p-4 hover:p-3 border w-16 rounded-full ring-offset-2">
            <div>{element4}</div>
          </div>
        </div>
        <div className="avatar m-1">
          <div className="p-4 hover:p-3 w-16 rounded-full border ring-offset-3">
            <div>{element5}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center">
        <div className="text-3xl p-5">Events Near Douglasville, Georgia</div>
        <div className="flex flex-row max-w-64 m-4"></div>
      </div>
      <div className="flex md:flex-row flex-col justify-around items-center m-1">
        <Cardlist events={events}></Cardlist>
      </div>
      <Footer></Footer>
    </div>
  );
}
