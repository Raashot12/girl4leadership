import {
  Box,
  Flex,
  Grid,
  Text,
  useMantineColorScheme,
  Image,
} from '@mantine/core';
import React from 'react';
import { IconBook, IconOutlet, IconUsers } from '@tabler/icons';
import Animation from '../Shared/Animation/AnimationWrapper';

const WelcomeGirlsFourInitative = ({
  ourReach,
}: {
  ourReach: {
    image: string;
    title: string;
    people: {
      count: string;
      label: string;
    };
    content: string;
    projects: {
      count: string;
      label: string;
    };
    volunteers: {
      count: string;
      label: string;
    };
  };
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box mt={{ base: 30, md: 80 }} pb={{ base: 70, md: 100, lg: 120 }}>
      <Grid gutterLg={50}>
        <Grid.Col md={6} sm={12}>
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
            <Box>
              <Box mb={40}>
                <Text
                  fw={600}
                  fz={{ base: 24, sm: 30, md: 36 }}
                  mb={18}
                  lh={'1.5em'}
                  ta={{ sm: 'center', md: 'left' }}
                >
                  {ourReach.title}
                </Text>
                <Text
                  fz={15}
                  fw={300}
                  lh={'24px'}
                  sx={{ width: '100%', maxWidth: '480px' }}
                  mx={{ sm: 'auto', md: '0' }}
                >
                  {ourReach.content}
                </Text>
              </Box>
              <Grid gutterLg={20}>
                <Grid.Col md={4} sm={6}>
                  <Box sx={{ border: '1px solid #eeeeee' }} py={30} px={15}>
                    <Flex columnGap={20} direction={'column'} rowGap={10}>
                      <IconOutlet
                        color={colorScheme === 'dark' ? '#c4c4c4' : '#e25d24'}
                      />
                      <Box>
                        <Text fw={600} mb={5} fz={24}>
                          {ourReach.people.count}
                        </Text>
                        <Text
                          fw={300}
                          color={colorScheme === 'dark' ? '#c4c4c4' : '#777777'}
                        >
                          {ourReach.people.label}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Grid.Col>

                <Grid.Col md={4} sm={6}>
                  <Box sx={{ border: '1px solid #eeeeee' }} py={30} px={15}>
                    <Flex columnGap={20} direction={'column'} rowGap={10}>
                      <IconBook
                        color={colorScheme === 'dark' ? '#c4c4c4' : '#e25d24'}
                      />
                      <Box>
                        <Text fw={600} mb={5} fz={24}>
                          {ourReach.projects.count}
                        </Text>
                        <Text
                          fw={300}
                          color={colorScheme === 'dark' ? '#c4c4c4' : '#777777'}
                        >
                          {ourReach.projects.label}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Grid.Col>
                <Grid.Col md={4} sm={6}>
                  <Box sx={{ border: '1px solid #eeeeee' }} py={30} px={15}>
                    <Flex columnGap={20} direction={'column'} rowGap={10}>
                      <IconUsers
                        color={colorScheme === 'dark' ? '#c4c4c4' : '#e25d24'}
                      />
                      <Box>
                        <Text fw={600} mb={5} fz={24}>
                          {ourReach.volunteers.count}
                        </Text>
                        <Text
                          fw={300}
                          color={colorScheme === 'dark' ? '#c4c4c4' : '#777777'}
                        >
                          {ourReach.volunteers.label}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Grid.Col>
              </Grid>
            </Box>
          </Animation>
        </Grid.Col>
        <Grid.Col
          md={6}
          sm={12}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
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
            <Image
              src={ourReach.image}
              alt="welcome Image"
              style={{ borderRadius: 10 }}
              sx={{
                '.mantine-Image-image': {
                  borderRadius: 10,
                },
              }}
            />
          </Animation>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default WelcomeGirlsFourInitative;
