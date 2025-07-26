"use server";

import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function createStripeConnectCustomer(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) throw new Error("User not found");

  let stripeAccountId = user.stripeAccountId;

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
    console.log(stripeaddedUser);
  }
  const headersList = await headers();
  const origin = headersList.get("origin") || "";
  console.log(origin);
  const accountLink = await stripe.accountLinks.create({
    account: stripeAccountId,
    refresh_url: `${origin}/onboarding/refresh/${userId}`,
    return_url: `${origin}/onboarding/success`, // or wherever you want to return them
    type: "account_onboarding",
  });
  redirect(accountLink.url);
}
