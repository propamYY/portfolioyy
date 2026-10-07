import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullstack Developer Portfolio",
  description: "Professional portfolio of a Middle+ Fullstack Developer (React/Next.js & PHP/Laravel)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-light text-dark`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
