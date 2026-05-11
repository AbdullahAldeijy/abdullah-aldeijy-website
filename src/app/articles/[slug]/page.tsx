import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { ReadingProgress } from "@/components/sections/reading-progress";

const mdxComponents = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <span className="my-8 block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ""}
        className="w-full rounded-2xl border border-white/10 shadow-2xl"
      />
      {alt && (
        <span className="mt-3 block text-center text-xs italic text-white/40">
          {alt}
        </span>
      )}
    </span>
  ),
};

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Abdullah Aldeijy`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.cover],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-black pb-24 pt-32">
      <ReadingProgress />
      <article className="mx-auto max-w-3xl px-6">
        <Link
          href="/articles"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to all articles
        </Link>

        <div className="mb-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          {article.title}
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-white/60 md:text-xl">
          {article.description}
        </p>

        <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-white/10 pb-8 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <User size={14} />
            {article.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            {new Date(article.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} />
            {article.readingTime}
          </span>
        </div>

        <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-3xl
            prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-2xl
            prose-p:leading-relaxed prose-p:text-white/70
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:rounded prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-blue-300 prose-code:before:content-none prose-code:after:content-none
            prose-pre:border prose-pre:border-white/10 prose-pre:bg-zinc-950
            prose-blockquote:border-l-blue-500 prose-blockquote:text-white/70
            prose-ul:text-white/70 prose-ol:text-white/70
            prose-li:my-1
            prose-table:text-white/70
            prose-th:border-white/20 prose-th:text-white
            prose-td:border-white/10
            prose-hr:border-white/10"
        >
          <MDXRemote
            source={article.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  rehypeHighlight,
                ],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}
