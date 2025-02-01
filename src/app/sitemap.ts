import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch your posts from Google Sheets (same as you did before)
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbybM6iANyP0BZVeFFoI3-ANWjzi5ci9khI-bDQFWmSnuRboGf1q1Z4BKCXpQtrz92_d/exec",
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch sitemap data");
    return [];
  }

  const posts = await res.json();

  // Define your website URL
  const siteUrl = "http://localhost:3000";

  // Generate sitemap entries
  interface Post {
    id: string;
    // Add other properties of your post object if needed
  }

  const sitemapEntries: MetadataRoute.Sitemap = posts.map((post: Post) => ({
    url: `${siteUrl}/posts/${post.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Add the homepage
  sitemapEntries.push({
    url: siteUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 1.0,
  });

  return sitemapEntries;
}
