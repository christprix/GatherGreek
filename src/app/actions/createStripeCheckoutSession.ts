"use server";

import { redirect } from "next/navigation";
import baseUrl from "@/lib/baseUrl";
import { stripe } from "@/lib/stripe";

export async function createStripeCheckoutSession({
  event,
  userId,
  sellerstripeId,
}: any) {
  if (!sellerstripeId) {
    throw new Error("Seller not found");
  }
  if (!event || !event.priceInCents) {
    throw new Error("Event not found");
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: event.title,
            description: event.short_description ?? event.description,
          },
          unit_amount: parseInt(event.priceInCents),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${baseUrl}/checkout/success`,
    cancel_url: `${baseUrl}/event/${event.id}`,

    payment_intent_data: {
      transfer_data: {
        destination: sellerstripeId,
      },
      // OPTIONAL: Keep a cut of the revenue for yourself
      // application_fee_amount: 500, // e.g. $5
    },

    metadata: {
      eventId: event.id,
      buyerId: userId,
    },
  });
  redirect(session.url as any);
}
