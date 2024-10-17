import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeAngle,
  faChampagneGlasses,
  faLandmark,
  faUserGraduate,
  faMoneyBillTrendUp,
  faEarthAmericas,
  faUsersBetweenLines,
  faUserPlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import sigmabrotherhood from "/public/sigmabrotherhood.jpg";

const element = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faHandshakeAngle} />,
  values: "Service",
};
const element2 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faChampagneGlasses} />,
  values: "Social",
};
const element3 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faLandmark} />,
  values: "Government",
};
const element4 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faUserGraduate} />,
  values: "Education",
};
const element5 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faMoneyBillTrendUp} />,
  values: "Finance",
};
const element6 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faUserGroup} />,
  values: "Neophyte Events",
};

const element7 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faUsersBetweenLines} />,
  values: "Conferences",
};

const importedtags = [
  element7,
  element6,
  element2,
  element3,
  element,
  element4,
  element5,
];

export default function Taglist() {
  const tags = importedtags.map((t: any, index: number) => {
    return (
      <li className="flex-col" key={index}>
        <div className="avatar m-3 mx-5 flex-col">
          <Link href={`/events?tag=${t.values}`} className="">
            <div
              className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
              key={index}
            >
              {t.icon}
            </div>
            <div className=" text-center text-sm md:text-base font-semibold">
              {t.values}
            </div>
          </Link>
        </div>
      </li>
    );
  });

  return (
    <>
      <div className="drawer flex justify-center drawer-end z-0">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="hero bg-base-100">
            <div className="hero-content flex-col-reverse">
              <div className="flex flex-col md:flex-row md:w-full md:justify-around">
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                  <figure>
                    <img src={sigmabrotherhood.src} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Event Categories</h2>
                    <p>
                      Events for the whole community. Choose from Social events,
                      classes, politics and more!
                    </p>
                    <div className="card-actions justify-center">
                      <label htmlFor="my-drawer-4" className="drawer-button">
                        <div className="btn btn-wide">View Categories</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {tags}
          </ul>
        </div>
      </div>
    </>
  );
}
