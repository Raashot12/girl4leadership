import { Container, Box, Flex, Text, Grid, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowForward } from '@tabler/icons';
import Animation from 'components/Shared/Animation/AnimationWrapper';
import React from 'react';
import Link from 'next/link';
import { AboutUsType } from 'types/merchSection';

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
const AboutUs = ({ about }: { about: AboutUsType }) => {
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
                      <Text
                        fz={16}
                        fw={300}
                        lh={'24px'}
                        sx={{ width: '100%', maxWidth: '600px' }}
                        dangerouslySetInnerHTML={{ __html: about?.content }}
                      ></Text>
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
                {about.summary.title}
              </Text>
            </Box>
            <Text
              fz={16}
              fw={300}
              lh={'24px'}
              dangerouslySetInnerHTML={{ __html: about.summary?.content }}
            ></Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
