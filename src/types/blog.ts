export interface Blog {
  title: string;
  pageDescription?: string;
  date: string;
  pageKeywords: string[];
  author: string;
  profession: string;
  authorAvatar?: string;
  category?: string;
  thumbnail?: string;
  contentDescription: string;
  tags?: string[];
  cover?: string;
  body: string;
}
