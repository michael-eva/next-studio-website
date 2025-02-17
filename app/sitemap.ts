import { MetadataRoute } from "next";

async function fetchDynamicRoutes() {
  // For now, return an empty array
  // You can implement this to fetch dynamic routes from your data source
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.extensa.studio";

  // Define static pages
  const staticPages = ["/", "/about", "/contact"];

  // Fetch dynamic routes
  const dynamicRoutes = await fetchDynamicRoutes();

  // Combine and format all routes
  const routes = [...staticPages, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return routes;
}
