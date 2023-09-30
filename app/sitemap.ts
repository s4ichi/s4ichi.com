import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((blog) => ({
    url: `https://s4ichi.com/blog/${blog.slug}`,
    lastModified: blog.date,
  }));

  const routes = ['', '/blog', '/about'].map(
    (route) => ({
      url: `https://s4ichi.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
