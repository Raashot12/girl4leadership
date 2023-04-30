/* eslint-disable no-unneeded-ternary */
import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Text,
  TextInput,
  Textarea,
  useMantineColorScheme,
} from '@mantine/core';
import AOSInit from 'components/Shared/AOSInit';
import { container, child } from 'components/AboutUs/AboutUs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowForward, IconSend } from '@tabler/icons';
import { IoMdMail } from 'react-icons/io';

const text = 'Contact Us';
const ContactUs = () => {
  const { colorScheme } = useMantineColorScheme();
  AOSInit({
    disable: false,
  });
  return (
    <>
      <Box mt={77}>
        {' '}
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
              transform: 'translateY(38px)',
              zIndex: -1,
              background:
                'url(https://res.cloudinary.com/rashot/image/upload/v1680009725/julian-hochgesang-Dkn8-zPIbwo-unsplash_iud5cf.webp) no-repeat scroll center center',
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
                  Contact Us
                </Text>
              </Flex>
            </Box>
          </Container>
        </Flex>
        <Container size="xl">
          <Box
            sx={{ textAlign: 'center' }}
            py={50}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Flex align={'center'} justify={'center'} columnGap={12}>
              <Text fw={500}>Email</Text>
              <IoMdMail />
            </Flex>
            <Text
              color="#E25D24"
              fw={400}
              component="a"
              className="gmail_address_clicked"
              href="mailto:girls4leadership@gmail.com"
            >
              girls4leadership@gmail.com
            </Text>
          </Box>
        </Container>
        <Divider
          color={
            colorScheme === 'dark'
              ? 'rgb(217, 226, 239, 0.2)'
              : 'rgb(217, 226, 239, 0.5)'
          }
        />
        <Container size="xl">
          <Box
            sx={{ textAlign: 'center' }}
            py={{ base: 40, sm: 60, lg: 80 }}
            w={{ base: '100%', sm: '80%' }}
            mx={'auto'}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Text
              sx={{ fontWeight: 700, lineHeight: '29px' }}
              fz={{ base: 20, sm: 24, md: 29 }}
              mb={20}
            >
              Let us hear from you directly!
            </Text>
            <Text
              sx={{ fontWeight: 400, lineHeight: '29px' }}
              fz={{ base: 20, md: 30, lg: 30 }}
              lh={{ base: '36px', sm: '46px' }}
            >
              We always want to hear from you! Let us know how we can best help
              you and we will do our very best.
            </Text>
          </Box>
          <Box component="form" pb={50}>
            <Grid gutter={25}>
              <Grid.Col sm={6}>
                <TextInput
                  withAsterisk
                  placeholder="Full Name"
                  sx={{
                    '&.mantine-Input-input:focus-within': {
                      borderColor: '#aeadad',
                    },
                    '& .mantine-Input-input:focus': {
                      borderColor: '#c4c4c4',
                    },
                    '& .mantine-Input-input': {
                      background: colorScheme === 'dark' ? '#242629' : 'none',
                      color: colorScheme === 'dark' ? '#c4c4c4' : '#051438',
                      fontWeight: 400,
                    },
                  }}
                ></TextInput>
              </Grid.Col>
              <Grid.Col sm={6}>
                <TextInput
                  withAsterisk
                  placeholder="Email"
                  sx={{
                    '&.mantine-Input-input:focus-within': {
                      borderColor: '#aeadad',
                    },
                    '& .mantine-Input-input:focus': {
                      borderColor: '#c4c4c4',
                    },
                    '& .mantine-Input-input': {
                      background: colorScheme === 'dark' ? '#242629' : 'none',
                      color: colorScheme === 'dark' ? '#c4c4c4' : '#051438',
                      fontWeight: 400,
                    },
                  }}
                ></TextInput>
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  placeholder="Type message"
                  sx={{
                    '& .mantine-Textarea-input': {
                      height: 78,
                    },
                    '& .mantine-Input-input:focus': {
                      borderColor: '#aeadad',
                    },
                    '& .mantine-Input-input': {
                      background: colorScheme === 'dark' ? '#242629' : 'none',
                      color: colorScheme === 'dark' ? '#c4c4c4' : '#051438',
                      fontWeight: 400,
                    },
                  }}
                />
              </Grid.Col>
              <Grid.Col
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  sx={{
                    '&.mantine-Button-root': {
                      background: '#E25D24',
                      height: 40,
                    },
                    '& .mantine-Button-label': {
                      fontSize: 16,
                      fontWeight: 600,
                    },
                    borderRadius: '10px',
                  }}
                  rightIcon={
                    <IconSend style={{ cursor: 'pointer' }} size={16} />
                  }
                >
                  Send Message
                </Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;
