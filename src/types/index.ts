export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  channel: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  views: number;
  createdAt: string;
  duration: string;
}

export interface Category {
  id: string;
  name: string;
}