'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Pen } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Pen className="h-6 w-6" />
            <span className="text-2xl font-bold">TechBlog</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/categories" className="hover:text-primary">Categories</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}