import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI App Crisis Management",
    "description": "Emergency protocols to rescue failing AI-generated apps. Professional crisis management system that turns disasters into demo-ready successes.",
    "provider": {
      "@type": "Organization",
      "name": "Extensa",
      "url": "https://extensa.dev"
    },
    "serviceType": "AI App Development Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI App Recovery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crisis Management System",
            "description": "Free emergency protocol system to rescue failing AI projects"
          },
          "price": "0",
          "priceCurrency": "AUD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Recovery Agent",
            "description": "24/7 AI assistant trained on crisis management protocols"
          },
          "price": "197",
          "priceCurrency": "AUD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Project Rescue Assessment",
            "description": "Professional codebase analysis and strategic recovery plan"
          },
          "price": "2000",
          "priceCurrency": "AUD"
        }
      ]
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}