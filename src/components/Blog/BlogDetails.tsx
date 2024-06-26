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
import { BlogIPRops } from 'types/blog';
import { formatDateDecampCms } from 'util/dates';
import ReactMarkdown from 'react-markdown';
import { IconClock } from '@tabler/icons';

const BgColor = styled(Box as any)`
  & iframe {
    background-color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
    color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
  }
`;
const BlogDetails = ({ singleBlogPost }: { singleBlogPost: BlogIPRops }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Box mt={90} pb={50} pt={30}>
        <Box>
          <Box sx={{ textAlign: 'center' }} mb={40}>
            <Image
              src={singleBlogPost?.authorAvatar}
              alt={singleBlogPost?.title}
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
              {singleBlogPost?.author}
            </Text>{' '}
            <Group align="center" sx={{ justifyContent: 'center' }} spacing={5}>
              <IconClock color="#999" />
              <Text
                fz={'0.975em'}
                color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
                fw={400}
              >
                {formatDateDecampCms(singleBlogPost?.date)}
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
              {singleBlogPost?.title}
            </Text>{' '}
          </Box>

          <Image
            src={singleBlogPost?.thumbnail}
            alt={singleBlogPost?.title}
            sx={{
              '& .mantine-Image-image': {
                borderRadius: '10px',
                height: '100%',
                width: '100%',
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
            <ReactMarkdown>{singleBlogPost.body}</ReactMarkdown>
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
              url={`https://girls4leadership.org/blog/${singleBlogPost?.slug}`}
              title={singleBlogPost?.title}
              quote={'フェイスブックはタイトルが付けれるようです'}
              hashtag={'#hashtag'}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BsFacebook cursor={'pointer'} size={20} />
            </FacebookShareButton>
            <TwitterShareButton
              title={singleBlogPost?.title}
              url={`https://girls4leadership.org/blog/${singleBlogPost?.slug}`}
              hashtags={['girls4leadership', 'news']}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BsTwitter cursor={'pointer'} size={20} />
            </TwitterShareButton>
            <LinkedinShareButton
              title={singleBlogPost?.title}
              url={`https://girls4leadership.org/blog/${singleBlogPost?.slug}`}
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
            postTitle={singleBlogPost?.title}
            postSlug={singleBlogPost?.slug}
          />
        </BgColor>
      </Box>
    </>
  );
};

export default BlogDetails;
