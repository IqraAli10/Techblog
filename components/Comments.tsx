'use client';

import { useState } from 'react';
import { Comment } from '@/lib/types';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import { SuccessDialog } from './SuccessDialog';

export function Comments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmitComment = (name: string, content: string, avatar: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      content,
      date: new Date().toISOString(),
      postId,
      avatar
    };

    setComments([newComment, ...comments]);
    setShowSuccess(true);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Comments</h3>
      <CommentForm onSubmit={handleSubmitComment} />
      <CommentList comments={comments} />

      <SuccessDialog
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Comment Posted!"
        message="Thank you for sharing your thoughts. Your comment has been added successfully."
      />
    </div>
  );
}