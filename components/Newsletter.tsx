'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { SuccessDialog } from './SuccessDialog';
import { subscribeToNewsletter } from '@/lib/email';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await subscribeToNewsletter({ email });
      if (success) {
        setShowSuccess(true);
        setEmail('');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Stay updated with our latest tech insights and tutorials. Get them delivered directly to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </section>

      <SuccessDialog
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Successfully Subscribed!"
        message="Thank you for subscribing to our newsletter. You'll receive our latest updates directly in your inbox."
      />
    </>
  );
}