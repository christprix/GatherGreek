import profilepic from "/public/headshot.jpg";
import profilepicdefault from "/public/userimg.png";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileAvatar() {
  return (
    <div className="avatar">
      <div className="w-16 rounded-full bg-base-200 contents">
        {/* PROFILE PIC OF ME */}
        {/* <img src={profilepic.src} /> */}
        <img src={profilepicdefault.src} />
      </div>
    </div>
  );
}
