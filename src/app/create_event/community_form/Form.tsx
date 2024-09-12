"use client";

import { useState } from "react";

const steps = [
  { id: "Step 1", name: "Step One Information" },
  { id: "Step 2", name: "Step Two Information" },
  { id: "Step 3", name: "Step Three Information" },
];

export default function Form() {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="items-center flex flex-col">
      <ul className="steps">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
      {/* FORM */}
      <form className="mt-12 py-12">
        {currentStep === 0 && (
          <>
            <label className="w-full">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  What would you like to name this event?
                </span>
              </div>
              <input
                required
                type="text"
                name="event_title"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </>
        )}
        {currentStep === 1 && (
          <>
            <label className="w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  Can you explain what this event is in a few sentences?
                </span>
              </div>
              <textarea
                required
                name="event_description"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                placeholder="Tell us about the event"
              ></textarea>
            </label>
            <label className="w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">Event Date</span>
              </div>
              <input
                required
                type="date"
                name="event_date"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </>
        )}
        {currentStep === 2 && (
          <>
            <label className="w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">
                  Maximum Participants
                </span>
              </div>
              <input
                required
                type="number"
                name="total_seats"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              ></input>
            </label>
            <label className="w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">Address</span>
              </div>
              <input
                required
                type="text"
                name="event_address"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              ></input>
            </label>
          </>
        )}
      </form>
      {/* NAVIGATION */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          {/* previous */}
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-100 px-2 py-1 text-sm font-semibold"
          >
            Prev
          </button>
          {/* next */}
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-100 px-2 py-1 text-sm font-semibold"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
