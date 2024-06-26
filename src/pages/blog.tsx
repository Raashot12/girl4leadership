/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  TextInput,
  Text,
} from '@mantine/core';
import { container, child } from 'components/AboutUs/AboutUs';
import { Layout } from 'components/Layout/Layout';
import Link from 'next/link';
import React, { useState } from 'react';
import { IconArrowForward, IconSend } from '@tabler/icons';
import Blog from 'components/Blog/Blog';
import { motion } from 'framer-motion';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import axios, { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { GetStaticProps } from 'next';
import { Article } from 'types/merchSection';
import { getAllBlogs } from 'lib/blog';
import { BlogIPRops } from 'types/blog';

interface BlogPageProps {
  blogs: BlogIPRops[];
}
const text = 'Our Blog';
const BlogPage: React.FC<BlogPageProps> = ({ blogs }) => {
  const addInviteSchema = z.object({
    emailAddress: z
      .string()
      .email({ message: 'Please enter valid email address' }),
  });
  const [isSubmitting, setIsubmitting] = useState(false);
  const form = useForm({
    validate: zodResolver(addInviteSchema),
    initialValues: {
      emailAddress: '',
    },
  });
  const handleSubmit = async (values: { emailAddress: string }) => {
    const baseId = 'appYi5UJUgW3d1yGc';
    const tableName = 'Newsletter';
    setIsubmitting(true);
    const endpoint = `https://api.airtable.com/v0/${baseId}/${tableName}`;
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      'Content-Type': 'application/json',
    };
    const serializedData = {
      Email: values.emailAddress,
    };
    try {
      const response = await axios.post(
        endpoint,
        { fields: serializedData },
        { headers }
      );

      if (response.status === 200) {
        Swal.fire(
          'Submitted Successfully!',
          'You clicked the button!',
          'success'
        );
        setIsubmitting(false);
        form.reset();
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      Swal.fire(`${axiosError.message}`, 'You clicked the button!', 'error');
      setIsubmitting(false);
    }
  };

  return (
    <Layout pageTitle="Blog">
      <Box mt={77}>
        <Flex
          align="center"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            minHeight: '300px',
            background: '#060b20',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              left: 0,
              height: '125%',
              opacity: 0.3,
              transform: 'translateY(38px)',
              zIndex: -1,
              background:
                'url(https://res.cloudinary.com/rashot/image/upload/v1680580320/arnel-hasanovic-MNd-Rka1o0Q-unsplash_tr1etx.webp) no-repeat scroll center center',
            }}
          ></Box>
          <Container size="xl">
            <Box sx={{ textAlign: 'center', color: 'white' }}>
              <Box
                sx={{ fontWeight: 'bold' }}
                fz={{ base: 32, sm: 48 }}
                pt={10}
                mb={12}
              >
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {Array.from(text).map((letter, index) => (
                    <motion.span variants={child} key={index}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </motion.div>
              </Box>
              <Flex justify={'center'} align={'center'} columnGap={16} fz={14}>
                <Link href={'/'}>
                  <Text
                    component="div"
                    sx={{
                      cursor: 'pointer',
                      color: 'white',
                      ':hover': {
                        color: '#E16247',
                        fontWeight: 500,
                      },
                    }}
                  >
                    Home
                  </Text>
                </Link>
                <IconArrowForward />
                <Text
                  component="div"
                  sx={{
                    cursor: 'pointer',
                    color: 'white',
                    ':hover': {
                      color: '#E16247',
                      fontWeight: 500,
                    },
                  }}
                >
                  Blog
                </Text>
              </Flex>
            </Box>
          </Container>
        </Flex>
        <Blog blogs={blogs} />
        <Container size={'xl'}>
          <Box
            component="form"
            onSubmit={form.onSubmit(handleSubmit)}
            px={{ base: 20, sm: 30, md: 40, lg: 60 }}
            py={30}
            sx={{ background: '#F8F9FA', borderRadius: 4 }}
            my={50}
          >
            <Text
              fz={{ base: 20, sm: 24, md: 28 }}
              mb={16}
              fw={600}
              color="#051438"
            >
              Subscribe to newsletter
            </Text>
            <Grid>
              <Grid.Col sm={8}>
                <TextInput
                  placeholder="Enter your mail"
                  sx={{
                    '.mantine-TextInput-input': {
                      background: 'white',
                      color: '#051438',
                      fontWeight: 500,
                    },
                  }}
                  {...form.getInputProps('emailAddress')}
                />
              </Grid.Col>
              <Grid.Col sm={4}>
                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    '&.mantine-Button-root': {
                      background: '#E25D24',
                    },
                    '& .mantine-Button-label': {
                      fontSize: 16,
                      fontWeight: 600,
                    },
                    borderRadius: '10px',
                  }}
                  loading={isSubmitting}
                  rightIcon={
                    <IconSend style={{ cursor: 'pointer' }} size={16} />
                  }
                >
                  SUBSCRIBE
                </Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export async function getStaticProps() {
  const blogs = getAllBlogs();
  console.log(blogs);
  return {
    props: {
      blogs,
    },
  };
}

export default BlogPage;
