"use client";
import { signOut } from "next-auth/react";

export default function Signoutbutton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
  );
}
