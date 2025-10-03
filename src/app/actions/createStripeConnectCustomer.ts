"use server";

import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function createStripeConnectCustomer(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) throw new Error("User not found");

  let stripeAccountId = user.stripeAccountId;
  // CHECK IF USER ALREADY HAS ACCOUNT
  if (!stripeAccountId) {
    const account = await stripe.accounts.create({
      type: "express",
      capabilities: {
        transfers: { requested: true },
        card_payments: { requested: true },
      },
    });

    stripeAccountId = account.id;

    const stripeaddedUser = await prisma.user.update({
      where: { id: userId },
      data: { stripeAccountId },
    });
  }
  // GET HOMEPAGE URL
  const headersList = await headers();
  const origin = headersList.get("origin") || "";

  // make account link
  const accountLink = await stripe.accountLinks.create({
    account: stripeAccountId,
    refresh_url: `${origin}/onboarding/refresh/${userId}`,
    return_url: `${origin}/onboarding/success`, // or wherever you want to return them
    type: "account_onboarding",
  });
  redirect(accountLink.url);
}
