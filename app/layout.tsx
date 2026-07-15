import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";

const font = Fustat();

export const metadata: Metadata = {
  title: "Poopcord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
