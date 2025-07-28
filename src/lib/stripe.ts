import Stripe from "stripe";

console.log(process.env.STRIPE_SECRET_KEY);
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is missing in environment variables");
}
console.log(process.env.STRIPE_SECRET_KEY);
export const stripe = new Stripe(
  "sk_test_51RpIiER7J6GEhtAmqRfnRz262uIG1c9jhpkKqbh9dCkXmb2bW3oW2FKimHUw8qlfRuvGqLDyQoLyFSxHEKLpDlyO00VhpNxgyB",
  {
    apiVersion: "2025-06-30.basil",
  }
);
