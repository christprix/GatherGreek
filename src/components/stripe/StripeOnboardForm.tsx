"use client";

import { useTransition } from "react";
import { createStripeConnectCustomer } from "@/app/actions/createStripeConnectCustomer";
export function StripeOnboardForm({ userId }: any) {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={async () => {
        startTransition(() => {
          createStripeConnectCustomer(userId);
        });
      }}
    >
      <button type="submit" className="btn btn-primary" disabled={isPending}>
        {isPending ? "Redirecting…" : "Set Up Stripe Payouts"}
      </button>
    </form>
  );
}
