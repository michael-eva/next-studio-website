import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/extensa-offer/book-rescue',
          '/extensa-offer/payment-success',
          '/extensa-offer/payment-cancelled'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/extensa-offer',
          '/extensa-offer/debug-guide',
          '/extensa-offer/rescue-assessment',
          '/extensa-offer/ai-agent'
        ],
        disallow: [
          '/api/',
          '/extensa-offer/book-rescue',
          '/extensa-offer/payment-success',
          '/extensa-offer/payment-cancelled'
        ],
      },
    ],
    sitemap: 'https://www.extensa.studio/sitemap.xml',
    host: 'https://www.extensa.studio'
  }
}