"use client";
import Search from "./Search";
import { ReactNode } from "react";

export function Nav({ logo }: any) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ">
        <button className="btn btn-ghost btn-circle w-10">{logo}</button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">GreekGather</a>
      </div>
      <div className="navbar-center hidden md:flex mx-3">
        <Search></Search>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Create Events</a>
          </li>
        </ul>
        <a className="btn btn-ghost mx-4">Login</a>
        <a className="btn">Sign Up</a>
      </div>
      <div className="navbar-end md:hidden">
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
              <a>Events</a>
            </li>
            <li>
              <a>Create Events</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a className="btn">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
