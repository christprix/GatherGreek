"use server";

import { redirect } from "next/navigation";
import baseUrl from "@/lib/baseUrl";
import { stripe } from "@/lib/stripe";

export async function createStripeCheckoutSession({
  event,
  sellerstripeId,
  name,
  email,
}: any) {
  if (!sellerstripeId) {
    throw new Error("Seller not found");
  }
  if (!event || !event.priceInCents) {
    throw new Error("Event not found");
  }
  console.log(Math.round(parseFloat(event.priceInCents) * 100));
  const amount = Math.round(parseFloat(event.priceInCents) * 100);
  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: event.title,
            description: event.short_description ?? event.description,
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${baseUrl}/profile`,
    cancel_url: `${baseUrl}/event/${event.id}?paymentstatus=canceled`,

    payment_intent_data: {
      application_fee_amount: Math.floor(amount * 0.02),
      transfer_data: {
        destination: sellerstripeId,
      },
      // OPTIONAL: Keep a cut of the revenue for yourself
      // application_fee_amount: 500, // e.g. $5
    },

    metadata: {
      eventId: event.id,
      buyerEmail: email,
      name,
    },
  });
  redirect(session.url as any);
}
