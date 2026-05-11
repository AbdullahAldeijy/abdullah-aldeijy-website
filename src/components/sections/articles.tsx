import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { ArticlesGrid } from "./articles-grid";

export function Articles() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section
      id="articles"
      className="relative w-full scroll-mt-20 overflow-hidden px-6 py-16 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs uppercase tracking-widest text-white/70">
              Latest Writing
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-7xl">
            Articles
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-400 md:text-lg">
            Insights on cloud architecture, FinOps, and multi-cloud strategies
            from real-world experience.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="mx-auto max-w-md py-16 text-center">
            <BookOpen size={48} className="mx-auto mb-4 text-white/30" />
            <h3 className="mb-2 text-2xl font-bold text-white">Coming Soon</h3>
            <p className="text-white/50">
              I am preparing in-depth articles on cloud architecture and FinOps.
            </p>
          </div>
        ) : (
          <>
            <ArticlesGrid articles={articles} />

            <div className="text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition-all hover:border-white/30 hover:bg-white/10"
              >
                View all articles
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
