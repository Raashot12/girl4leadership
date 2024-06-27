/* eslint-disable prefer-const */
import { Container } from '@mantine/core';
import BlogDetails from 'components/Blog/BlogDetails';
import { Layout } from 'components/Layout/Layout';
import { getAllBlogs, getBlogBySlug } from 'lib/blog';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { BlogIPRops } from 'types/blog';

type BlogProps = {
  blog: BlogIPRops;
};
const BlogInformation: React.FC<BlogProps> = ({ blog }) => {
  return (
    <Layout pageTitle="Blog Details">
      <Container size="md">
        <BlogDetails singleBlogPost={blog} />
      </Container>
    </Layout>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = getAllBlogs();

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = getBlogBySlug(params?.slug as string);

  return { props: { blog } };
};

export default BlogInformation;
