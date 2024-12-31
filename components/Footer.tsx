import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About TechBlog</h3>
            <p className="text-muted-foreground">
              Your go-to source for the latest in technology, development, and digital innovation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/categories" className="text-muted-foreground hover:text-primary">Categories</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/categories/web-dev" className="text-muted-foreground hover:text-primary">Web Development</Link></li>
              <li><Link href="/categories/mobile-dev" className="text-muted-foreground hover:text-primary">Mobile Development</Link></li>
              <li><Link href="/categories/ai-ml" className="text-muted-foreground hover:text-primary">AI & Machine Learning</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                contact@techblog.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 TechBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}