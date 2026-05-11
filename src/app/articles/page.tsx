import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllArticles, getAllTags } from "@/lib/articles";

export const metadata = {
  title: "Articles | Abdullah Aldeijy",
  description:
    "Insights on cloud architecture, FinOps, and multi-cloud strategies.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#articles"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <header className="mb-16">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-7xl">
            All Articles
          </h1>
          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            {articles.length}{" "}
            {articles.length === 1 ? "article" : "articles"} on cloud
            architecture, FinOps, and engineering practices.
          </p>
        </header>

        {tags.length > 0 && (
          <div className="mb-12 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.05] md:grid-cols-[280px_1fr]"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-[4/3]">
                <Image
                  src={article.cover}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-blue-400 md:text-3xl">
                  {article.title}
                </h2>

                <p className="mb-4 line-clamp-2 text-white/60">
                  {article.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readingTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
