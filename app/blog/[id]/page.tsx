import { blogPosts } from '@/lib/data';
import { BlogPostContent } from '@/components/BlogPostContent';

// This function tells Next.js which routes to pre-render
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return <BlogPostContent post={null} />;
  }

  return <BlogPostContent post={post} />;
}