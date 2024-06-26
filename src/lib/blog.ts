// lib/blogs.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Blog } from '../types/blog';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string): Blog {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    body: content,
  } as Blog;
}

export function getAllBlogs(): Blog[] {
  const slugs = getBlogSlugs();
  const blogs = slugs.map((slug) => getBlogBySlug(slug));
  return blogs;
}
