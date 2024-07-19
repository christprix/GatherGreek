import Image from "next/image";
import Saint from "/public/Saint.JPG";
import SideCard from "@/components/SideCard";
import { Anton } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPeopleGroup,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";
import sigmabrotherhood from "/public/sigmabrotherhood.jpg";
import qstomp from "/public/qstomp.jpg";
import blackpeople2 from "/public/blackpeople2.jpg";
import SideCardlist from "@/components/SideCardList";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default async function Page() {
  const session = await getServerSession(options);
  return (
    <div className="bg-base-200 p-4">
      {/* <Image
        src={Saint.src}
        width={700}
        height={600}
        alt="image"
        className=" md:hidden block "
      ></Image> */}
      <div
        className="hero h-80 rounded-md"
        style={{
          backgroundImage: `url(${sigmabrotherhood.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="mt-40 md:hidden text-neutral-content">
          <div className="max-w-sm">
            <h2 className="card-title text-xs">
              Welcome Back, Christian St. Prix
            </h2>
            <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
              <div>Douglasville, GA</div>
            </div>
            <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faPeopleGroup} className="w-3 mx-1" />
              <div>Phi Beta Sigma, Mu Epsilon Chapter</div>
            </div>
            <div className="text-sm flex flex-row">
              <FontAwesomeIcon icon={faUserGraduate} className="w-3 mx-1" />
              <div>Florida State University</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="hidden md:block card bg-base-100 w-96 h-fit m-3 ">
          <figure className="px-10 pt-10">
            <img src={Saint.src} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-left text-left">
            <h2 className="card-title">Christian St. Prix</h2>
            <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faLocationDot} className="w-3 mx-1" />
              <div>Douglasville, GA</div>
            </div>
            <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faPeopleGroup} className="w-3 mx-1" />
              <div>Phi Beta Sigma, Mu Epsilon Chapter</div>
            </div>
            <div className="text-xs flex flex-row">
              <FontAwesomeIcon icon={faUserGraduate} className="w-3 mx-1" />
              <div>Florida State University</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg md:w-2/3 md:h-1/3  m-3 p-3 bg-base-100">
          <div className={`mx-5 text-xl md:text-4xl ${anton.className}`}>
            Scheduled Events
          </div>
          <div className="md:grid grid-cols-2">
            <SideCardlist></SideCardlist>
          </div>
        </div>
      </div>
      <div className="m-4 text-3xl">Past Events</div>
      <div className="m-5 flex overflow-x-auto justify-around">
        {/* turn into component */}
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
