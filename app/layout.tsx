import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { auth } from "./api/auth/[...nextauth]/route";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lunch Queen"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth() ;
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
          h-screen
          flex
          flex-col
          `}
      >
        <SpeedInsights />
        <SessionProvider session={session}>{children}</SessionProvider>
        </body>
    </html>
  );
}