import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";

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
