import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { constant } from "@/constant";

const postsContentDirectory = path.join(process.cwd(), "blogs");

export type BlogDataType = {
  slug: string;
  title: string;
  description: string;
  categories: string[];
  tags: string[];
  author: string;
  datePublished: string;
  dateModified: string;
  content: string;
};

export function getBlogData(slug: string): BlogDataType | null {
  const filePath = path.join(postsContentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { birthtime, mtime } = fs.statSync(filePath);
  const { data, content } = matter(fileContents);
  // TODO: should we add draft post
  if (data.draft) return null;

  return {
    slug,
    title: data.title as string,
    description: data.summary as string,
    categories: data.categories as string[],
    tags: data.tags as string[],
    author: data.author as string,
    datePublished: birthtime.toISOString(),
    dateModified: mtime.toISOString(),
    content,
  };
}

export function getAllBlogs() {
  const files = fs.readdirSync(postsContentDirectory);

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return getBlogData(slug);
    })
    .filter((data) => data != null);
}

export const getPaginatedPosts = (
  page: number,
  pageSize: number = 10
): {
  posts: BlogDataType[];
  totalPages: number;
} => {
  const posts = getAllBlogs();
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    posts: posts.slice(startIndex, endIndex),
    totalPages: Math.ceil(posts.length / pageSize),
  };
};

export const generateBlogPageParams = () => {
  const { totalPages } = getPaginatedPosts(1, constant.perPage);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
};
