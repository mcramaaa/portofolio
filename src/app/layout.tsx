import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "M Rama",
  description: "Mochamad Ramadhani Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
