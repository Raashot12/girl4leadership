/* eslint-disable @next/next/no-img-element */
import { Box, Text, Container, Group, Image, Grid } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import React, { useRef } from 'react';
import { blogData } from './data';

const Blog = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { trendingPost } = blogData;
  return (
    <Box py={40}>
      <Text
        ta={'center'}
        fz={{ base: 30, lg: 40 }}
        fw={{ base: 700 }}
        mb={'2.5rem'}
      >
        Trending
      </Text>
      <Container size={'xl'}>
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
                  <Carousel.Slide>
                    <Grid gutter={25} gutterMd={50} align={'center'}>
                      <Grid.Col md={6} lg={4}>
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
                      </Grid.Col>
                      <Grid.Col md={6} lg={8}>
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
                        <Group mt={20}>
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
                        </Group>
                      </Grid.Col>
                    </Grid>
                  </Carousel.Slide>
                </React.Fragment>
              );
            })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Blog;
