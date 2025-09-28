"use client";

import { JoinEventButton } from "./JoinEventButton";
import { useRef, useState } from "react";
import { createStripeCheckoutSession } from "@/app/actions/createStripeCheckoutSession";

export default function JoinEventModal({ event, userId, sellerstripeId }: any) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // ✏️ Track input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const handleClick = async () => {
    createStripeCheckoutSession({ event, sellerstripeId, name, email });
  };

  // ✅ Button disabled unless both fields are filled
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Button only enabled if name is filled AND email is valid
  const isFormValid = name.trim().length > 0 && isValidEmail(email);

  return (
    <>
      {/* Button to open the modal */}
      <button className="btn btn-primary" onClick={openModal}>
        Join Event
      </button>

      {/* Modal */}
      <dialog ref={modalRef} id="join_event_modal" className="modal">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-lg">Enter your details</h3>

          {/* 📝 Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* 📨 Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* 🎟️ Join Event Button */}
          <div className="mt-4">
            <button
              className="btn btn-primary w-full"
              onClick={handleClick}
              // name={name}
              // email={email}
              disabled={!isFormValid} // 🚨 disable until form is valid
            >
              Purchase Tickets{" "}
            </button>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
