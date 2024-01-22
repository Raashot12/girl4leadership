/* eslint-disable prefer-const */
import { Container } from '@mantine/core';
import BlogDetails from 'components/Blog/BlogDetails';
import { Layout } from 'components/Layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Article } from 'types/merchSection';

type ArticleProps = {
  article: Article[];
};
const BlogInformation: React.FC<ArticleProps> = ({ article }) => {
  if (article.length === 0) return null;
  const singleBlogPost = article[0];
  console.log(article);
  return (
    <Layout pageTitle="Blog Details">
      <Container size="md">
        <BlogDetails singleBlogPost={singleBlogPost} />
      </Container>
    </Layout>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL}/api/blogs?populate=*`
  );
  const article = await res.json();
  const articleData = article?.data as Article[];

  const paths = articleData?.map((item) => ({
    params: { slug: item?.attributes?.slug?.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL}/api/blogs?populate=*&filters[slug][$eq]=${params?.slug}`
  );
  const article = await res.json();
  return {
    props: { article: article?.data as Article[] },
  };
};

export default BlogInformation;
