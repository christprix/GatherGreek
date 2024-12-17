import NextAuth from "next-auth";
import { options } from "./options";

const handler = await NextAuth(options);

export { handler as GET, handler as POST };
