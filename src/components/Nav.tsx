import Search from "./Search";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Nav({ logo }: any) {
  const session = await getServerSession(options);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ">
        <Link href={"/"} className="btn btn-ghost flex flex-col">
          {logo}
          <div className="hidden md:block">GreekGather</div>
        </Link>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="btn btn-ghost text-xl md:hidden">
          GreekGather
        </Link>
      </div>
      <div className="navbar-center hidden md:flex mx-3">
        <Search></Search>
      </div>
      {!session ? (
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/events"}>Events</Link>
            </li>
          </ul>
          <Link href={"/api/auth/signin"} className="btn btn-outline mx-2">
            Login
          </Link>
          <a className="btn btn-outline">Sign Up</a>
        </div>
      ) : (
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/events"} className="btn btn-outline mx-2">
                My Events
              </Link>
            </li>
          </ul>
          <Link href={"/profile"} className="btn btn-outline mx-2">
            Profile
          </Link>
          <Link href={"/api/auth/signout"} className="btn btn-outline mx-2">
            Sign Out
          </Link>
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
                <Link href={"/events"}>Events</Link>
              </li>
              <li>
                <Link href={"/api/auth/signin"}>Login</Link>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
            </ul>
          </div>
        ) : (
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
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link href={"/events"}>My Events</Link>
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
