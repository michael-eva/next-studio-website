import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Extensa Studio - Turn Your Vision into Reality, Faster",
  description: "Transform your startup idea into a market-ready product in as little as 6 weeks. We're not just developers – we're your technical co-founders who care about your success.",
  openGraph: {
    title: "Extensa Studio - Turn Your Startup Vision into Reality, Faster",
    description: "Transform your startup idea into a market-ready product in as little as 6 weeks. We're your technical co-founders who care about your success.",
    images: ["https://www.extensa.studio/extensa-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extensa Studio - Turn Your Startup Vision into Reality, Faster",
    description: "Transform your startup idea into a market-ready product in as little as 6 weeks.",
    images: ["https://www.extensa.studio/extensa-logo.png"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
