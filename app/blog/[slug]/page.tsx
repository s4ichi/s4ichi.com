import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { openGraph, twitter } from "components/metadata";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata | undefined> {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return;
  }

  return {
    title: blog.title,
    description: blog.summary,
    openGraph: openGraph(blog.title, blog.summary, "article", `https://s4ichi.com${blog.url}`, blog.publishedAt),
    twitter: twitter(blog.title, blog.summary),
  };
}

export default async function Blog({ params }: BlogPageProps) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return notFound();
  }

  const MDXComponent = getMDXComponent(blog.body.code);
  const publishedAt = parseISO(blog.publishedAt);

  return (
    <section>
      <Link key={blog.slug} href={`/blog/${blog.slug}`}>
        <div className="max-w-[770px]">
          <h1 className="font-bold text-3xl font-sans">{blog.title}</h1>
        </div>
      </Link>
      <div className="text-sm text-slate-600 flex items-baseline space-x-2 mb-2">
        <time dateTime={blog.publishedAt}>{format(publishedAt, "LLLL d, yyyy")}</time>
      </div>
      <article className="prose max-w-[770px] prose-quoteless prose-neutral dark:prose-invert">
        <MDXComponent />
      </article>
    </section>
  );
}
