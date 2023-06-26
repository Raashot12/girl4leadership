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

const WelcomeGirlsFourInitative = () => {
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
                  Our Reach
                </Text>
                <Text
                  fz={15}
                  fw={300}
                  lh={'24px'}
                  sx={{ width: '100%', maxWidth: '480px' }}
                  mx={{ sm: 'auto', md: '0' }}
                >
                  We are committed to achieving tangible and measurable results.
                  We aim to empower and equip 1 million girls with leadership
                  capacities by 2030.
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
                          10000+
                        </Text>
                        <Text
                          fw={300}
                          color={colorScheme === 'dark' ? '#c4c4c4' : '#777777'}
                        >
                          People Reached
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
                          10+
                        </Text>
                        <Text
                          fw={300}
                          color={colorScheme === 'dark' ? '#c4c4c4' : '#777777'}
                        >
                          Projects
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
                          120+
                        </Text>
                        <Text
                          fw={300}
                          color={colorScheme === 'dark' ? '#c4c4c4' : '#777777'}
                        >
                          Volunteers
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
              src="https://res.cloudinary.com/rashot/image/upload/v1678048270/IMG_4759_1_aad_dkqvtw.jpg"
              alt="welcome Image"
              style={{ borderRadius: 10 }}
              sx={{
                '.mantine-Image-image': {
                  borderRadius: 4,
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
