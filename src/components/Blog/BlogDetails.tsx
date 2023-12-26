/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import React from 'react';
import {
  Box,
  useMantineColorScheme,
  Image,
  Flex,
  Text,
  Divider,
  Group,
} from '@mantine/core';
import DisComments from 'components/Discussion/DisqusComments';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share';
import { Article } from 'types/merchSection';
import { GetStaticPaths, GetStaticProps } from 'next';
import { blogData } from './data';

type ArticleProps = {
  article: Article;
};
const BgColor = styled(Box as any)`
  & iframe {
    background-color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
    color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
  }
`;
const BlogDetails: React.FC<Article> = () => {
  const { colorScheme } = useMantineColorScheme();
  const { img, profileImage, author, date, title, subtitle } =
    blogData.blogPostItem[0];

  return (
    <>
      <Box mt={90} pb={50} pt={30}>
        <Box>
          <Box sx={{ textAlign: 'center' }} mb={40}>
            <Image
              src={profileImage}
              alt={title}
              sx={{
                '& .mantine-Image-image': {
                  borderRadius: '50%',
                  height: '65px !important',
                  width: '65px !important',
                  marginRight: 'auto !important',
                  marginLeft: 'auto !important',
                },
              }}
            />
            <Text
              fz={18}
              lh={'1.5'}
              color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
              fw={500}
            >
              {author.name}
            </Text>{' '}
            <Group
              align="center"
              sx={{ justifyContent: 'center' }}
              spacing={10}
            >
              <Text
                fz={'0.975em'}
                color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
                fw={400}
              >
                {date}
              </Text>
              <Divider
                orientation="vertical"
                size={2}
                color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
              />
              <Text
                fz={'0.975em'}
                color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
                fw={400}
              >
                8:45 pm
              </Text>
            </Group>
          </Box>
          <Box mb={25}>
            <Text
              sx={{ textAlign: 'center' }}
              fz={{ base: 25, sm: 34, md: 40 }}
              lh={'1.2'}
              fw={700}
              color={colorScheme === 'dark' ? '#c4c4c4' : '#051438'}
            >
              {title}
            </Text>{' '}
            <Text
              sx={{ textAlign: 'center' }}
              fz={{ base: '1rem', sm: '1.25rem' }}
              mt={10}
              lh={'1.5'}
              fw={300}
              color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
            >
              {subtitle}
            </Text>
          </Box>
          <Image
            src={img}
            alt={title}
            sx={{
              '& .mantine-Image-image': {
                borderRadius: '10px',
              },
            }}
          />
        </Box>
        <Box mt={20}>
          <Text
            fz={{ base: '1rem', sm: '1.25rem' }}
            mt={10}
            lh={'1.5'}
            fw={300}
            color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. <br></br>
            <br></br>A small river named Duden flows by their place and supplies
            it with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.
          </Text>

          {/* <Image
            src="https://preview.colorlib.com/theme/magdesign/images/post_lg_2.jpg"
            alt={title}
            sx={{
              '& .mantine-Image-image': {
                height: '500px !important',
                width: '600px !important',
                marginRight: 'auto !important',
                marginLeft: 'auto !important',
                maxWidth: '100%',
                borderRadius: 10,
              },
            }}
            mt={20}
          /> */}
        </Box>

        <Divider orientation="horizontal" mt={40} />
        <Box mt={20}>
          <Flex align={'center'} columnGap={5}>
            <Text
              fz={'0.975em'}
              fw={700}
              color={colorScheme === 'dark' ? '#c4c4c4' : '#888893'}
            >
              Share
            </Text>
            <IoIosShareAlt
              color={colorScheme === 'dark' ? '#c4c4c4' : '#888893'}
            />
          </Flex>
          <Flex mt={20} align="center" columnGap={20}>
            <FacebookShareButton
              url={'https://girls4leadership.org'}
              title={title}
              quote={'フェイスブックはタイトルが付けれるようです'}
              hashtag={'#hashtag'}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BsFacebook cursor={'pointer'} size={20} />
            </FacebookShareButton>
            <TwitterShareButton
              title={title}
              url="https://girls4leadership.org/"
              hashtags={['hashtag1', 'hashtag2']}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BsTwitter cursor={'pointer'} size={20} />
            </TwitterShareButton>
            <LinkedinShareButton
              title={title}
              url="https://girls4leadership.org/"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaLinkedin cursor={'pointer'} size={20} />
            </LinkedinShareButton>
          </Flex>
        </Box>
        <BgColor
          size={'xl'}
          mt={60}
          sx={{
            background:
              colorScheme === 'dark'
                ? '#1A1B1E !important'
                : '#fffff !important',
          }}
        >
          <DisComments />
        </BgColor>
      </Box>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of products from the dummyjson.com API
  const res = await fetch('https://dummyjson.com/api/products');
  const products: Article[] = await res.json();

  // Generate paths for each product
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  // Fetch data for a specific article based on the ID from the dummyjson.com API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL}/api/blogs/slugify/slugs/${params?.id}`
  );
  const article: Article = await res.json();

  return {
    props: { article },
  };
};
export default BlogDetails;
