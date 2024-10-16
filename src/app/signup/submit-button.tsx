"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="rounded bg-primary px-2 py-1 text-white text-sm font-semibold "
      type="submit"
      disabled={pending}
    >
      Sign Up
    </button>
  );
}
