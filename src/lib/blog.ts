// lib/blogs.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogIPRops } from '../types/blog';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string): BlogIPRops {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    body: content,
  } as BlogIPRops;
}

export function getAllBlogs(): BlogIPRops[] {
  const slugs = getBlogSlugs();
  const blogs = slugs.map((slug) => getBlogBySlug(slug));
  return blogs;
}
