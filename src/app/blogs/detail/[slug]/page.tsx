import { getAllBlogs } from "@/libs/markdown";
import React from "react";

export async function generateStaticParams() {
  const emojis = getAllBlogs();

  return emojis.map((p) => ({ slug: p?.slug }));
}

export default function page() {
  return <div>page</div>;
}
