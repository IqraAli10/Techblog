import { blogPosts } from '@/lib/data';
import { BlogCard } from '@/components/BlogCard';
import { notFound } from 'next/navigation';

import { Code2, Smartphone, Brain, Cloud, Shield, GitBranch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

 interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon ;
  gradient: string;
}

 const categories: Category[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    icon: Code2,
    description: 'Latest in web technologies and frameworks',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mobile-dev',
    name: 'Mobile Development',
    icon: Smartphone,
    description: 'Mobile app development trends and tutorials',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Artificial Intelligence and ML insights',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    icon: Cloud,
    description: 'Cloud technologies and architecture',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    id: 'security',
    name: 'Security',
    icon: Shield,
    description: 'Cybersecurity best practices',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: GitBranch,
    description: 'DevOps practices and tools',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);
  
  if (!category) {
    notFound();
  }

  const categoryPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mx-auto mb-6`}>
              <category.icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">{category.name}</h1>
            <p className="text-xl text-muted-foreground">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl text-muted-foreground">
                No posts found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}