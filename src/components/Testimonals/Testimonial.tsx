/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-nested-ternary */
import { Box, Container, useMantineColorScheme, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import Animation from '../Shared/Animation/AnimationWrapper';

const Card = ({
  item,
}: {
  item: {
    id: number;
    name: string;
    image: string;
    content: string;
    workPosition: string;
  };
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box
      py={50}
      px={30}
      sx={{
        width: '100%',
        cursor: 'pointer',
        background: colorScheme === 'dark' ? '#232324' : '#F9F9FF',
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          component="img"
          src={item.image}
          onDragStart={() => false}
          alt="cause images"
          sx={{
            objectFit: 'cover',
            verticalAlign: 'middle',
            borderRadius: '50%',
          }}
          h={'50px'}
          w={'50px'}
          loading="lazy"
        />
      </Box>
      <Box>
        <Text align="center" mt={30} mb={5}>
          {item.name}
        </Text>
        <Text align="center" mb={15} fz={16} fw={600}>
          {item.workPosition}
        </Text>
        <Text align="center" fz={14} fw={300}>
          {item.content}
        </Text>
      </Box>
    </Box>
  );
};
// const testimonialCards = [
//   {
//     id: 1,
//     name: 'Cordelia Barton',
//     workPosition: 'CEO at Google',
//     image:
//       'https://res.cloudinary.com/rashot/image/upload/v1678362430/Screenshot_2022-08-20_at_12.46.08_jxpkw0.png',
//     content:
//       'It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its',
//   },
//   {
//     id: 2,
//     name: 'Cordelia Barton',
//     workPosition: 'CEO at Google',
//     image:
//       'https://res.cloudinary.com/rashot/image/upload/v1678362430/Screenshot_2022-08-20_at_12.46.08_jxpkw0.png',
//     content:
//       'It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its',
//   },
//   {
//     id: 3,
//     name: 'Cordelia Barton',
//     workPosition: 'CEO at Google',
//     image:
//       'https://res.cloudinary.com/rashot/image/upload/v1678362430/Screenshot_2022-08-20_at_12.46.08_jxpkw0.png',
//     content:
//       'It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its',
//   },
//   {
//     id: 4,
//     name: 'Cordelia Barton',
//     workPosition: 'CEO at Google',
//     image:
//       'https://res.cloudinary.com/rashot/image/upload/v1678357985/testi-1.png_j0uy1x.webp',
//     content:
//       'It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its',
//   },
// ];

const Testimonial = ({
  testimonialCards,
}: {
  testimonialCards: {
    data: {
      id: number;
      name: string;
      image: string;
      content: string;
      workPosition: string;
    }[];
    title: string;
    subTitle: string;
  };
}) => {
  const { colorScheme } = useMantineColorScheme();
  const largeScreen = useMediaQuery('(min-width: 1200px)', true, {
    getInitialValueInEffect: false,
  });
  const mediumScreen = useMediaQuery('(min-width: 992px)', true, {
    getInitialValueInEffect: false,
  });
  const mobileScreen = useMediaQuery('(max-width: 991px)', true, {
    getInitialValueInEffect: false,
  });

  return (
    <Box
      pt={{ base: 40, sm: 80 }}
      pb={{ base: 60, sm: 80 }}
      sx={{ background: colorScheme === 'dark' ? '#141517' : '#FFFFFF' }}
    >
      <Container size="xl">
        <Animation
          direction="right"
          width="auto"
          duration={'1.2s'}
          minScreenWidth="960px"
          animate={false}
          minScreenStyle={{
            animate: true,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '690px',
              margin: '0px auto 75px',
            }}
          >
            <Text fw={600} fz={{ base: 24, md: 36 }} mb={8}>
              {testimonialCards.title}
            </Text>
            <Text fz={14} fw={300}>
              {testimonialCards.subTitle}
            </Text>
          </Box>
        </Animation>
      </Container>
      <Container size="xl">
        <Carousel
          height={'auto'}
          slideSize={largeScreen ? '33.33333%' : mediumScreen ? '45%' : '100%'}
          slideGap="md"
          loop
          withControls={mobileScreen ? false : true}
          align="center"
          slidesToScroll={largeScreen ? 3 : mediumScreen ? 2 : 1}
        >
          {testimonialCards.data.map((value) => {
            return (
              <Carousel.Slide key={value.id}>
                <Card item={value} key={value.id} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Testimonial;
