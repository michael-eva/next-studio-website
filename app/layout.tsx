import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from './components/Navbar'

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XT57B4WKDY"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XT57B4WKDY');
          `,
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
