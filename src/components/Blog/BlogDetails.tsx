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
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Article } from 'types/merchSection';
import dayjs from 'dayjs';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

const BgColor = styled(Box as any)`
  & iframe {
    background-color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
    color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
  }
`;
const BlogDetails = ({ singleBlogPost }: { singleBlogPost: Article }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Box mt={90} pb={50} pt={30}>
        <Box>
          <Box sx={{ textAlign: 'center' }} mb={40}>
            <Image
              src={
                singleBlogPost?.attributes?.author?.data?.attributes?.profileUrl
              }
              alt={
                singleBlogPost?.attributes?.featuredImage?.data?.attributes?.url
              }
              sx={{
                '& .mantine-Image-image': {
                  borderRadius: '50%',
                  height: '65px !important',
                  width: '65px !important',
                  marginRight: 'auto !important',
                  marginLeft: 'auto !important',
                  boxShadow:
                    'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
                },
              }}
            />
            <Text
              fz={18}
              lh={'1.5'}
              color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
              fw={500}
            >
              {singleBlogPost?.attributes?.author?.data?.attributes?.name}
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
                {dayjs(singleBlogPost?.attributes?.publishedAt).format(
                  'YYYY-MM-DD'
                )}
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
                {dayjs(singleBlogPost?.attributes?.publishedAt).format('HH:mm')}
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
              {singleBlogPost?.attributes?.title}
            </Text>{' '}
            <Text
              sx={{ textAlign: 'center' }}
              fz={{ base: '1rem', sm: '1.25rem' }}
              mt={10}
              lh={'1.5'}
              fw={300}
            >
              {singleBlogPost?.attributes?.summary}
            </Text>
          </Box>
          <Image
            src={
              singleBlogPost?.attributes?.featuredImage?.data?.attributes?.url
            }
            alt={
              singleBlogPost?.attributes?.featuredImage?.data?.attributes?.url
            }
            sx={{
              '& .mantine-Image-image': {
                borderRadius: '10px',
                boxShadow:
                  'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
              },
            }}
          />
        </Box>
        <Box mt={20}>
          <Box
            component="div"
            fz={{ base: '1rem', sm: '1.25rem' }}
            mt={10}
            lh={'1.5'}
            fw={300}
            color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
          >
            <BlocksRenderer
              content={
                singleBlogPost?.attributes?.content as unknown as RootNode[]
              }
            />
          </Box>
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
              url={`https://girls4leadership.org/blog/${singleBlogPost?.attributes?.slug}`}
              title={singleBlogPost?.attributes?.title}
              quote={'フェイスブックはタイトルが付けれるようです'}
              hashtag={'#hashtag'}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BsFacebook cursor={'pointer'} size={20} />
            </FacebookShareButton>
            <TwitterShareButton
              title={singleBlogPost?.attributes?.title}
              url={`https://girls4leadership.org/blog/${singleBlogPost?.attributes?.slug}`}
              hashtags={['girls4leadership', 'news']}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BsTwitter cursor={'pointer'} size={20} />
            </TwitterShareButton>
            <LinkedinShareButton
              title={singleBlogPost?.attributes?.title}
              url={`https://girls4leadership.org/blog/${singleBlogPost?.attributes?.slug}`}
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
          <DisComments
            postTitle={singleBlogPost?.attributes?.title}
            postSlug={singleBlogPost?.attributes?.slug}
          />
        </BgColor>
      </Box>
    </>
  );
};

export default BlogDetails;
