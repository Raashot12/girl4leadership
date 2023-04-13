/* eslint-disable no-nested-ternary */
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Box, Group, Progress, Text, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { blogData } from './data';

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

  return (
    <Box py={'7rem'}>
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
                <Box>
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
                </Box>
              </Carousel.Slide>
            );
          })}
      </Carousel>
      <Progress
        value={scrollProgress}
        sx={{
          '& .mantine-Progress-bar': {
            background: '#E25D24',
          },
        }}
        styles={{
          bar: { transitionDuration: '0ms' },
          root: { maxWidth: 320 },
        }}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </Box>
  );
}
export default Popular;
