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
  title: "Practical Software & AI for Business Operations | Extensa",
  description:
    "Extensa designs and implements practical software — often with AI — that fits into existing business systems and workflows. Focused on reducing friction, not forcing change.",

  keywords:
    "business software, AI applications, workflow tools, operational software, AI-assisted workflows, system integration, internal tools, Perth software",

  openGraph: {
    title: "Software That Fits How Your Business Works | Extensa",
    description:
      "We build practical tools — often with AI — that sit alongside existing systems to reduce friction and improve how work gets done.",
    images: ["https://www.extensa.studio/extensa-logo.png"],
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Software That Fits How Your Business Works | Extensa",
    description:
      "Practical applications with AI built in — designed to remove friction, not add complexity.",
    images: ["https://www.extensa.studio/extensa-logo.png"],
  },

  alternates: {
    canonical: "https://www.extensa.studio",
  },
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
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Extensa",
            "description": "AI automation and web development services for Perth SMBs. Specializing in chatbots, document processing, workflow automation, and custom web applications.",
            "url": "https://www.extensa.studio",
            "telephone": "",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Perth",
              "addressRegion": "WA",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -31.9505,
              "longitude": 115.8605
            },
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            },
            "priceRange": "$$",
            "serviceType": ["AI Automation", "Web Development", "Custom Software Development", "Chatbot Development", "Workflow Automation"],
            "openingHours": "Mo-Fr 09:00-17:00",
            "sameAs": []
          })
        }}
      />
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Automation & Web Development",
            "provider": {
              "@type": "Organization",
              "name": "Extensa"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Automation and Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Customer Service Automation",
                    "description": "AI-powered chatbots and automated email responses for 24/7 customer support"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Document & Data Processing",
                    "description": "Automated invoice processing, data entry, and document extraction with AI"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Workflow Automation & Integration",
                    "description": "Connect tools and automate repetitive workflows with API integrations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Web Applications",
                    "description": "Tailored SaaS applications, customer portals, and internal dashboards"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Website Development",
                    "description": "SEO-optimized, responsive websites for growing businesses"
                  }
                }
              ]
            }
          })
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
