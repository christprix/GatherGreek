"use client";
import { createUser } from "../actions";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

export default function Signup() {
  return (
    <section className="items-center flex flex-col bg-base-200">
      <div className="m-4 text-xl md:text-3xl  font-bold">
        Become a part of the Movement
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center rounded">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>
        <form className="py-10 flex justify-center" action={createUser}>
          <div className="bg-base-100 p-4 md:m-4 w-96  rounded shadow-md">
            <label>First Name</label>
            <input
              className="input input-bordered w-full "
              type="text"
              name="firstname"
              required
              min={2}
              max={15}
            />
            <label>Last Name</label>
            <input
              className="input input-bordered w-full "
              type="text"
              name="lastname"
              required
              min={2}
              max={15}
            />
            <label>Email</label>
            <input
              className="input input-bordered w-full "
              type="text"
              name="email"
              required
            />
            <label>Password</label>
            <input
              className="input input-bordered w-full "
              type="password"
              name="password"
              required
              min={8}
              max={20}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <div className="my-4 flex justify-center">
              <SubmitButton></SubmitButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
