/* eslint-disable prefer-const */
import { Container } from '@mantine/core';
// import BlogDetails from 'components/Blog/BlogDetails';
import { Layout } from 'components/Layout/Layout';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Head from 'next/head';
import fs from 'fs';

const BlogInformation = ({ frontmatter, markdown }) => {
  console.log(frontmatter, markdown);
  return (
    <Layout pageTitle="Blog Details">
      <Container size="md">
        {/* <BlogDetails /> */}
        <Head>
          <title>Demo Blog | {frontmatter.title}</title>
        </Head>
        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
        <hr />
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Container>
    </Layout>
  );
};

export default BlogInformation;

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./src/posts/${slug}.md`, 'utf8'));
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}
export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./src/posts');

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf('.'));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
