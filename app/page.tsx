import { HeroSection } from '@/components/HeroSection';
import { BlogCard } from '@/components/BlogCard';
import { Newsletter } from '@/components/Newsletter';
import { blogPosts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const latestPosts = blogPosts.slice(0, 6);

  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Button variant="outline" asChild>
            <Link href="/categories">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <Newsletter />
    </div>
  );
}