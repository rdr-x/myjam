import "../app/globals.css";
import type { Metadata } from "next";
import { ToastRender } from "@/components/Toast";
import JotaiProvider from "@/modules/JotaiProvider";
import Navbar from "@/modules/NavBar";
import { Providers } from "./providers";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "🍉 MyJam",
  description: "MyJam is a decentralized live-streaming platform that brings musicians and listeners together, empowering artists to create connections with audiences",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>
          <>
            <ToastRender />
            <Navbar />
            <Providers>
              {children}
            </Providers>
          </>
        </JotaiProvider>
      </body>
    </html>
  );
}
