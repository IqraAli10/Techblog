'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { generateAvatarUrl } from '@/lib/utils';

interface CommentFormProps {
  onSubmit: (name: string, content: string, avatar: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const avatar = generateAvatarUrl(name);
    onSubmit(name, content, avatar);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="max-w-md"
        />
      </div>
      <div>
        <Textarea
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="min-h-[100px]"
        />
      </div>
      <Button type="submit">Post Comment</Button>
    </form>
  );
}