"use client";

import { useFormStatus } from "react-dom";

export function CreateButton() {
  return (
    <button
      className="rounded bg-accent px-2 py-1 text-white text-m font-semibold "
      type="submit"
    >
      Create Event
    </button>
  );
}
