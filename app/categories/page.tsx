import { Card } from '@/components/ui/card';
import { Code2, Smartphone, Brain, Cloud, Shield, GitBranch, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';

 interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}
 const categories = [
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




export default function CategoriesPage() {

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
            <h1 className="text-5xl font-bold mb-6">Explore Categories</h1>
            <p className="text-xl text-muted-foreground">
              Discover in-depth articles and tutorials across various technology domains
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryPosts = blogPosts.filter(post => 
                post.category.toLowerCase() === category.name.toLowerCase()
              );

              return (
                <Card key={category.id} className="group hover:shadow-lg transition-all overflow-hidden">
                  <Link href={`/categories/${category.id}`}>
                    <div className="p-6">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="text-sm text-muted-foreground">
                        {categoryPosts.length} articles
                      </div>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}