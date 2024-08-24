/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import React, { useState } from 'react';
import {
  Box,
  useMantineColorScheme,
  Image,
  Flex,
  Text,
  Divider,
  Group,
  Skeleton,
} from '@mantine/core';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { formatBlogDate } from 'util/dates';
import { marked } from 'marked';
import { IconClock, IconMessage } from '@tabler/icons';
import { Record } from 'state/services/blogsApi';
import dynamic from 'next/dynamic';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';

const BgColor = styled(Box as any)`
  & iframe {
    background-color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
    color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
  }
`;
const BlogDetails = ({
  singleBlogPost,
  isLoading,
}: {
  singleBlogPost: Record;
  isLoading: boolean;
}) => {
  const { colorScheme } = useMantineColorScheme();
  const [showComments, setShowComments] = useState(false);
  const result = `https://girls4leadership.org/blog/${singleBlogPost?.fields?.slug}/${singleBlogPost?.id}`;
  const urlDecoded = (info: string) => {
    const data = decodeURI(info);
    return data;
  };
  const disqusConfig = {
    shortname: 'girls4leadership-1', // replace with your Disqus shortname
    config: {
      identifier: `${singleBlogPost?.fields?.slug}/${singleBlogPost?.id}`,
      title: singleBlogPost?.fields?.Title,
    },
  };

  const DiscussionEmbed = dynamic(
    () => import('disqus-react').then((mod) => mod.DiscussionEmbed),
    { ssr: false }
  );

  return (
    <>
      <Box mt={90} pb={50} pt={30}>
        <Box>
          <Flex
            justify={'center'}
            direction={'column'}
            align={'center'}
            mx={'auto'}
            mb={40}
          >
            <Skeleton
              visible={isLoading}
              w={'fit-content'}
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
            >
              <Image
                src={singleBlogPost?.fields?.AuthorImage?.[0]?.url}
                alt={singleBlogPost?.id}
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
            </Skeleton>
            <Skeleton visible={isLoading} w={'fit-content'} mt={10}>
              <Text
                fz={18}
                lh={'1.5'}
                color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
                fw={500}
              >
                {singleBlogPost?.fields?.Author}
              </Text>{' '}
            </Skeleton>
            <Skeleton visible={isLoading} w={'fit-content'} mt={10}>
              <Group
                align="center"
                sx={{ justifyContent: 'center' }}
                spacing={5}
              >
                <IconClock color="#999" />
                <Text
                  fz={'0.975em'}
                  color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
                  fw={400}
                >
                  {formatBlogDate(singleBlogPost?.fields?.TimeStamp)}
                </Text>
              </Group>
            </Skeleton>
          </Flex>
          <Box mb={25}>
            <Skeleton visible={isLoading} w={'fit-content'} mt={16} mb={25}>
              <Text
                sx={{ textAlign: 'center' }}
                fz={{ base: 25, sm: 34, md: 40 }}
                lh={'1.2'}
                fw={700}
                color={colorScheme === 'dark' ? '#c4c4c4' : '#051438'}
              >
                {singleBlogPost?.fields?.Title}
              </Text>{' '}
            </Skeleton>
          </Box>
          <Skeleton
            visible={isLoading}
            w={'fit-content'}
            sx={{
              '& .mantine-Image-image': {
                borderRadius: '10px',
                height: '100%',
                width: '100%',
                boxShadow:
                  'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
              },
            }}
            mt={16}
            mb={25}
          >
            <Image
              src={singleBlogPost?.fields?.FeaturedImage?.[0]?.url}
              alt={singleBlogPost?.fields?.slug}
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
          </Skeleton>
        </Box>
        <Box mt={20}>
          <Skeleton visible={isLoading} w={'fit-content'} mt={16} mb={25}>
            <Box
              fz={{ base: '1rem', lg: '1.1rem' }}
              component="div"
              style={{
                color: colorScheme === 'dark' ? '#d6d5d5' : '#3b3a3a',
                marginTop: 10,
                lineHeight: '1.8',
              }}
              dangerouslySetInnerHTML={{
                __html: marked(
                  singleBlogPost?.fields?.Content.trim() as string
                ) as string,
              }}
            ></Box>
          </Skeleton>
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
          <Flex justify={'space-between'} align={'center'}>
            <Flex mt={10} align="center" columnGap={20}>
              <FacebookShareButton
                url={` ${urlDecoded(result)}`}
                title={singleBlogPost?.fields?.Title}
              >
                <BsFacebook size={24} className="rounded-full" />
              </FacebookShareButton>
              <WhatsappShareButton
                url={`${urlDecoded(result)}`}
                title={singleBlogPost?.fields?.Title}
              >
                <RiWhatsappFill size={24} className="rounded-full" />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={`${urlDecoded(result)}`}
                title={singleBlogPost?.fields?.Title}
              >
                <FaLinkedin size={24} className="rounded-full" />
              </LinkedinShareButton>
              <TwitterShareButton
                url={` ${urlDecoded(result)}`}
                title={singleBlogPost?.fields?.Title}
              >
                <BsTwitter size={24} className="rounded-full" />
              </TwitterShareButton>
            </Flex>
            <Flex
              sx={{ cursor: 'pointer' }}
              columnGap={10}
              fw={800}
              onClick={() => {
                setShowComments(!showComments);
              }}
            >
              <Text> {!showComments ? 'Show' : 'Hide'} comment</Text>
              <IconMessage />
            </Flex>
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
          {/* <DiscussionEmbed  /> */}
          {showComments && <DiscussionEmbed {...disqusConfig} />}
        </BgColor>
      </Box>
    </>
  );
};

export default BlogDetails;
