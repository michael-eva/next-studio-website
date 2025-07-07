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
  title: "Extensa - Custom Software That Works the Way You Do",
  description: "We help established businesses unlock productivity by customising their existing software to fit their exact processes—eliminating double handling, reducing admin, and enabling teams to focus on meaningful work.",
  openGraph: {
    title: "Extensa - Custom Software for Established Businesses",
    description: "Eliminate admin headaches and streamline your business with custom software solutions designed for your exact workflows. Perth-based team serving businesses worldwide.",
    images: ["https://www.extensa.studio/extensa-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extensa - Custom Software That Works the Way You Do",
    description: "Streamline your business processes with custom software solutions. Workflow automation, integrations, and ongoing support.",
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
