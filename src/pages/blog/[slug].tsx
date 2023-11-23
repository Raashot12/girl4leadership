/* eslint-disable prefer-const */
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

// export async function getStaticProps({ params: { slug } }) {
//   const fileContent = matter(
//     fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8')
//   );
//   let frontmatter = fileContent.data;
//   const markdown = fileContent.content;

//   return {
//     props: { frontmatter, markdown },
//   };
// }
// export async function getStaticPaths() {
//   const filesInBlogs = fs.readdirSync('./content/blogs');
//   const paths = filesInBlogs.map((file) => {
//     const filename = file.slice(0, file.indexOf('.'));
//     return { params: { slug: filename } };
//   });

//   return {
//     paths,
//     fallback: false, // This shows a 404 page if the page is not found
//   };
// }
