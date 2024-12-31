export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
  postId: string;
  avatar: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}