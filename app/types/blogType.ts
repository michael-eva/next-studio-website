export interface BlogMetadata {
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  readingTime?: string;
  navigation?: {
    prev: (BlogMetadata & { slug: string }) | null;
    next: (BlogMetadata & { slug: string }) | null;
  };
  image?: string;
}

export interface LayoutProps {
  title: string;
  description: string;
  keywords: string[];
  children: React.ReactNode;
}
