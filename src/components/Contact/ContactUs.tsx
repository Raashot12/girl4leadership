import React from 'react';
import { Box, Container, Flex, Text } from '@mantine/core';
import { container, child } from 'components/AboutUs/AboutUs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowForward } from '@tabler/icons';
import { IoMdMail } from 'react-icons/io';

const text = 'Contact Us';
const ContactUs = () => {
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
              opacity: 0.25,
              transform: 'translateY(38px)',
              zIndex: -1,
              background:
                'url(https://res.cloudinary.com/rashot/image/upload/v1679287935/afdf_xagteq.jpg) no-repeat scroll center center',
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
              href="mailto:girls4leadership@gmail.com"
            >
              girls4leadership@gmail.com
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;
