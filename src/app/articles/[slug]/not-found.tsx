import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
        <p className="mb-8 text-xl text-white/60">Article not found</p>
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition-all hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          Back to articles
        </Link>
      </div>
    </main>
  );
}
