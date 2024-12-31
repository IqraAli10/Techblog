'use client';

import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { Comments } from '@/components/Comments';
import { Button } from '@/components/ui/button';

export function BlogPostContent({ post }: { post: BlogPost | null }) {
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <img
            src={post.coverImage}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <hr className="my-8" />
        
        <Comments postId={post.id} />
      </div>
    </article>
  );
}