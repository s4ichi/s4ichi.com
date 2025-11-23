import type { Metadata } from "next";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { openGraph, twitter } from "components/metadata";
import { RssIcon } from "@heroicons/react/24/solid";

const title = "Blog";
const description = "List of pages where I have written down tech, thoughts, etc";

export const metadata: Metadata = {
  title,
  description,
  openGraph: openGraph(title, description, "website"),
  twitter: twitter(title, description),
};

export default function BlogList() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <h1 className="font-bold text-3xl font-sans">Blog</h1>
        <a
          href="/blog/feed.xml"
          className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition"
          aria-label="RSS feed"
          title="RSS feed"
        >
          <span className="sr-only">RSS feed</span>
          <RssIcon className="h-6 w-6" />
        </a>
      </div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((blog) => (
          <Link key={blog.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${blog.slug}`}>
            <div className="w-full flex flex-col">
              <b>{blog.title}</b>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-sm text-slate-600">
                <time dateTime={blog.publishedAt}>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
