import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CardProvider from "./components/CardProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello",
  description: "My new next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CardProvider>{children}</CardProvider>
      </body>
    </html>
  );
}
