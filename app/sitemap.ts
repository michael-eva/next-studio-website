import { MetadataRoute } from "next";

async function fetchDynamicRoutes() {
  // For now, return an empty array
  // You can implement this to fetch dynamic routes from your data source
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.extensa.studio";

  // Define static pages
  const staticPages = [
    "/", 
    "/about", 
    "/contact",
    "/extensa-offer",
    "/extensa-offer/debug-guide",
    "/extensa-offer/rescue-assessment",
    "/extensa-offer/ai-agent"
  ];

  // Fetch dynamic routes
  const dynamicRoutes = await fetchDynamicRoutes();

  // Combine and format all routes with specific priorities
  const routes = [
    // High priority pages
    {
      url: `${baseUrl}/extensa-offer`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/extensa-offer/debug-guide`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/extensa-offer/rescue-assessment`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Other pages
    ...["/", "/about", "/contact", "/extensa-offer/ai-agent", ...dynamicRoutes].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  ];

  return routes;
}
