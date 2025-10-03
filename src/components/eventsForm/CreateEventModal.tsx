"use client";

import { StripeOnboardForm } from "@/components/stripe/StripeOnboardForm";
import { useRef } from "react";

export default function CreateEventModal({ userId }: any) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      {/* Button to open the modal */}
      <button className="btn btn-primary" onClick={openModal}>
        Create Event
      </button>

      {/* Modal */}
      <dialog ref={modalRef} id="join_event_modal" className="modal">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-lg">
            Looks Like You Don't Have a Stripe Account
          </h3>

          {/* 🎟️ Join Event Button */}
          <div className="mt-4">
            <StripeOnboardForm userId={userId as any}></StripeOnboardForm>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Back</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
