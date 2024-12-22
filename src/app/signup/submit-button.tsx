"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  return (
    <button
      className="rounded bg-primary px-2 py-1 text-white text-sm font-semibold "
      type="submit"
    >
      Sign Up
    </button>
  );
}
