/* eslint-disable prefer-const */
import { Container } from '@mantine/core';
import BlogDetails from 'components/Blog/BlogDetails';
import { Layout } from 'components/Layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Article } from 'types/merchSection';

const articleData: Article = {
  id: 1,
  attributes: {
    title: 'Introduction to React',
    category: 'Web Development',
    summary:
      'Learn the fundamentals of React, a popular JavaScript library for building user interfaces.',
    isFeatured: true,
    timeStamp: '2023-05-18T14:30:00.000Z',
    content: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'React is a JavaScript library for building user interfaces. It was developed and is maintained by Facebook.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        children: [
          {
            text: 'Core Concepts',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'React is based on the concept of reusable components. Components are like building blocks that can be combined to create complex user interfaces.',
            type: 'text',
          },
        ],
      },
      // Add more content blocks as needed
    ],
    slug: 'introduction-to-react',
    createdAt: '2023-05-15T08:00:00.000Z',
    updatedAt: '2023-05-16T12:00:00.000Z',
    publishedAt: '2023-05-17T00:00:00.000Z',
    popular: true,
    thumbnail: {
      data: {
        id: 1,
        attributes: {
          name: 'react-logo.png',
          alternativeText: null,
          caption: null,
          width: 200,
          height: 200,
          formats: {
            small: {
              ext: '.png',
              url: 'https://example.com/images/small/react-logo.png',
              hash: 'small_hash',
              mime: 'image/png',
              name: 'small_react-logo.png',
              path: null,
              size: 10000,
              width: 100,
              height: 100,
              provider_metadata: {
                public_id: 'small_public_id',
                resource_type: 'image',
              },
            },
            medium: {
              ext: '.png',
              url: 'https://example.com/images/medium/react-logo.png',
              hash: 'medium_hash',
              mime: 'image/png',
              name: 'medium_react-logo.png',
              path: null,
              size: 20000,
              width: 150,
              height: 150,
              provider_metadata: {
                public_id: 'medium_public_id',
                resource_type: 'image',
              },
            },
            thumbnail: {
              ext: '.png',
              url: 'https://example.com/images/thumbnail/react-logo.png',
              hash: 'thumbnail_hash',
              mime: 'image/png',
              name: 'thumbnail_react-logo.png',
              path: null,
              size: 5000,
              width: 80,
              height: 80,
              provider_metadata: {
                public_id: 'thumbnail_public_id',
                resource_type: 'image',
              },
            },
          },
          hash: 'main_hash',
          ext: '.png',
          mime: 'image/png',
          size: 30000,
          url: 'https://example.com/images/react-logo.png',
          previewUrl: null,
          provider: 'cloudinary',
          provider_metadata: {
            public_id: 'main_public_id',
            resource_type: 'image',
          },
          createdAt: '2023-05-10T08:00:00.000Z',
          updatedAt: '2023-05-10T08:00:00.000Z',
        },
      },
    },
    author: {
      data: {
        id: 1,
        attributes: {
          name: 'Jane Smith',
          occupation: 'Web Developer',
          createdAt: '2023-04-01T00:00:00.000Z',
          updatedAt: '2023-04-01T00:00:00.000Z',
          publishedAt: '2023-04-01T00:00:00.000Z',
          profileUrl: 'https://example.com/authors/jane-smith',
        },
      },
    },
    featuredImage: {
      data: {
        id: 2,
        attributes: {
          name: 'react-code.png',
          alternativeText: null,
          caption: 'React code example',
          width: 800,
          height: 400,
          formats: {
            small: {
              ext: '.png',
              url: 'https://example.com/images/small/react-code.png',
              hash: 'small_hash',
              mime: 'image/png',
              name: 'small_react-code.png',
              path: null,
              size: 20000,
              width: 400,
              height: 200,
              provider_metadata: {
                public_id: 'small_public_id',
                resource_type: 'image',
              },
            },
            medium: {
              ext: '.png',
              url: 'https://example.com/images/medium/react-code.png',
              hash: 'medium_hash',
              mime: 'image/png',
              name: 'medium_react-code.png',
              path: null,
              size: 40000,
              width: 600,
              height: 300,
              provider_metadata: {
                public_id: 'medium_public_id',
                resource_type: 'image',
              },
            },
            thumbnail: {
              ext: '.png',
              url: 'https://example.com/images/thumbnail/react-code.png',
              hash: 'thumbnail_hash',
              mime: 'image/png',
              name: 'thumbnail_react-code.png',
              path: null,
              size: 10000,
              width: 200,
              height: 100,
              provider_metadata: {
                public_id: 'thumbnail_public_id',
                resource_type: 'image',
              },
            },
          },
          hash: 'main_hash',
          ext: '.png',
          mime: 'image/png',
          size: 60000,
          url: 'https://example.com/images/react-code.png',
          previewUrl: null,
          provider: 'cloudinary',
          provider_metadata: {
            public_id: 'main_public_id',
            resource_type: 'image',
          },
          createdAt: '2023-05-10T08:00:00.000Z',
          updatedAt: '2023-05-10T08:00:00.000Z',
        },
      },
    },
  },
};
type ArticleProps = {
  article: Article[];
};
const BlogInformation: React.FC<ArticleProps> = ({ article }) => {
  if (article.length === 0) return null;
  const singleBlogPost = article[0];

  return (
    <Layout pageTitle="Blog Details">
      <Container size="md">
        <BlogDetails singleBlogPost={singleBlogPost} />
      </Container>
    </Layout>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const articleDataSource = [articleData];

  const paths = articleDataSource?.map((item) => ({
    params: { slug: item?.attributes?.slug?.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async () => {
  return {
    props: { article: articleData as unknown as Article[] },
  };
};

export default BlogInformation;
