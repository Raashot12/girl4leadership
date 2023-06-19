/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Container,
  Box,
  Grid,
  useMantineColorScheme,
  Text,
  Image,
  TextInput,
  Flex,
  Divider,
} from '@mantine/core';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { IconSend } from '@tabler/icons';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const ICON_LINKS: any = [
  {
    name: AiFillInstagram,
    url: '/',
  },
  {
    name: FaFacebookF,
    url: '/',
  },
  {
    name: BsTwitter,
    url: '/',
  },
  {
    name: FaLinkedin,
    url: '/',
  },
];
const instaFeedImages = [
  {
    id: 1,
    images:
      'https://res.cloudinary.com/rashot/image/upload/v1678632846/A4CBA781-3603-4C96-A99D-0BA6B327C4A9_ciflew.jpg',
  },
  {
    id: 2,
    images:
      'https://res.cloudinary.com/rashot/image/upload/v1678632846/9242EDE7-3A06-46AA-9DFC-0E038124CFD8_krrebe.jpg',
  },
  {
    id: 3,
    images:
      'https://res.cloudinary.com/rashot/image/upload/v1678632846/C09662A8-F55F-46FE-8B22-A74ADB1AA304_wrcers.jpg',
  },
  {
    id: 4,
    images:
      'https://res.cloudinary.com/rashot/image/upload/v1678632846/IMG_1467_qchp9m.jpg',
  },
  {
    id: 5,
    images:
      'https://preview.colorlib.com/theme/kindity/img/instagram/Image-01.jpg.webp',
  },
  {
    id: 6,
    images:
      'https://res.cloudinary.com/rashot/image/upload/v1678632846/09BE6364-9930-416D-A921-7D7DE5D20C4B_va96n1.jpg',
  },
  {
    id: 7,
    images:
      'https://preview.colorlib.com/theme/kindity/img/instagram/Image-07.jpg.webp',
  },
  {
    id: 8,
    images:
      'https://preview.colorlib.com/theme/kindity/img/instagram/Image-03.jpg.webp',
  },
];
const PageSocialMedia = ({ children }: { children: React.ReactElement }) => {
  return (
    <Flex
      sx={{ borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.3)' }}
      align="center"
      justify="center"
      w={22}
      h={22}
    >
      {children}
    </Flex>
  );
};
const Footer = () => {
  const { colorScheme } = useMantineColorScheme();
  const [email, setEmail] = useState('');
  const [, setIsSummitted] = useState(false);
  const getYear = new Date().getFullYear();
  const router = useRouter();
  const handleSubmit = () => {
    if (!email) return;
    setEmail('');
    setIsSummitted(true);
    Swal.fire(
      'Newsletter Notification!',
      'This is to notify you that your email is successfully submitted!',
      'success'
    );
  };
  const pathPushTo = (value: string) => {
    router.push(`/${value}`);
  };
  return (
    <Box
      py={{ base: 70, sm: 145 }}
      sx={{
        background: colorScheme === 'dark' ? '#232324' : '#E25D24',
        color: 'white',
        overflowX: 'hidden',
      }}
    >
      <Container size={'xl'}>
        <Grid gutter={40}>
          <Grid.Col sm={6} md={3}>
            <Text fw={600} mb={28} tt={'uppercase'}>
              About Agency
            </Text>
            <Text
              fw={300}
              fz={14}
              lh={'26px'}
              sx={{ color: colorScheme === 'dark' ? '#c4c4c4' : '#fffff' }}
            >
              The Girls 4 Leadership Initiative (G4L) is a non-governmental
              organization that is dedicated to developing and advancing the
              potential of women and girls in Nigeria.
            </Text>
          </Grid.Col>
          <Grid.Col sm={6} md={3}>
            <Text fw={600} mb={28}>
              NAVIGATION LINKS
            </Text>
            <Grid
              gutter={25}
              sx={{
                color: colorScheme === 'dark' ? '#c4c4c4' : '#fffff',
                cursor: 'pointer',
              }}
            >
              <Grid.Col
                xs={6}
                sx={{
                  '&.mantine-Grid-col': {
                    flexBasis: '50%',
                  },
                }}
              >
                <Text
                  component="a"
                  fw={300}
                  fz={14}
                  lh={'24px'}
                  onClick={() => pathPushTo('')}
                >
                  Home
                </Text>
              </Grid.Col>
              <Grid.Col
                xs={6}
                sx={{
                  '&.mantine-Grid-col': {
                    flexBasis: '50%',
                  },
                }}
              >
                <Text
                  component="a"
                  fw={300}
                  fz={14}
                  lh={'24px'}
                  onClick={() => pathPushTo('who-we-are')}
                >
                  Who We Are
                </Text>
              </Grid.Col>
              <Grid.Col
                xs={6}
                sx={{
                  '&.mantine-Grid-col': {
                    flexBasis: '50%',
                  },
                }}
              >
                {' '}
                <Text
                  component="a"
                  fw={300}
                  fz={14}
                  lh={'24px'}
                  onClick={() => pathPushTo('gallery')}
                >
                  Gallery
                </Text>
              </Grid.Col>
              <Grid.Col
                xs={6}
                sx={{
                  '&.mantine-Grid-col': {
                    flexBasis: '50%',
                  },
                }}
              >
                {' '}
                <Text component="a" fw={300} fz={14} lh={'24px'}>
                  Blog
                </Text>
              </Grid.Col>
              <Grid.Col
                xs={6}
                sx={{
                  '&.mantine-Grid-col': {
                    flexBasis: '50%',
                  },
                }}
              >
                {' '}
                <Text
                  component="a"
                  fw={300}
                  fz={14}
                  lh={'24px'}
                  onClick={() => pathPushTo('merch-collection')}
                >
                  Merch Collections
                </Text>
              </Grid.Col>
              <Grid.Col
                xs={6}
                sx={{
                  '&.mantine-Grid-col': {
                    flexBasis: '50%',
                  },
                }}
              >
                {' '}
                <Text
                  component="a"
                  fw={300}
                  fz={14}
                  lh={'24px'}
                  onClick={() => pathPushTo('contact')}
                >
                  Contact
                </Text>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col sm={6} md={3}>
            <Text component="a" fw={600}>
              NEWSLETTER
            </Text>
            <Text
              sx={{ color: colorScheme === 'dark' ? '#c4c4c4' : '#fffff' }}
              lh={'24px'}
              fz={14}
              mt={28}
            >
              For business professionals caught between high OEM price and
              mediocre print and graphic output,
            </Text>
            <TextInput
              sx={{
                marginTop: 15,

                '.mantine-Input-input:focus-within': {
                  borderColor: '#c4c4c4',
                },
                '.mantine-Input-input': {
                  background: colorScheme === 'dark' ? '#25262B' : 'none',
                  color: colorScheme === 'dark' ? '#c4c4c4' : 'white',
                  height: '2.5rem',
                },
                '.mantine-Input-input::placeholder': {
                  color: colorScheme === 'dark' ? '#c4c4c4' : 'white',
                  fontSize: 14,
                },
              }}
              rightSection={
                <IconSend
                  style={{ cursor: 'pointer' }}
                  size={16}
                  onClick={handleSubmit}
                />
              }
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email Address"
              type="email"
            />{' '}
          </Grid.Col>
          <Grid.Col sm={6} md={3}>
            <Text component="a" fw={600}>
              INSTAFEED
            </Text>
            <Flex wrap={'wrap'} gap={10} mt={28}>
              {instaFeedImages.map((value) => {
                return (
                  <Box key={value.id}>
                    <Image src={value.images} alt="" width={58} height={58} />
                  </Box>
                );
              })}
            </Flex>
          </Grid.Col>
        </Grid>
        <Divider
          orientation="horizontal"
          mt={40}
          color={colorScheme === 'dark' ? '#c4c4c4' : 'white'}
          opacity={0.5}
        />
        <Flex
          mt={{ base: 40, sm: 60 }}
          justify={{ base: 'center', sm: 'space-between' }}
          wrap="wrap"
          rowGap={18}
          align={'center'}
        >
          <Text
            ta={'center'}
            fz={14}
            color={colorScheme === 'dark' ? '#c4c4c4' : 'white'}
          >
            Copyright ©{getYear} All rights reserved | This website is made with
            💖 by RashDev Solution
          </Text>
          <Flex align={'center'} columnGap={16}>
            {ICON_LINKS.map((value: any) => {
              return (
                <PageSocialMedia key={value.name}>
                  <value.name
                    style={{ cursor: 'pointer' }}
                    size={13}
                    color={colorScheme === 'dark' ? '#c4c4c4' : 'white'}
                  />
                </PageSocialMedia>
              );
            })}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
