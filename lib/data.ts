import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    content: `The landscape of web development is constantly evolving, bringing new possibilities and challenges for developers worldwide. From WebAssembly to Edge Computing, the tools and technologies we use are becoming more sophisticated and powerful.

As we look to the future, several key trends are emerging that will shape how we build web applications:

1. AI-Powered Development Tools
The integration of AI into development workflows is revolutionizing how we write and debug code. Automated testing, code completion, and even entire component generation are becoming increasingly sophisticated.

2. Edge Computing
The shift towards edge computing is changing how we think about application architecture. By processing data closer to where it's needed, we can create faster, more responsive applications.

3. WebAssembly
WebAssembly is opening new possibilities for web applications, allowing developers to write high-performance code in languages like Rust and C++ that can run in the browser.`,
    category: 'Web Development',
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600',
    date: '2024-03-21',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    }
  },
  {
    id: '2',
    title: 'Mobile App Development in 2024',
    excerpt: 'Latest trends and best practices in mobile app development.',
    content: `Mobile app development continues to evolve rapidly, with new frameworks and technologies emerging regularly. Here's what's shaping the mobile development landscape in 2024.`,
    category: 'Mobile Development',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600',
    date: '2024-03-20',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
    }
  },
  {
    id: '3',
    title: 'Machine Learning Fundamentals',
    excerpt: 'A comprehensive guide to getting started with machine learning.',
    content: `Understanding machine learning fundamentals is crucial for any developer looking to enter the AI field. This guide covers the essential concepts and practical applications.`,
    category: 'AI & Machine Learning',
    coverImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1600',
    date: '2024-03-19',
    author: {
      name: 'Maria Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
    }
  },
  {
    id: '4',
    title: 'Cloud Computing Essentials',
    excerpt: 'Everything you need to know about modern cloud architecture.',
    content: `Cloud computing has transformed how we build and deploy applications. Learn about the essential concepts and best practices for cloud-native development.`,
    category: 'Cloud Computing',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
    date: '2024-03-18',
    author: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
    }
  },
  {
    id: '5',
    title: 'Cybersecurity Best Practices',
    excerpt: 'Protecting your applications from modern security threats.',
    content: `Security is paramount in modern application development. Learn about the latest security threats and how to protect your applications effectively.`,
    category: 'Security',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600',
    date: '2024-03-17',
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    }
  },
  {
    id: '6',
    title: 'DevOps Pipeline Automation',
    excerpt: 'Streamline your development workflow with automated pipelines.',
    content: `Automation is key to modern software development. Discover how to build efficient DevOps pipelines that streamline your development workflow.`,
    category: 'DevOps',
    coverImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1600',
    date: '2024-03-16',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
    }
  }
];