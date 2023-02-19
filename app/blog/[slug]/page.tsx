import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";

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

  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/" className="text-center text-sm font-bold uppercase text-blue-700">
            Home
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{blog.title}</h1>
          <time dateTime={blog.date} className="text-sm text-slate-600">
            {format(parseISO(blog.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div className="cl-blog-body" dangerouslySetInnerHTML={{ __html: blog.body.html }} />
      </article>
    </>
  );
}
