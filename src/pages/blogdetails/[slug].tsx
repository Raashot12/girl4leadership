import { Container } from '@mantine/core';
import BlogDetails from 'components/Blog/BlogDetails';
import { Layout } from 'components/Layout/Layout';
import React from 'react';

const BlogInformation = () => {
  return (
    <Layout pageTitle="Blog Details">
      <Container size="md">
        <BlogDetails />
      </Container>
    </Layout>
  );
};

export default BlogInformation;
