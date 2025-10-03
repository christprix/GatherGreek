"use client";
import { createStripeCheckoutSession } from "@/app/actions/createStripeCheckoutSession";
// import { useTransition } from "react";
export function JoinEventButton({
  event,
  userId,
  sellerstripeId,
  name,
  email,
}: any) {
  const handleClick = async () => {
    console.log(event, userId);
    createStripeCheckoutSession({ event, sellerstripeId, name, email });
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Buy Ticket
    </button>
  );
}
