import type { Metadata } from "next";
import { Alice, Lora } from "next/font/google";
import { Body } from "@/components";
import "@/styles/globals.css";
import "@/styles/shake.css";

const alice = Alice({
  weight: ["400"],
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
});

const lora = Lora({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velum",
  description: "A gallery for mindful people with taste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body className={`${lora.variable} ${alice.variable} antialiased`}>
        {children}
      </Body>
    </html>
  );
}
