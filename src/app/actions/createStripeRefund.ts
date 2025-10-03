"use server";

import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function cancelEvent(eventId: string) {
  // Step 1: mark the event cancelled
  await prisma.event.update({
    where: { id: eventId },
    data: { cancelled: true, active: false }, // add this field in schema if not there
  });

  // Step 2: find all paid tickets
  const tickets = await prisma.ticket.findMany({
    where: { eventId, status: "paid" },
  });

  // Step 3: refund each
  for (const ticket of tickets) {
    if (ticket.paymentIntentId) {
      try {
        const refund = await stripe.refunds.create({
          payment_intent: ticket.paymentIntentId,
        });

        // Step 4: update ticket status
        await prisma.ticket.update({
          where: { id: ticket.id },
          data: { status: "refunded" },
        });

        console.log(`Refund successful for ticket ${ticket.id}`, refund.id);
      } catch (err) {
        console.error(`Refund failed for ticket ${ticket.id}`, err);
        // maybe update ticket status = "refund_failed"
      }
    }
  }

  return { success: true, refundedCount: tickets.length };
}
