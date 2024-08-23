/* eslint-disable prefer-const */
import { Box, Container } from '@mantine/core';
import BlogDetails from 'components/Blog/BlogDetails';
import { fakeData } from 'components/Blog/data';
import { Layout } from 'components/Layout/Layout';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Record,
  useApiServicesAppBlogSingleDataApiQuery,
} from 'state/services/blogsApi';

const BlogInformation: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isError, isLoading } = useApiServicesAppBlogSingleDataApiQuery({
    singleId: slug as string,
  });
  const trendingPost = isLoading ? fakeData?.[0] : data;
  return (
    <Layout pageTitle="Blog Details">
      <Container size="md">
        {isError ? (
          <Box my={50} fz={17} fw={700} sx={{ color: 'red' }} ta={'center'}>
            Oooop! An unexpected error occurred{' '}
          </Box>
        ) : (
          <BlogDetails
            singleBlogPost={trendingPost as Record}
            isLoading={isLoading}
          />
        )}
      </Container>
    </Layout>
  );
};

export default BlogInformation;
