import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Discover the Future of
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {' '}Technology
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Deep dive into web development, mobile apps, AI, and more with our expert insights and tutorials.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <Link href="/categories">
                Explore Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}