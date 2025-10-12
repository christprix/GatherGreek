"use client";

import { useRef, useState } from "react";
import { useQRCode } from "next-qrcode";

export default function TicketModal({ ticket }: { ticket: any }) {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { Image } = useQRCode();

  const openModal = () => {
    setIsOpen(true);
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    modalRef.current?.close();
  };

  return (
    <>
      {/* Button to open the modal */}
      <button className="btn btn-primary" onClick={openModal}>
        View Ticket
      </button>

      {/* Modal */}
      <dialog ref={modalRef} id="join_event_modal" className="modal">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-lg">🎟️ Your Ticket</h3>

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-3">
              {ticket?.name || "Event Ticket"}
            </h2>

            {/* ✅ Only render QR when modal is open */}
            {isOpen && (
              <Image
                text={ticket?.qrCodeData || "No QR data"}
                options={{
                  type: "image/jpeg",
                  quality: 0.9,
                  errorCorrectionLevel: "M",
                  margin: 3,
                  scale: 6,
                  width: 200,
                  color: {
                    dark: "#000000",
                    light: "#FFFFFF",
                  },
                }}
              />
            )}
          </div>

          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
