import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = "https://www.extensa.studio";

  // Fetch dynamic routes from your data source, e.g., a database or CMS
  const dynamicRoutes = await fetchDynamicRoutes();

  // Define static pages
  const staticPages = ["/", "/about", "/contact"];

  // Combine static and dynamic routes
  const allPages = [...staticPages, ...dynamicRoutes];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map((page) => {
        return `
          <url>
            <loc>${baseUrl}${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}

// Example function to fetch dynamic routes
async function fetchDynamicRoutes() {
  // Replace this with your logic to fetch dynamic routes
  // For example, fetching from a database or CMS
  return ["/blog/post-1", "/blog/post-2"];
}
