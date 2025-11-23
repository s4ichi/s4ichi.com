import { allBlogs } from "contentlayer/generated";
import { defaultDescription, defaultTitle } from "components/metadata";

export const dynamic = "force-static";

const siteUrl = "https://s4ichi.com";

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const buildRss = () => {
  const sorted = [...allBlogs].sort((a, b) =>
    new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
  );
  const latestDate = sorted.length ? new Date(sorted[0].publishedAt) : new Date();

  const items = sorted
    .map((post) => {
      const link = `${siteUrl}${post.url}`;
      const publishedAt = new Date(post.publishedAt).toUTCString();
      return `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${publishedAt}</pubDate>
        <description>${escapeXml(post.summary)}</description>
      </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escapeXml(defaultTitle)}</title>
      <link>${siteUrl}</link>
      <description>${escapeXml(defaultDescription)}</description>
      <language>en</language>
      <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
      <lastBuildDate>${latestDate.toUTCString()}</lastBuildDate>
      <generator>Next.js Contentlayer RSS</generator>
      ${items}
    </channel>
  </rss>`;
};

export async function GET() {
  const rss = buildRss();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
