"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { ArticleMeta } from "@/lib/articles";

export function ArticlesGrid({ articles }: { articles: ArticleMeta[] }) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      {articles.map((article, idx) => (
        <motion.div
          key={article.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <Link
            href={`/articles/${article.slug}`}
            className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:from-white/[0.08] hover:to-white/[0.04]"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={article.cover}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="p-6">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {article.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-2 line-clamp-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                {article.title}
              </h3>

              <p className="mb-4 line-clamp-2 text-sm text-white/60">
                {article.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs text-white/40">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {article.readingTime}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
