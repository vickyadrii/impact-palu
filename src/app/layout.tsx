import { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impact Palu",
  description: "Impact Palu is a social entrepreneurship incubator based in Palu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
