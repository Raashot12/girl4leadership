/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { Box, Container, useMantineColorScheme } from '@mantine/core';
import DisqusComments from 'components/Discussion/DisqusComments';
import React from 'react';

const BgColor = styled(Box as any)`
  & #layout {
    display: none;
  }
`;
const BlogDetails = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container size={'xl'}>
      <Box mt={90}>
        <Box>Hello</Box>
        <Container size={'md'}>
          <BgColor className="article_thread__x9pVh">
            <DisqusComments />
          </BgColor>
        </Container>
      </Box>
    </Container>
  );
};

export default BlogDetails;
