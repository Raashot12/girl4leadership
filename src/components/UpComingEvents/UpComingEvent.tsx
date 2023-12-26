import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import Animation from '../Shared/Animation/AnimationWrapper';
import ScrollablComponents from '../Shared/ScrollableUI/ScrollablComponents';

const upComingEvent = [
  {
    id: 1,
    timeStamp: '25th March, 2017',
    title: 'The Universe Through A Child S Eyes',
    image:
      'https://res.cloudinary.com/rashot/image/upload/v1678348968/1889cc92-96f6-4b33-86b8-ff6b902a9763_ojgxcg.jpg',
    content:
      'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes',
  },
  {
    id: 4,
    timeStamp: '25th March, 2017',
    title: 'The Universe Through A Child S Eyes',
    image:
      'https://res.cloudinary.com/rashot/image/upload/v1678348968/1889cc92-96f6-4b33-86b8-ff6b902a9763_ojgxcg.jpg',
    content:
      'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes',
  },
  {
    id: 3,
    timeStamp: '25th March, 2017',
    title: 'The Universe Through A Child S Eyes',
    image:
      'https://res.cloudinary.com/rashot/image/upload/v1678348607/5418bce6-e0fa-42b9-b756-70f868b83efa_patry4.jpg',
    content:
      'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes',
  },
  {
    id: 5,
    timeStamp: '25th March, 2017',
    title: 'The Universe Through A Child S Eyes',
    image:
      'https://res.cloudinary.com/rashot/image/upload/v1678348971/IMG_2324_idaxek.jpg',
    content:
      'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes',
  },
  {
    id: 6,
    timeStamp: '25th March, 2017',
    title: 'The Universe Through A Child S Eyes',
    image:
      'https://res.cloudinary.com/rashot/image/upload/v1678348607/5418bce6-e0fa-42b9-b756-70f868b83efa_patry4.jpg',
    content:
      'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes',
  },
];

const UpComingEvent = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box
      pt={{ base: 40, sm: 80 }}
      pb={{ base: 60, sm: 100 }}
      sx={{ background: colorScheme === 'dark' ? '#000' : '#f9f9ff' }}
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
              PlaceHolder
            </Text>
            <Text fz={14} fw={300}>
              PlaceHolder Two
            </Text>
          </Box>
        </Animation>
      </Container>
      <Container size="xl">
        <ScrollablComponents>
          {upComingEvent.map((value) => {
            return (
              <Flex
                align={'center'}
                key={value.id}
                columnGap={30}
                sx={{
                  maxWidth: '280px',
                  pointerEvents: 'none',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  minWidth: '520px',
                  width: '100%',
                  ':last-of-type': {
                    marginRight: 0,
                  },

                  marginRight: 30,
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={value.image}
                    onDragStart={() => false}
                    alt="cause images"
                    sx={{
                      objectFit: 'cover',
                      verticalAlign: 'middle',
                      borderRadius: 3,
                    }}
                    h={'220px'}
                    w={'263px'}
                    loading="lazy"
                  />
                </Box>
                <Box>
                  <Text mb={10} fz={13} fw={300}>
                    TitleOne
                  </Text>
                  <Text fw={600} fz={18} mb={15}>
                    TitleTwo
                  </Text>
                  <Text fz={14} fw={300} lh={'24px'}>
                    TitleThree
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </ScrollablComponents>
      </Container>
    </Box>
  );
};

export default UpComingEvent;
