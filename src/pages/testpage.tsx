import fs from 'fs';
import { Box, Container } from '@mantine/core';
import { Layout } from 'components/Layout/Layout';
import TestPageComponent from 'components/TestPageComponent';
import React from 'react';
import matter from 'gray-matter';

export default function TestPage() {
  return (
    <Layout pageTitle="TestPage">
      <Box mt={90}>
        <Container size="xl">
          <TestPageComponent />
        </Container>
      </Box>
    </Layout>
  );
}
export async function getStaticProps() {
  // List of files in posts folder
  const files = fs.readdirSync('./src/posts');
  // Get the front matter and slug (the filename without .md) of all files
  const blogs = files.map((filename) => {
    const file = fs.readFileSync(`./src/posts/${filename}`, 'utf8');
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.')),
    };
  });
  return {
    props: {
      blogs,
    },
  };
}
