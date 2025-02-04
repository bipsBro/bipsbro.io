interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
}

export default function BlogCard({
  author,
  date,
  excerpt,
  tags,
  title,
}: BlogCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
      </div>
      <div className="p-6 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {author} • {date}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <div
                key={`${t}-${i}`}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
