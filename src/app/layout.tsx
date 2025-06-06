import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "@/components/Nav";
import AuthProvider from "./context/AuthProvider";
import { Analytics } from "@vercel/analytics/react";

const logo1 = <FontAwesomeIcon icon={faLandmark} className="w-6" />;

export const metadata: Metadata = {
  title: "Greek Connect",
  description: "Where greeks come to connect",
};

const varela_round = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-base-100 min-h-screen text-base-content ${varela_round.className}`}
      >
        <AuthProvider>
          <Nav logo={logo1}></Nav>
          {children}
          <Analytics></Analytics>
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
