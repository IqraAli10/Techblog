import { Code2, Smartphone, Brain, Cloud, Shield, GitBranch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const categories: Category[] = [
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