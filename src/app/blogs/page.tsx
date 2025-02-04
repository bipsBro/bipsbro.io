import { getPaginatedPosts } from "@/libs/markdown";
import { Pagination } from "@/components/Pagination";
import { constant } from "@/constant";

export default async function Search() {
  const { posts, totalPages } = getPaginatedPosts(1, constant.perPage);
  console.log(posts);
  return (
    <div className="mt-4">
      <Pagination currentPage={1} totalPages={totalPages} />
    </div>
  );
}
