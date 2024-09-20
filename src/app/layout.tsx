import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const patrickPatrick_Hand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chau Nong",
  description:
    "Nong Ngoc Chau is a dedicated software engineer specializing in creating user-friendly, inclusive web applications and digital experiences with a focus on accessibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={patrickPatrick_Hand.className}>{children}</body>
    </html>
  );
}
