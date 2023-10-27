import Link from "next/link";
import type { Metadata } from "next";
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { openGraph, twitter } from "components/metadata";

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
      <h1 className="font-bold text-3xl font-sans mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((blog) => (
          <Link key={blog.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${blog.slug}`}>
            <div className="w-full flex flex-col">
              <b>{blog.title}</b>
              <time dateTime={blog.date} className="text-sm text-slate-600">
                <p>{format(parseISO(blog.date), "LLLL d, yyyy")}</p>
              </time>
            </div>
          </Link>
        ))}
    </section>
  );
}
