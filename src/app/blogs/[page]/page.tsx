import { generateBlogPageParams, getPaginatedPosts } from "@/libs/markdown";
import { Pagination } from "@/components/Pagination";
import { notFound } from "next/navigation";
import { constant } from "@/constant";

type Props = {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate static params for all blog pages
export async function generateStaticParams() {
  return generateBlogPageParams();
}

export default async function Search({ params }: Props) {
  const { page } = await params;
  const currentPage = Number(page) || 1;
  const { posts, totalPages } = getPaginatedPosts(
    currentPage,
    constant.perPage
  );
  if (totalPages < currentPage) {
    return notFound();
  }
  console.log(posts);
  return (
    <div className="mt-4">
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
