import type { Metadata } from "next";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Greed Zone - Ultimate Gaming Tournament",
  description:
    "Join the Greed Zone, the premier gaming tournament for players worldwide. Compete, win, and earn rewards!",
  keywords: "gaming, tournament, competition, esports, greed zone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` flex min-h-screen justify-center items-center antialiased bg-[#161622] text-white`}
      >
        <main className="w-[500px] ">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
