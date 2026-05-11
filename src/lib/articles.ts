import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  cover: string;
  readingTime: string;
  published: boolean;
}

export interface Article extends ArticleMeta {
  content: string;
}

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(ARTICLES_DIR, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author || "Abdullah Aldeijy",
        tags: data.tags || [],
        cover: data.cover || "/images/articles/default.jpg",
        readingTime: readingTime(content).text,
        published: data.published !== false,
      };
    })
    .filter((article) => article.published)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author || "Abdullah Aldeijy",
    tags: data.tags || [],
    cover: data.cover || "/images/articles/default.jpg",
    readingTime: readingTime(content).text,
    published: data.published !== false,
    content,
  };
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllArticles().forEach((article) => {
    article.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
