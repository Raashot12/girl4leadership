import {
  Container,
  Box,
  Flex,
  Text,
  Grid,
  Image,
  useMantineColorScheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconArrowForward,
  IconBook,
  IconDatabase,
  IconUsers,
} from '@tabler/icons';
import Animation from 'components/Shared/Animation/AnimationWrapper';
import React from 'react';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};
const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
      duration: 5,
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
      repeat: Infinity,
    },
  },
};
const text = 'About Us';
const AboutUs = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box mt={77}>
      <Flex
        align="center"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          minHeight: '300px',
          background: '#060b20',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            left: 0,
            height: '125%',
            opacity: 0.25,
            zIndex: -1,
            background:
              'url(https://res.cloudinary.com/rashot/image/upload/v1679231969/banner.jpg_amcshe.webp) no-repeat scroll center center',
          }}
        ></Box>
        <Container size="xl">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Box
              sx={{ fontWeight: 'bold' }}
              fz={{ base: 32, sm: 48 }}
              pt={10}
              mb={12}
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {Array.from(text).map((letter, index) => (
                  <motion.span variants={child} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.div>
            </Box>
            <Flex justify={'center'} align={'center'} columnGap={16} fz={14}>
              <Link href={'/'}>
                <Text
                  component="a"
                  sx={{
                    cursor: 'pointer',
                    color: 'white',
                    ':hover': {
                      color: '#E16247',
                      fontWeight: 500,
                    },
                  }}
                >
                  Home
                </Text>
              </Link>
              <IconArrowForward />

              <Text
                component="a"
                sx={{
                  cursor: 'pointer',
                  color: 'white',
                  ':hover': {
                    color: '#E16247',
                    fontWeight: 500,
                  },
                }}
              >
                About Us
              </Text>
            </Flex>
          </Box>
        </Container>
      </Flex>
      <Container size="xl">
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
                      fz={{ base: 24, md: 36 }}
                      mb={18}
                      lh={'1.5em'}
                    >
                      About Girls 4 Leadership
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      lh={'24px'}
                      sx={{ width: '100%', maxWidth: '470px' }}
                    >
                      inappropriate behavior is often laughed off as “boys will
                      be boys,” women face higher conduct standards especially
                      in the workplace. That’s why it’s crucial that, as women,
                      our behavior on the job is beyond reproach. inappropriate
                      behavior is often laughed.
                    </Text>
                  </Box>
                  <Grid gutterLg={20}>
                    <Grid.Col md={4} sm={12}>
                      <Box sx={{ border: '1px solid #eeeeee' }} py={30} px={15}>
                        <Flex columnGap={20} direction={'column'} rowGap={10}>
                          <IconDatabase
                            color={
                              colorScheme === 'dark' ? '#c4c4c4' : '#e25d24'
                            }
                          />
                          <Box>
                            <Text fw={600} mb={5} fz={24}>
                              $2.5M
                            </Text>
                            <Text
                              fw={300}
                              color={
                                colorScheme === 'dark' ? '#c4c4c4' : '#777777'
                              }
                            >
                              Total Donation
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Grid.Col>

                    <Grid.Col md={4} sm={12}>
                      <Box sx={{ border: '1px solid #eeeeee' }} py={30} px={15}>
                        <Flex columnGap={20} direction={'column'} rowGap={10}>
                          <IconBook
                            color={
                              colorScheme === 'dark' ? '#c4c4c4' : '#e25d24'
                            }
                          />
                          <Box>
                            <Text fw={600} mb={5} fz={24}>
                              1465
                            </Text>
                            <Text
                              fw={300}
                              color={
                                colorScheme === 'dark' ? '#c4c4c4' : '#777777'
                              }
                            >
                              Total Projects
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Grid.Col>
                    <Grid.Col md={4} sm={12}>
                      <Box sx={{ border: '1px solid #eeeeee' }} py={30} px={15}>
                        <Flex columnGap={20} direction={'column'} rowGap={10}>
                          <IconUsers
                            color={
                              colorScheme === 'dark' ? '#c4c4c4' : '#e25d24'
                            }
                          />
                          <Box>
                            <Text fw={600} mb={5} fz={24}>
                              3950
                            </Text>
                            <Text
                              fw={300}
                              color={
                                colorScheme === 'dark' ? '#c4c4c4' : '#777777'
                              }
                            >
                              Total Volunteers
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
      </Container>
    </Box>
  );
};

export default AboutUs;
