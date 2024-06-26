/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Box, Text, Container, Group, Image, Grid, Flex } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import React, { useRef } from 'react';
import { usePagination } from 'hooks/usePagination';
import Pagination from 'components/Pagination';
import Link from 'next/link';
import { BlogIPRops } from 'types/blog';
import { formatDateDecampCms } from 'util/dates';
import { IconClock } from '@tabler/icons';
import Popular from './Popular';

const Blog = ({ blogs }: { blogs: BlogIPRops[] }) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const trendingPost = blogs?.filter((value) => value?.isFeatured);
  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination({
      itemsPerPage: 4,
      data: blogs,
      startFrom: 1,
    });

  return (
    <Box pt={40}>
      <Text
        ta={'center'}
        fz={{ base: 20, lg: 25 }}
        fw={{ base: 700 }}
        mb={'2.5rem'}
      >
        Our Leadership Chronicles: Inspiring Stories and Insights for Empowering
        Girls & Women
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
                <React.Fragment key={value?.contentDescription}>
                  <Carousel.Slide
                    sx={{
                      '.mantine-Carousel-viewport': {
                        overflowY: 'hidden',
                      },
                    }}
                  >
                    <Link href={`/blog/${value.slug}`}>
                      <Flex
                        align={'center'}
                        columnGap={50}
                        rowGap={20}
                        wrap={{ base: 'wrap', md: 'nowrap' }}
                      >
                        <Box
                          sx={{
                            height: '350px',
                            position: 'relative',
                          }}
                          w={{ base: '100%', md: '50%' }}
                        >
                          <img
                            src={value?.thumbnail}
                            alt={value?.contentDescription}
                            loading="eager"
                            style={{
                              height: '100%',
                              width: '100%',
                              borderRadius: 7,
                              objectFit: 'cover',
                            }}
                          />
                        </Box>
                        <Box w={{ base: '100%', md: '50%' }}>
                          <Text>
                            <span style={{ fontWeight: '600' }}>
                              {value?.category}
                            </span>{' '}
                            <Text>
                              <Group spacing={5}>
                                <IconClock color="#999" />
                                <span
                                  style={{
                                    color: ' #999',
                                    fontWeight: 500,
                                    fontSize: 14,
                                  }}
                                >
                                  {formatDateDecampCms(value?.date)}
                                </span>
                              </Group>
                            </Text>
                          </Text>
                          <Text
                            fz={{ base: 30, md: 40 }}
                            fw={700}
                            lh={1.2}
                            mt={15}
                            sx={{ whiteSpace: 'normal' }}
                          >
                            {value?.title}
                          </Text>
                          <Text
                            fz={14}
                            fw={400}
                            lh={1.5}
                            mt={15}
                            color="#999"
                            sx={{ whiteSpace: 'normal' }}
                          >
                            {value?.contentDescription?.substring(0, 400)}...
                          </Text>
                          <Flex
                            mt={20}
                            id="blogs"
                            align={'center'}
                            columnGap={16}
                          >
                            <Image
                              src={value?.authorAvatar}
                              alt="profile display picture"
                              h={45}
                              width={45}
                              sx={{
                                '& .mantine-Image-image': {
                                  borderRadius: '50%',
                                  height: '45px !important',
                                  width: '45px !important',
                                  boxShadow:
                                    'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                                },
                              }}
                            />
                            <Box>
                              <Text fw={700} lh={1}>
                                {value?.author}
                              </Text>
                              <Text fw={14} color="#888">
                                {value?.profession}
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
        <Box mt={50}>
          <Grid gutter={45}>
            {slicedData &&
              slicedData.map((value: BlogIPRops, index) => {
                return (
                  <Grid.Col
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Link href={`/blog/${value?.slug}`}>
                      <Box
                        sx={{
                          width: '100%',
                          height: '225px',
                          position: 'relative',
                        }}
                      >
                        <img
                          src={value?.thumbnail}
                          alt={value?.contentDescription}
                          loading="eager"
                          style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: '7px',
                            objectFit: 'cover',
                            boxShadow:
                              'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
                          }}
                        />
                      </Box>
                      <Box mt={25}>
                        <Text>
                          <span style={{ fontWeight: '600' }}>
                            {value?.category}
                          </span>{' '}
                          <Text>
                            <Group spacing={5}>
                              <IconClock color="#999" />
                              <span
                                style={{
                                  color: ' #999',
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                {formatDateDecampCms(value?.date)}
                              </span>
                            </Group>
                          </Text>
                        </Text>
                        <Text
                          fz={{ base: 18 }}
                          fw={700}
                          lh={1.2}
                          mt={14}
                          sx={{ whiteSpace: 'normal' }}
                        >
                          {value?.title}
                        </Text>
                        <Text
                          fz={14}
                          fw={400}
                          lh={1.5}
                          mt={15}
                          color="#999"
                          sx={{ whiteSpace: 'normal' }}
                        >
                          {value?.contentDescription?.substring(0, 150)}...
                        </Text>
                        <Group mt={20}>
                          <Image
                            src={value?.authorAvatar}
                            alt="profile display picture"
                            sx={{
                              '& .mantine-Image-image': {
                                borderRadius: '50%',
                                height: '45px !important',
                                width: '45px !important',
                                boxShadow:
                                  'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                              },
                            }}
                          />

                          <Box>
                            <Text fw={700} lh={1}>
                              {value?.author}
                            </Text>
                            <Text fw={14} color="#888">
                              {value?.profession}
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
        <Popular blogs={blogs} />
      </Box>
    </Box>
  );
};

export default Blog;
