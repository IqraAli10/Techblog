import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BlogPost } from '@/lib/types';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={600}
            height={340}
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-sm text-muted-foreground">{post.author.name}</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">{post.title}</h3>
          <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}