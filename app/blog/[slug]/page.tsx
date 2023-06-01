import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

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
  const { title } = blog;

  return {
    title,
  };
}

export default async function Blog({ params }: BlogPageProps) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return notFound();
  }

  const MDXComponent = getMDXComponent(blog.body.code);

  return (
    <section>
      <Link key={blog.slug} href={`/blog/${blog.slug}`}>
        <div className="max-w-[750px]">
          <h1 className="font-bold text-3xl font-sans">{blog.title}</h1>
        </div>
      </Link>
      <time dateTime={blog.date} className="text-sm text-slate-600">
        {format(parseISO(blog.date), "LLLL d, yyyy")}
      </time>
      <article className="prose max-w-[750px] prose-quoteless prose-neutral dark:prose-invert">
        <MDXComponent />
      </article>
    </section>
  );
}
