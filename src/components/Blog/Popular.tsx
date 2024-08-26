/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import {
  Box,
  Group,
  Text,
  Flex,
  keyframes,
  Image,
  Skeleton,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { Record } from 'state/services/blogsApi';
import { formatBlogDate } from 'util/dates';

const progressForward = keyframes`
  0% {
    width: 0%;
  }
  25% {
    width: 50%;
  }
  50% {
    width: 75%;
  }
  75% {
    width: 85%;
  }
  100% {
    width: 100%;
  }
`;
const ProgressBar = styled(Box as any)`
  position: relative;
  height: 8px;
  width: 320px;
  background: white;
  border-radius: 25px;
  margin: auto;
  background-color: transparent;
`;
const BoxFill = styled(Box as any)<{ scrollprogress: number }>`
  position: absolute;
  height: 8px;
  width: ${({ scrollprogress }) => (scrollprogress ? `${scrollprogress}%` : 0)};
  animation: ${progressForward} 1s;
  background: rgb(34, 193, 195);
  background: #e25d24;
  border-radius: 15px;
`;
function Popular({
  blogs,
  isLoading,
}: {
  blogs: Record[];
  isLoading: boolean;
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const matches = useMediaQuery('(min-width: 1200px)', true, {
    getInitialValueInEffect: false,
  });
  const mobile = useMediaQuery('(max-width: 539px)', true, {
    getInitialValueInEffect: false,
  });
  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  // Importing use Router
  const router = useRouter();
  return (
    <Box pb={'3rem'} pt={'7rem'}>
      <Box
        sx={{ textAlign: 'center' }}
        fz={{ base: 25, sm: 30, lg: 40 }}
        fw={700}
        mb={40}
      >
        Most Popular Posts
      </Box>
      <Carousel
        dragFree
        slideSize={matches ? '40%' : mobile ? '80%' : '50%'}
        slideGap="xl"
        loop={!!mobile}
        getEmblaApi={setEmbla}
        initialSlide={0}
        withControls={false}
        onNextSlide={() => null}
      >
        {blogs &&
          blogs.map((value, index) => {
            return (
              <Carousel.Slide
                onClick={() =>
                  isLoading
                    ? null
                    : router.push(`/blog/${value.fields?.slug}/${value?.id}`)
                }
                key={index}
                sx={{ cursor: 'pointer' }}
              >
                <Skeleton
                  visible={isLoading}
                  h={300}
                  w={'100%'}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    width: '100%',
                    marginBottom: 30,
                    borderRadius: 7,
                    verticalAlign: 'middle',
                    objectFit: 'cover',
                  }}
                >
                  <img
                    src={value?.fields?.FeaturedImage[0]?.url}
                    alt={value.fields?.slug}
                    sizes="cover"
                    loading="eager"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '300px',
                      width: '100%',
                      marginBottom: 30,
                      borderRadius: 7,
                      verticalAlign: 'middle',
                      objectFit: 'cover',
                    }}
                  />
                </Skeleton>
                <Box w={'100%'}>
                  <Text>
                    <Skeleton visible={isLoading} w={'fit-content'} mt={10}>
                      <span style={{ fontWeight: '600' }}>
                        {' '}
                        {value?.fields?.Category}
                      </span>{' '}
                    </Skeleton>
                    <Skeleton visible={isLoading} w={'fit-content'} mt={10}>
                      <span
                        style={{
                          color: ' #999',
                          fontWeight: 400,
                          fontSize: 14,
                        }}
                      >
                        {formatBlogDate(value?.fields?.TimeStamp)}
                      </span>
                    </Skeleton>
                  </Text>
                  <Skeleton visible={isLoading} w={'fit-content'} mt={10}>
                    <Text
                      fz={18}
                      fw={700}
                      lh={1.2}
                      mt={15}
                      sx={{ whiteSpace: 'normal' }}
                    >
                      {value?.fields?.Title}
                    </Text>
                  </Skeleton>
                  <Skeleton visible={isLoading} w={'fit-content'} mt={10}>
                    <Text
                      fz={14}
                      fw={400}
                      lh={1.5}
                      mt={15}
                      color="#999"
                      sx={{ whiteSpace: 'normal' }}
                    >
                      {value?.fields?.Subtitle.substring(0, 150)}...
                    </Text>
                  </Skeleton>
                  <Group mt={20} id="blogs">
                    <Skeleton
                      visible={isLoading}
                      w={'fit-content'}
                      mt={isLoading ? 10 : 0}
                    >
                      <Image
                        src={value?.fields?.AuthorImage?.[0]?.url}
                        alt="profile display picture"
                        height={45}
                        width={45}
                        sx={{
                          '& .mantine-Image-image': {
                            borderRadius: '50%',
                          },
                        }}
                      />
                    </Skeleton>

                    <Box>
                      <Skeleton visible={isLoading} w={'fit-content'} mt={10}>
                        <Text fw={700} lh={1}>
                          {value?.fields?.Author}
                        </Text>
                      </Skeleton>
                      <Skeleton visible={isLoading} w={'fit-content'} mt={10}>
                        <Text fw={14} color="#888">
                          {value?.fields?.Profession}
                        </Text>
                      </Skeleton>
                    </Box>
                  </Group>
                </Box>
              </Carousel.Slide>
            );
          })}
      </Carousel>{' '}
      <Flex
        justify={{ base: 'center', sm: 'space-between' }}
        mt={50}
        mx="auto"
        align={'center'}
        pr={25}
      >
        <ProgressBar display={{ base: 'none', sm: 'block' }}>
          <BoxFill scrollprogress={scrollProgress}></BoxFill>
        </ProgressBar>
        <Flex
          align={'center'}
          columnGap={25}
          sx={{ cursor: 'pointer' }}
          fw={500}
        >
          <Box
            component="button"
            onClick={scrollPrev}
            sx={{
              outline: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: scrollProgress <= 0.4 ? 'gray' : '',
              ':hover': {
                color: scrollProgress <= 0 ? '' : '#e25d24',
                transition: 'all 0.4s ease-in-out',
              },
            }}
          >
            Prev
          </Box>
          <Box
            component="button"
            onClick={scrollNext}
            sx={{
              outline: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: scrollProgress >= 99 ? 'gray' : '',
              ':hover': {
                color: scrollProgress >= 99 ? '' : '#e25d24',
                transition: 'all 0.4s ease-in-out',
              },
            }}
          >
            Next
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
export default Popular;
