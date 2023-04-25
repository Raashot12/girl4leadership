/* eslint-disable prefer-const */
import { Container } from '@mantine/core';
import BlogDetails from 'components/Blog/BlogDetails';
import { Layout } from 'components/Layout/Layout';
import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import matter from 'gray-matter';
// import fs from 'fs';

const BlogInformation = () => {
  return (
    <Layout pageTitle="Blog Details">
      <Container size="md">
        <BlogDetails />
        {/* <Head>
          <title>Demo Blog | {frontmatter.title}</title>
        </Head>
        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
        <Image
          src={frontmatter.cover}
          alt={frontmatter.title}
          sx={{
            '& .mantine-Image-image': {
              // borderRadius: '50%',
              // height: '65px !important',
              // width: '65px !important',
              marginRight: 'auto !important',
              marginLeft: 'auto !important',
              width: '100%',
            },
          }}
        />
        <ReactMarkdown>{markdown}</ReactMarkdown> */}
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
