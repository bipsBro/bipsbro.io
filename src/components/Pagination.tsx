import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages == 1) return null;
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <button className="px-2 py-1 rounded ring-1 ring-slate-900/10 min-w-8">
          <Link href={`/blogs/${currentPage - 1}`}>Previous</Link>
        </button>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          className="px-2 py-1 rounded ring-1 ring-slate-900/10 min-w-8"
          key={page}
        >
          <Link href={`/blogs/${page}`}>{page}</Link>
        </button>
      ))}

      {currentPage < totalPages && (
        <button className="px-2 py-1 rounded ring-1 ring-slate-900/10 min-w-8">
          <Link href={`/blogs/${currentPage + 1}`}>Next</Link>
        </button>
      )}
    </div>
  );
}
