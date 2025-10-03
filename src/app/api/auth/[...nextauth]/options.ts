import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";

// const prismaclient = prisma;
export const options: NextAuthOptions = {
  // pages: {
  //   // signIn: "/auth/signin",
  //   // signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials) {
        // this is where you need to retrieve user data
        // to verify with credentials
        // const user = { name: "Christian", password: "next-auth" };
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password!
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id + "",
          email: user.email,
          name: user.firstName + " " + user.lastName,
          admincheck: user.isAdmin,
          organization: user.organization,
          location: user.location,
          chapter: user.chapter,
          university: user.university,
          stripeid: user.stripeAccountId,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          admincheck: token.admincheck,
          organization: token.organization,
          location: token.location,
          chapter: token.chapter,
          university: token.university,
          stripeid: token.stripeid,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          admincheck: u.admincheck,
          organization: u.organization,
          location: u.location,
          university: u.university,
          chapter: u.chapter,
          stripeid: u.stripeid,
        };
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
