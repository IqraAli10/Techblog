'use client';

import { Comment } from '@/lib/types';
import { Card } from '@/components/ui/card';

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Card key={comment.id} className="p-4">
          <div className="flex items-start gap-4">
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{comment.name}</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(comment.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-muted-foreground">{comment.content}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}