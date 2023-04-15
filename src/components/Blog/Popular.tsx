/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Box, Group, Text, Image, Flex, keyframes } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import styled from '@emotion/styled';
import { blogData } from './data';

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
function Popular() {
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

  return (
    <Box pb={'3rem'} pt={'7rem'}>
      <Box
        sx={{ textAlign: 'center' }}
        fz={{ base: 25, sm: 30, lg: 40 }}
        fw={700}
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
        {blogData &&
          blogData.popularPost.map((value) => {
            return (
              <Carousel.Slide key={value.id}>
                <img
                  src={value.img}
                  alt={value.title}
                  loading="eager"
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'auto',
                    width: '100%',
                    marginBottom: 30,
                    borderRadius: 7,
                    verticalAlign: 'middle',
                  }}
                />
                <Box w={'100%'}>
                  <Text>
                    <span style={{ fontWeight: '600' }}>{value.category}</span>{' '}
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
                    fz={18}
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
                    {`${value.subtitle.substring(0, 40)}...`}
                  </Text>
                  <Group mt={20} id="blogs">
                    <Image
                      src={value.profileImage}
                      alt="profile display picture"
                      height={45}
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
