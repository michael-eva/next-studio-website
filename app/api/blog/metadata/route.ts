import { getBlogMetadata, getAllBlogPosts } from "@/app/utils/blog-utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  const metadata = getBlogMetadata(slug);
  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);

  const navigation = {
    prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next:
      currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  };

  return NextResponse.json({ ...metadata, navigation });
}
