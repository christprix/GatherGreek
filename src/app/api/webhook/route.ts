import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  // STEP ONE: GET RAW-BODY AND SIGNATURE WITH HEADERS
  console.log("Webhook received");

  const body = await req.text();

  const signature = (await headers()).get("stripe-signature");
  if (!signature) {
    return new NextResponse("Missing Stripe signature header", { status: 400 });
  }
  // STEP TWO: TRY TO MAKE STRIPE EVENT USING THE RAW-BODY, SIGNATURE, AND STRIPE SECRET
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
    console.log("Webhook event contructed successfully:", event.type);
  } catch (err: any) {
    console.error("Webhook construction failed", err);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // CHECK IF CHECKOUT COMPLETED
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const eventId = session.metadata?.eventId as string;
    const buyerEmail = session.metadata?.buyerId as string;
    const name = session.metadata?.name as string;
    const sessionId = session.id;
    const paymentIntentId = session.payment_intent as string;

    console.log("🔁 Session metadata:", session.metadata);
    if (!eventId || !buyerEmail) {
      throw new Error("Missing eventId or buyerEmail in metadata");
    }
    // CREATE TICKET AND SAVE EVERYTHING TO DB
    try {
      await prisma.$transaction(async (tx) => {
        const existing = await tx.ticket.findFirst({
          where: { checkoutSessionId: sessionId },
        });
        // CHECK IF TICKET ALREADY EXISTS
        if (existing) {
          console.log("✅ Duplicate webhook: ticket already exists");
        }
        // CHECK IF EVENT EXISTS
        const eventRecord = await tx.event.findUnique({
          where: { id: eventId },
        });

        if (!eventRecord || eventRecord.totalSeats <= 0) {
          throw new Error("Event does not exist or is sold out");
        }
        console.log(buyerEmail);
        const userExists = await tx.user.findUnique({
          where: { email: buyerEmail },
        });
        console.log(userExists);
        // CREATE TICKET
        await tx.ticket.create({
          data: {
            eventId,
            email: buyerEmail,
            name: name,
            checkoutSessionId: sessionId,
            paymentIntentId: paymentIntentId,
            status: "paid",
            userId: userExists ? userExists.id : null,
          },
        });
        console.log("Ticket created");
        // UPDATE EVENT BY ADDING USERS AND DECREASING THE SEATS AVAILABLE
        if (userExists) {
          await tx.event.update({
            where: { id: eventId },
            data: {
              Users_going_to_event: {
                connect: {
                  id: userExists.id,
                },
              },
              totalSeats: { decrement: 1 },
            },
          });
          console.log("user updated");
        } else {
          await tx.event.update({
            where: { id: eventId },
            data: {
              totalSeats: { decrement: 1 },
            },
          });
          console.log("user not in system but ticket purchased");
        }
      });
    } catch (err) {
      console.error("❌ Error during ticket creation in webhook:", err as any);
      return new NextResponse("Webhook processing error", { status: 500 });
    }

    revalidatePath("/", "layout");
  }

  return new NextResponse("Webhook received", { status: 200 });
}
