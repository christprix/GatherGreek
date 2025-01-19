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
            <label className="text-xl font-bold">First Name</label>
            <input
              className="input input-bordered w-full "
              type="text"
              name="firstname"
              required
              min={2}
              max={15}
            />
            <label className="text-xl font-bold">Last Name</label>
            <input
              className="input input-bordered w-full "
              type="text"
              name="lastname"
              required
              min={2}
              max={15}
            />
            <label className="w-full">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  Fraternity Affiliation
                </span>
              </div>
              <select
                required
                name="greek affiliation"
                className="input input-bordered w-full"
              >
                <option value={"None"}>None</option>
                <option value={"Phi Beta Sigma"}>Phi Beta Sigma</option>
                <option value={"Zeta Phi Beta"}>Zeta Phi Beta</option>
                <option value={"Alpha Phi Alpha"}>Alpha Phi Alpha</option>
                <option value={"Alpha Kappa Alpha"}>Alpha Kappa Alpha</option>
                <option value={"Omega Psi Phi"}>Omega Psi Phi</option>
                <option value={"Kappa Alpha Psi"}>Kappa Alpha Psi</option>
                <option value={"Sigma Gamma Rho"}>Sigma Gamma Rho</option>
                <option value={"Delta Sigma Theta"}>Delta Sigma Theta</option>
                <option value={"Iota Phi Theta"}>Iota Phi Theta</option>
              </select>
            </label>
            <label className="text-xl font-bold">Email</label>
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
