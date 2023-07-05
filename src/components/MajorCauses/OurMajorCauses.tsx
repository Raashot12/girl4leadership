/* eslint-disable @typescript-eslint/no-use-before-define */
import { Box, Container, Text, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import Animation from '../Shared/Animation/AnimationWrapper';
import ScrollablComponents from '../Shared/ScrollableUI/ScrollablComponents';

const OurMajorCauses = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Box
        pt={{ base: 40, sm: 80 }}
        pb={{ base: 60, sm: 100 }}
        sx={{ background: colorScheme === 'dark' ? '#141517' : '#f9f9ff' }}
      >
        <Animation
          direction="left"
          width="auto"
          duration={'1.2s'}
          minScreenWidth="960px"
          animate={false}
          minScreenStyle={{
            animate: true,
          }}
        >
          <Container size="xl">
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: '690px',
                margin: '0px auto 75px',
              }}
              color={colorScheme === 'dark' ? '#c4c4c4' : '#777777'}
            >
              <Text fw={600} fz={{ base: 24, md: 36 }} mb={8}>
                Our Major Causes
              </Text>
              <Text fz={14} fw={300}>
                We are committed to equipping girls and women with the necessary
                tools and capacities to excel as leaders. We provide a nurturing
                environment where they can learn, grow, and develop their skills
                to their fullest potential
              </Text>
            </Box>
          </Container>
        </Animation>
        <Container size="xl">
          <ScrollablComponents>
            {causesScrollData.map((value) => {
              return (
                <Box
                  className="is-clone"
                  pos={'relative'}
                  mr={{ base: 30, sm: 20 }}
                  key={value.id}
                  sx={{
                    maxWidth: '280px',
                    pointerEvents: 'none',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    minWidth: '320px',
                    width: '100%',
                    background: colorScheme === 'dark' ? '#141517' : '#ffffff',
                    ':last-of-type': {
                      marginRight: 15,
                    },
                    ':first-of-type': {
                      marginLeft: 15,
                    },
                  }}
                >
                  <Box pos={'relative'}>
                    <Box
                      component="img"
                      src={value.pics}
                      onDragStart={() => false}
                      alt="cause images"
                      sx={{
                        objectFit: 'cover',
                        verticalAlign: 'middle',
                      }}
                      h={'260px'}
                      w={'100%'}
                      loading="lazy"
                    />
                    {/* <HoverCard width={280} shadow="md" withArrow>
                      <HoverCard.Target>
                        <Box
                          pos={'absolute'}
                          top={'15px'}
                          right={20}
                          bg={'#e25d24'}
                          p={4}
                          sx={{
                            color: 'white',
                            borderRadius: 4,
                            cursor: 'pointer',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              transition: 'all ease-in-out 0.5s',
                            },
                          }}
                          fw={600}
                        >
                          25%
                        </Box>
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Text size="sm" fw={500}>
                          This percentage shows the progress that has been
                          achieved so far. Our target is to hit 100 percent.
                        </Text>
                      </HoverCard.Dropdown>
                    </HoverCard> */}
                  </Box>
                  <Box px={15} pt={19} pb={32}>
                    <Text fz={18} fw={600} mb={15} sx={{ cursor: 'pointer' }}>
                      {value.title}
                    </Text>
                    <Text fz={14} fw={300} sx={{ cursor: 'pointer' }}>
                      {value.content.substring(0, 100)}
                    </Text>
                  </Box>
                  {/* <Flex>
                    <Box
                      component="a"
                      sx={{
                        flex: 0.5,
                        fontSize: 14,
                        lineHeight: '50px',
                        fontWeight: 500,
                        borderRadius: 0,
                        background: '#e25d24',
                        color: '#ffff',
                        display: 'flex',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      Raised: {`${value.raised}`}
                    </Box>
                    <Box
                      component="a"
                      sx={{
                        flex: 0.5,
                        fontSize: 14,
                        lineHeight: '50px',
                        fontWeight: 500,
                        borderRadius: 0,
                        background: '#fff',
                        color: '#051438',
                        display: 'flex',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: '1px solid #eeeeee',
                      }}
                    >
                      Total: {`${value.total}`}
                    </Box>
                  </Flex> */}
                </Box>
              );
            })}
          </ScrollablComponents>
        </Container>
      </Box>
    </>
  );
};

export default OurMajorCauses;

const causesScrollData = [
  {
    id: 1,
    pics: 'https://res.cloudinary.com/rashot/image/upload/v1678078067/26FA5F0B-E1E6-4F1B-94AA-4D34378B5245_yepkjc.jpg',
    raised: '$50,689',
    title: 'Leadership Skills for Women & Girls ',
    total: '$500k',
    content:
      'Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.',
  },
  {
    id: 2,
    pics: 'https://res.cloudinary.com/rashot/image/upload/v1678089210/Copy_of_IMG_1572_lohyq8.jpg',
    title: 'Girls Education',
    raised: '$50,689',
    total: '$500k',
    content:
      'Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.',
  },
  {
    id: 3,
    pics: 'https://res.cloudinary.com/rashot/image/upload/v1678078067/26FA5F0B-E1E6-4F1B-94AA-4D34378B5245_yepkjc.jpg',
    title: 'Girls in Tech',
    raised: '$50,689',
    total: '$500k',
    content:
      'Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.',
  },
  {
    id: 4,
    pics: 'https://res.cloudinary.com/rashot/image/upload/v1678078057/C09662A8-F55F-46FE-8B22-A74ADB1AA304_cmcp6i.jpg',
    title: 'Women & Girls Economic Empowerment',
    raised: '$50,689',
    total: '$500k',
    content:
      'Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.',
  },
  {
    id: 5,
    pics: 'https://res.cloudinary.com/rashot/image/upload/v1678089210/Copy_of_IMG_1572_lohyq8.jpg',
    title: 'Women in Politics',
    raised: '$50,689',
    total: '$500k',
    content:
      'Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.',
  },
  {
    id: 6,
    pics: 'https://res.cloudinary.com/rashot/image/upload/v1678078067/26FA5F0B-E1E6-4F1B-94AA-4D34378B5245_yepkjc.jpg',
    title: 'Girls Mentoring Community',
    raised: '$50,689',
    total: '$500k',
    content:
      'Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.',
  },
];
