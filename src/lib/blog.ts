// lib/blogs.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogIPRops } from '../types/blog';
import axios from 'axios';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}
export const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://api.airtable.com/v0/app19Sad2e2jD7Cti/Blog',
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`, // Replace with your actual API key
        },
      }
    );

    const { data } = response;
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// export function getBlogBySlug(slug: string): BlogIPRops {
//   const realSlug = slug.replace(/\.md$/, '');
//   const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);
//   return {
//     ...data,
//     body: content,
//     slug: realSlug,
//   } as BlogIPRops;
// }

// export function getAllBlogs(): BlogIPRops[] {
//   const slugs = getBlogSlugs();
//   const blogs = slugs.map((slug) => getBlogBySlug(slug));
//   return blogs;
// }
