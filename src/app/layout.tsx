import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import PrimaryLayout from "@/components/common/layout/primary-layout";

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
      <body className={`${outfit.variable} antialiased`}>
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}
