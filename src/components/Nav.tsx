import SearchBar from "./Search";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import profilepic from "/public/headshot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default async function Nav({ logo }: any) {
  // GET SESSION
  const session = await getServerSession(options);
  // CHECK IF ADMIN
  console.log(session?.user?.admincheck);
  function admincheck() {
    if (session?.user?.admincheck) {
      return <Link href={"/admin"}>Admin</Link>;
    }
    return <></>;
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ">
        <Link href={"/"} className="btn btn-ghost">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="btn btn-ghost text-xl md:hidden">
          GreekGather
        </Link>
      </div>
      <div className="navbar-center hidden md:flex mx-3 text-xl font-bold">
        GreekGather
      </div>
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
                <Link href={"/api/auth/signout"}>Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="navbar-end md:hidden">
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
              <li>{admincheck()}</li>
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
