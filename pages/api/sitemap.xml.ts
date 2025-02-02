import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Define your base URL
  const siteUrl = "https://berita-sederhana.vercel.app"; // Change this to your domain

  // Static pages
  const staticPages = [
    "",
    "/about",
  ];

  // Fetch your dynamic posts from Google Sheets (or database)
  const postsRes = await fetch(
    "https://script.google.com/macros/s/AKfycbybM6iANyP0BZVeFFoI3-ANWjzi5ci9khI-bDQFWmSnuRboGf1q1Z4BKCXpQtrz92_d/exec",
    { cache: "no-store" }
  );
  const posts = await postsRes.json();

  // Generate URLs
  const urls = [
    ...staticPages.map((page) => `${siteUrl}${page}`),
    ...posts.map((post: { id: string }) => `${siteUrl}/posts/${post.id}`),
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  // Set response headers
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
