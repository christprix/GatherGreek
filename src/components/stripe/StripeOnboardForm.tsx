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
        {isPending ? "Redirecting…" : "Create Stripe Account"}
      </button>
    </form>
  );
}
