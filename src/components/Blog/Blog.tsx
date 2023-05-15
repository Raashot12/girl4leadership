/* eslint-disable @next/next/no-img-element */
import { Box, Text, Container, Group, Image, Grid, Flex } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import React, { useRef } from 'react';
import { usePagination } from 'hooks/usePagination';
import Pagination from 'components/Pagination';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { blogData } from './data';
import Popular from './Popular';

const Blog = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { trendingPost, blogPostItem } = blogData;
  const matches = useMediaQuery('(max-width: 991.5px)');
  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination({
      itemsPerPage: matches ? 4 : 3,
      data: blogPostItem,
      startFrom: 1,
    });

  return (
    <Box pt={40}>
      <Text
        ta={'center'}
        fz={{ base: 30, lg: 40 }}
        fw={{ base: 700 }}
        mb={'2.5rem'}
      >
        Trending
      </Text>
      <Container size={'xl'} sx={{ overflowY: 'hidden', overflowX: 'hidden' }}>
        <Carousel
          mx="auto"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          withControls={false}
          withIndicators={true}
          height={'auto'}
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: 'width 250ms ease',

              '&[data-active]': {
                width: 40,
              },
            },
          }}
        >
          {trendingPost &&
            trendingPost.map((value) => {
              return (
                <React.Fragment key={value.id}>
                  <Carousel.Slide
                    sx={{
                      '.mantine-Carousel-viewport': {
                        overflowY: 'hidden',
                      },
                    }}
                  >
                    <Link href={`/blog/${value.id}`}>
                      <Flex
                        align={'center'}
                        columnGap={50}
                        rowGap={20}
                        wrap={{ base: 'wrap', md: 'nowrap' }}
                      >
                        <Box>
                          <img
                            src={value.img}
                            alt={value.title}
                            loading="eager"
                            style={{
                              maxWidth: '100%',
                              height: 'auto',
                              width: '100%',
                              borderRadius: 7,
                            }}
                          />
                        </Box>
                        <Box>
                          <Text>
                            <span style={{ fontWeight: '600' }}>
                              {value.category}
                            </span>{' '}
                            <span
                              style={{
                                color: ' #999',
                                fontWeight: 400,
                                fontSize: 14,
                              }}
                            >
                              -- {value.date}
                            </span>
                          </Text>
                          <Text
                            fz={{ base: 30, md: 40 }}
                            fw={700}
                            lh={1.2}
                            mt={15}
                            sx={{ whiteSpace: 'normal' }}
                          >
                            {value.title}
                          </Text>
                          <Text
                            fz={14}
                            fw={400}
                            lh={1.5}
                            mt={15}
                            color="#999"
                            sx={{ whiteSpace: 'normal' }}
                          >
                            {value.subtitle}
                          </Text>
                          <Flex
                            mt={20}
                            id="blogs"
                            align={'center'}
                            columnGap={16}
                          >
                            <Image
                              src={value.profileImage}
                              alt="profile display picture"
                              h={45}
                              width={45}
                              sx={{
                                '& .mantine-Image-image': {
                                  borderRadius: '50%',
                                },
                              }}
                            />
                            <Box>
                              <Text fw={700} lh={1}>
                                {value.author.name}
                              </Text>
                              <Text fw={14} color="#888">
                                {value.author.profession}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Link>
                  </Carousel.Slide>
                </React.Fragment>
              );
            })}
        </Carousel>
        {/* Blog Items Section */}
        <Box mt={50}>
          <Grid gutter={45}>
            {slicedData &&
              slicedData.map((value) => {
                return (
                  <Grid.Col
                    xs={12}
                    sm={6}
                    md={4}
                    key={value.id}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Link href={`/blog/${value.id}`}>
                      <Image
                        src={value.img}
                        alt={value.title}
                        sx={{
                          '& .mantine-Image-image': {
                            borderRadius: '7px',
                          },
                        }}
                      />
                      <Box mt={25}>
                        <Text>
                          <span style={{ fontWeight: '600' }}>
                            {value.category}
                          </span>{' '}
                          <span
                            style={{
                              color: ' #999',
                              fontWeight: 400,
                              fontSize: 14,
                            }}
                          >
                            -- {value.date}
                          </span>
                        </Text>
                        <Text
                          fz={{ base: 18 }}
                          fw={700}
                          lh={1.2}
                          mt={14}
                          sx={{ whiteSpace: 'normal' }}
                        >
                          {value.title}
                        </Text>
                        <Text
                          fz={14}
                          fw={400}
                          lh={1.5}
                          mt={15}
                          color="#999"
                          sx={{ whiteSpace: 'normal' }}
                        >
                          {value.subtitle.substring(0, 88)}.
                        </Text>
                        <Group mt={20}>
                          <Image
                            src={value.profileImage}
                            alt="profile display picture"
                            sx={{
                              '& .mantine-Image-image': {
                                borderRadius: '50%',
                                height: '45px !important',
                                width: '45px !important',
                              },
                            }}
                          />
                          <Box>
                            <Text fw={700} lh={1}>
                              {value.author.name}
                            </Text>
                            <Text fw={14} color="#888">
                              {value.author.profession}
                            </Text>
                          </Box>
                        </Group>
                      </Box>
                    </Link>
                  </Grid.Col>
                );
              })}
          </Grid>
        </Box>
        <Flex justify="center" mt={39}></Flex>
        <Pagination
          idToClampTo="blogs"
          pagination={pagination}
          prevPage={prevPage}
          nextPage={nextPage}
          changePage={changePage}
        />
      </Container>
      <Box>
        <Popular />
      </Box>
    </Box>
  );
};

export default Blog;
