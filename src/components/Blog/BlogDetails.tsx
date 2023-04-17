/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';

import {
  Box,
  useMantineColorScheme,
  Image,
  Flex,
  Text,
  Divider,
} from '@mantine/core';
import DisComments from 'components/Discussion/DisqusComments';
import React from 'react';
import { blogData } from './data';

const BgColor = styled(Box as any)`
  & iframe {
    background-color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
    color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? '#1A1B1E !important' : 'white !important'};
  }
`;
const BlogDetails = () => {
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
            <Text
              fz={'0.975em'}
              color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
              fw={400}
            >
              {date}
            </Text>
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
          <Flex columnGap={30} py={20}>
            <Divider orientation="vertical" color="000000" size={'sm'} />
            <Text
              color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
              fs={'italic'}
              fz={{ base: '1rem' }}
            >
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </Text>
          </Flex>
          <Text
            fz={{ base: '1rem', sm: '1.25rem' }}
            mt={10}
            lh={'1.5'}
            fw={300}
            color={colorScheme === 'dark' ? '#c4c4c4' : '#888'}
          >
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. <br></br>
            <br></br>When she reached the first hills of the Italic Mountains,
            she had a last view back on the skyline of her hometown
            Bookmarksgrove, the headline of Alphabet Village and the subline of
            her own road, the Line Lane. Pityful a rethoric question ran over
            her cheek, then she continued her way.
          </Text>
          <Image
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
          />
          <Text
            fz={{ base: '1rem', sm: '1.25rem' }}
            my={20}
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

export default BlogDetails;
