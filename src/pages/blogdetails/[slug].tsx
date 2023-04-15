import { Box } from '@mantine/core';
import DisqusComments from 'components/Discussion/DisqusComments';
import { Layout } from 'components/Layout/Layout';
import React from 'react';

const BlogDetails = () => {
  return (
    <Layout pageTitle="">
      <Box mt={77}>
        <Box>Hello</Box>
        <DisqusComments />
      </Box>
    </Layout>
  );
};

export default BlogDetails;
