import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeAngle,
  faChampagneGlasses,
  faLandmark,
  faUserGraduate,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const element = {
  icon: <FontAwesomeIcon icon={faHandshakeAngle} />,
  values: "Community Service",
};
const element2 = {
  icon: <FontAwesomeIcon icon={faChampagneGlasses} />,
  values: "Social",
};
const element3 = {
  icon: <FontAwesomeIcon icon={faLandmark} />,
  values: "Government",
};
const element4 = {
  icon: <FontAwesomeIcon icon={faUserGraduate} />,
  values: "Education",
};
const element5 = {
  icon: <FontAwesomeIcon icon={faMoneyBillTrendUp} />,
  values: "Finance",
};

const importedtags = [element, element2, element3, element4, element5];

export default function Taglist() {
  const tags = importedtags.map((t: any, index: number) => {
    return (
      <div className="flex-col" key={index}>
        <div className="avatar m-1 flex-col">
          <div className="p-4 hover:p-3 border-2 w-16 rounded-full ring-offset-2">
            <div key={index}>{t.icon}</div>
          </div>
        </div>
        <div className="max-w-28 text-center text-sm">{t.values}</div>
      </div>
    );
  });

  return <>{tags}</>;
}
