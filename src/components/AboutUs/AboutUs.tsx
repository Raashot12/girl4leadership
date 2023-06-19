import { Container, Box, Flex, Text, Grid, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowForward } from '@tabler/icons';
import Animation from 'components/Shared/Animation/AnimationWrapper';
import React from 'react';
import Link from 'next/link';

export const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};
export const child = {
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
const text = 'Who We Are';
const AboutUs = () => {
  return (
    <Box>
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
              opacity: 0.3,
              transform: 'translateY(-30px)',
              zIndex: -1,
              background:
                'url(https://res.cloudinary.com/rashot/image/upload/v1680009513/olga-subach-_Ua8fQ4H9Ew-unsplash_hizmi1.jpg) no-repeat scroll center center',
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
                  Who We Are
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
                    <Box mb={20}>
                      <Text fw={600} fz={{ base: 24, md: 36 }} lh={'1.5em'}>
                        About Girls 4 Leadership
                      </Text>
                      <Text
                        fz={14}
                        fw={300}
                        lh={'24px'}
                        sx={{ width: '100%', maxWidth: '600px' }}
                      >
                        The Girls 4 Leadership Initiative (G4L) is a
                        non-governmental organization that is dedicated to
                        developing and advancing the potential of women and
                        girls in Nigeria.
                      </Text>
                    </Box>
                    <Box>
                      <Text fz={14} fw={300} lh={'24px'}>
                        <Text fw={600} component="span">
                          1.1 Mission
                        </Text>
                        : Our mission is to build a generation of women and
                        girls who can steer up leadership positions at different
                        levels of life with our mantra as ‘building the next
                        generation of female leaders.
                      </Text>
                      <Text mt={10} fz={14} fw={300} lh={'24px'}>
                        <Text fw={600} component="span">
                          1.2 Vision
                        </Text>
                        : Our vision is to see a Nigeria that provides an
                        environment that enables women and girls to thrive
                        without any form of gender limitations or hindrances.
                      </Text>
                      <Text mt={10} fz={14} fw={300} lh={'24px'}>
                        <Text fw={600} component="span">
                          1.3 Nature of our Activities
                        </Text>
                        : As a social community that wants to positively
                        influence our environment, our programs are
                        gender-centric with special emphasis on the promotion of
                        the welfare of the girl-child and women. We believe that
                        gender equality is central to development and thus, we
                        champion Goal 5 (Achieving gender equality and the
                        empowerment of women) of the sustainable development
                        goals as a catalyst for the achievement of the 17
                        Sustainable Development Goals by 2030.
                      </Text>
                    </Box>
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
            <Box>
              <Text fw={600} fz={16} mt={25}>
                Summary
              </Text>
            </Box>
            <Text fz={14} fw={300} lh={'24px'}>
              We work on projects and programs that are targetted at addressing
              the challenges of women and girls which hinders them from
              maximizing their potential.
            </Text>
            <Text fz={14} fw={300} lh={'24px'}>
              Girls 4 Leadership Initiative (G4L) imbibes a culture of inclusion
              which allows us to engage boys and men in our programs and
              projects.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
