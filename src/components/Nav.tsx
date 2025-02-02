import SearchBar from "./Search";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import profilepic from "/public/headshot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// CREATE USER TYPE
type User = {
  name: string;
  email: string;
  image: string;
  id: string;
  admincheck: boolean;
  organization: string;
  location: string;
};

export default async function Nav({ logo }: any) {
  // GET SESSION
  const session = await getServerSession(options);
  const user = session?.user as User;
  let navpic =
    "https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png";
  let navtheme = "light";
  if (session?.user) {
    switch (user.organization) {
      case "Phi Beta Sigma":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1738204743/sigmalogo_bim0lk.png";
        navtheme = "aqua";
        break;
      case "Alpha Phi Alpha":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/c_pad,w_500,h_500/v1738207261/AlphaPhiAlphaCrest_wml2qn.png";
        navtheme = "luxury";
        break;
      case "Zeta Phi Beta":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1738204913/zeta-phi-beta-seal-label-text-sticker-logo-transparent-png-773298_k81anf.png";
        navtheme = "aqua";
        break;
      case "Alpha Kappa Alpha":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1738473197/73916b6314713d1921811d1c0c7c9876_ozfttm.png";
        navtheme = "valentine";
        break;
      case "Omega Psi Phi":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1738473443/kisspng-omega-psi-phi-fraternity-fraternities-and-sororiti-wreathed-5adfab78cd5b62.4111454215246078648412_h2xnut.png";
        navtheme = "synthwave";
        break;
      case "Kappa Alpha Psi":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1738473278/a4aa36658ac47cbec405b3e76a8ba6cb_okfxeq.png";
        navtheme = "kappa";
        break;
      case "Delta Sigma Theta":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/c_pad,w_350,h_350,ar_1:1/v1738473750/kisspng-howard-university-texas-woman-s-university-delta-s-sigma-nu-5b3dcfff4b9642.3805793015307775993096_vw7wcb.png";
        navtheme = "kappa";
        break;
      case "Sigma Gamma Rho":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1738474062/kisspng-butler-university-university-of-north-florida-sigm-5af1019d28cfa9.9979507115257440291672_qilhnx.png";
        navtheme = "cyberpunk";
        break;
      case "Iota Phi Theta":
        navpic =
          "https://res.cloudinary.com/dm54zi0ff/image/upload/v1738473623/Iota-Phi-Theta-Shield_ORIGINAL-SHIELD-WITH-BACKGROUND-TRIM_o9mbzt.png";
        navtheme = "lemonade";
        break;
      default:
        break;
    }
  }

  return (
    <div className="navbar " data-theme={`${navtheme}`}>
      <div className="navbar-start ">
        <Link href={"/"} className="btn btn-ghost">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={navpic} alt="" className="rounded" />
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="btn btn-ghost text-xl md:hidden">
          GatherGreek
        </Link>
      </div>
      <div className="navbar-center hidden md:flex mx-3 text-xl font-bold">
        GatherGreek
      </div>
      {/* IF LOGGED IN TERNARY */}
      {!session ? (
        <div className="navbar-end hidden md:flex">
          <Link href={"/events"} className="btn btn-outline">
            Browse Events
          </Link>
          <Link href={"/api/auth/signin"} className="btn btn-outline mx-2">
            Login
          </Link>
          <Link href={"/signup"} className="btn btn-outline">
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="navbar-end hidden md:flex">
          <Link href={"/events"} className="btn btn-outline mx-2">
            Browse Events
          </Link>
          <Link href={"/create_event"} className="btn btn-outline mx-2">
            Create Event
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="w-10 rounded-full contents">
                <FontAwesomeIcon icon={faUser} className="size-6" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link href={"/myevents"}>My Events</Link>
              </li>
              <li>
                <Link href={"/api/auth/signout"}>Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="navbar-end md:hidden">
        {/* IF LOGGED IN TERNARY 2 */}
        {!session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/events"}>Browse Events</Link>
              </li>
              <li>
                <Link href={"/create_event"}>Create Event</Link>
              </li>
              <li>
                <Link href={"/api/auth/signin"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle object-fill"
            >
              <div className="w-10 rounded-full contents">
                <FontAwesomeIcon icon={faUser} className="size-6" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              {/* TODO ADD ADMIN */}
              <li>
                <Link href={"/myevents"}>My Events</Link>
              </li>
              <li>
                <Link href={"/create_event"}>Create Event</Link>
              </li>
              <li>
                <Link href={"/events"}>Browse Events</Link>
              </li>
              <li>
                <Link href={"/api/auth/signout"}>Sign Out</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
