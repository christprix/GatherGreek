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

const element = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faHandshakeAngle} />,
  values: "community service",
};
const element2 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faChampagneGlasses} />,
  values: "social",
};
const element3 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faLandmark} />,
  values: "government",
};
const element4 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faUserGraduate} />,
  values: "education",
};
const element5 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faMoneyBillTrendUp} />,
  values: "economics",
};
const element6 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faUserGroup} />,
  values: "neophyte",
};

const element7 = {
  icon: <FontAwesomeIcon className="text-3xl" icon={faUsersBetweenLines} />,
  values: "conferences",
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
      <div className="flex-col" key={index}>
        <div className="avatar m-3 md:mx-5 mx-2  flex-col">
          <Link
            href={`/events?tag=${t.values}`}
            className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
          >
            <div key={index}>{t.icon}</div>
          </Link>
          <div className=" text-center text-sm md:text-base font-semibold">
            {t.values.toLowerCase()}
          </div>
        </div>
      </div>
    );
  });

  return <>{tags}</>;
}
