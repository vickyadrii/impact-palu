import { Outfit } from "next/font/google";
import PrimaryLayout from "@/components/common/layout/primary-layout";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

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
