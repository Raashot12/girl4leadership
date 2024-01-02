/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Grid,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
  Textarea,
  useMantineColorScheme,
} from '@mantine/core';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import Girls4leadershipLogo from 'components/Icons/Girls4leadershipLogo';
import IconModalClose from 'components/Icons/IconModalClose';
import axios, { AxiosError } from 'axios';
import { IconCopy, IconSend } from '@tabler/icons';
import { validateForErrors } from 'util/validation';
import IconDonate from 'components/Icons/IconDonate';
import { child, container } from 'components/AboutUs/AboutUs';
import IconBankTransfer from 'components/Icons/IconBankTransfer';
import CopyToClipboard from 'react-copy-to-clipboard';
import Image from 'next/image';

const text = 'Donate';

const payMethods = [
  {
    id: 1,
    gatewayName: 'Bank transfer',
    subtitle: 'Pay via Bank transfer',
    icon: <IconBankTransfer />,
  },
];
const PaymentGatewayContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border: ${(props) =>
    props.isActive ? `2px dotted #FF8B00` : `2px dotted #DFE2E9`};
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isActive ? `0px 6px 20px 0px rgba(11, 12, 125, 0.12)` : `none`};
  background: #ffffff;
  width: 100%;
  margin-bottom: 19px;
  cursor: pointer;
  &:hover {
    border: 2px dotted #ff8b00;
    box-shadow: 0px 6px 20px rgba(11, 12, 125, 0.12);
  }
  flex-wrap: wrap;
  margin-top: 12px;
`;
const HeroSection = ({
  title,
  mainTitle,
  subject,
  buttonTextOne,
  buttonTextTwo,
}: {
  title: string;
  subject: string;
  heroImage: string;
  mainTitle: string;
  buttonTextOne: string;
  buttonTextTwo: string;
}) => {
  const router = useRouter();
  const [activePayment, setActivePayment] = useState(0);
  const { colorScheme } = useMantineColorScheme();
  const [contact, setContact] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isCopied, setIsCopied] = useState(false);

  const [isSubmitting, setIsubmitting] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset copy status after 2 seconds
  };
  const isActive = (activeTextId: number) => activeTextId === activePayment;
  const handleClick = (arg: number) => {
    setActivePayment(arg);
  };
  const isQueryAvailable = Object.keys(router.query).length !== 0;
  const handleFormSubmit = async (e: React.FormEvent) => {
    if (Object.keys(validateForErrors(contact, setErrors)).length === 0) {
      setIsubmitting(true);
      e.preventDefault();
      const baseId = 'appYi5UJUgW3d1yGc';
      const tableName = 'Donation';

      const endpoint = `https://api.airtable.com/v0/${baseId}/${tableName}`;
      const headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        'Content-Type': 'application/json',
      };
      const serializedData = {
        FullName: contact.fullName,
        Email: contact.email,
        Message: contact.message,
      };
      try {
        const response = await axios.post(
          endpoint,
          { fields: serializedData },
          { headers }
        );

        if (response.status === 200) {
          Swal.fire(
            'Submitted Successfully!',
            'You clicked the button!',
            'success'
          );
          setIsubmitting(false);
          setContact({
            fullName: '',
            email: '',
            message: '',
          });
        }
      } catch (error) {
        const axiosError = error as AxiosError;
        Swal.fire(`${axiosError.message}`, 'You clicked the button!', 'error');
        setIsubmitting(false);
      }
    }
  };

  return (
    <>
      <Box mt={76}>
        <Flex
          align="center"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            minHeight: '730px',
            background: '#060b20',
            zIndex: 1,
            '@media (max-width: 567px)': {
              minHeight: '671px',
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              left: 0,
              height: '155%',
              width: '100%',
              opacity: 0.3,
              transform: 'translateY(18px)',
              zIndex: -1,
              background:
                'url(https://res.cloudinary.com/rashot/image/upload/v1680015688/258515A2-ABB0-4372-B79A-AE8A7162EAA7_1_tn48bh.webp) no-repeat scroll center center',
            }}
          ></Box>
          <Container size="xl">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              initial={{ opacity: 0, scale: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', color: 'white' }}>
                <Box fw={600} sx={{ textTransform: 'uppercase' }}>
                  {title}
                </Box>
                <Box
                  sx={{
                    fontSize: 48,
                    '@media (max-width: 767px)': {
                      fontSize: 30,
                    },
                  }}
                  mb={20}
                  fw={600}
                >
                  {mainTitle}
                </Box>
                <Box
                  sx={{ fontSize: 16, lineHeight: '24px' }}
                  fw={300}
                  mb={25}
                  dangerouslySetInnerHTML={{ __html: subject }}
                ></Box>
                <Flex align={'center'} columnGap={20} justify={'center'}>
                  <BtnMain
                    component="a"
                    sx={{ zIndex: 1 }}
                    onClick={() => {
                      router.push({
                        query: {
                          donate: 'form',
                        },
                      });
                    }}
                  >
                    {buttonTextOne}
                  </BtnMain>
                  <BtnWhite
                    component="a"
                    sx={{ zIndex: 1 }}
                    onClick={() => router.push('/blog')}
                  >
                    {buttonTextTwo}
                  </BtnWhite>
                </Flex>
              </Box>
            </motion.div>
          </Container>
        </Flex>
      </Box>

      <ReformedModal
        opened={isQueryAvailable && router.query.donate === 'form'}
        onClose={() => {
          router.push({ query: {} });
        }}
        fullScreen
        withCloseButton={false}
        title={
          <Container size={'xl'}>
            <Flex
              justify={'space-between'}
              align={'center'}
              sx={{ width: '100%' }}
            >
              <Box sx={{ visibility: 'hidden' }}>
                <Girls4leadershipLogo />
              </Box>
              <IconModalClose
                onclick={() => {
                  router.push({ query: {} });
                }}
              />
            </Flex>
          </Container>
        }
      >
        <Container size={'xl'}>
          <Group>
            <Text
              fw={800}
              m={0}
              ta="center"
              tt={'uppercase'}
              fs={'italic'}
              fz={{ base: '16px', lg: '18px' }}
              color={colorScheme === 'dark' ? 'white' : '#051438'}
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
            </Text>

            <IconDonate />
          </Group>
          <Box mt={20}>
            <Box component="form" pb={50}>
              <Grid gutter={25}>
                <Grid.Col sm={6}>
                  <TextInput
                    withAsterisk
                    placeholder="Full Name"
                    name={'fullName'}
                    onChange={handleChange}
                    error={errors?.fullName}
                    value={contact.fullName}
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
                    name={'email'}
                    error={errors?.email}
                    onChange={handleChange}
                    value={contact.email}
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
                    name="message"
                    value={contact.message}
                    error={errors?.message}
                    onChange={handleChange}
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
                    onClick={handleFormSubmit}
                    loading={isSubmitting}
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
                    Send
                  </Button>
                </Grid.Col>
              </Grid>
            </Box>
            <Text fw={600}>Choose payment method</Text>
            {payMethods.map((value) => {
              return (
                <PaymentGatewayContainer
                  isActive={isActive(value.id)}
                  key={value.id}
                  onClick={() => handleClick(value.id)}
                >
                  <Group spacing={12}>
                    {value.icon}
                    <Stack spacing={0}>
                      <Box
                        sx={{
                          color: colorScheme === 'dark' ? '#C1C2C5' : '#051438',
                          fontWeight: 500,
                        }}
                      >
                        {value.gatewayName}
                      </Box>
                      <Box fz={13} color={'#677597'} fw={400}>
                        {value.subtitle}
                      </Box>
                    </Stack>
                  </Group>
                </PaymentGatewayContainer>
              );
            })}
            <Collapse in={activePayment === 1}>
              <Group align="center">
                <Image
                  src="https://res.cloudinary.com/drhgdrlef/image/upload/v1704186880/GTBank-plc-Logo-web2_czldzb.jpg"
                  alt="logo"
                  width={'55'}
                  height={'55'}
                />
                <Stack spacing={2}>
                  <Text fw={800}>Account Name: Girls 4 Leadership</Text>
                  <Group>
                    <Text fw={500}>Account Number: 0213189533</Text>
                    <CopyToClipboard text={'0213189533'} onCopy={handleCopy}>
                      {!isCopied ? (
                        <Flex
                          align={'center'}
                          justify={'center'}
                          sx={{ cursor: 'pointer' }}
                          onCopy={handleCopy}
                        >
                          <IconCopy />
                        </Flex>
                      ) : (
                        <Text fw={500}>{'Copied!'}</Text>
                      )}
                    </CopyToClipboard>
                  </Group>
                </Stack>
              </Group>
            </Collapse>
          </Box>
        </Container>
      </ReformedModal>
    </>
  );
};

export default HeroSection;

const BtnMain = styled(Box as any)`
  line-height: 40px;
  display: inline-block;
  padding: 0px 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  background: #e25d24;
  color: #fff;
  border: 1px solid #e25d24 !important;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: #e25d24;
    text-decoration: none;
    outline: none;
  }
  @media (max-width: 567px) {
    padding: 0px 16px;
  }
`;
const BtnWhite = styled(Box as any)`
  border: 1px solid #635e68 !important;
  display: inline-block;
  padding: 0px 30px;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.1);
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
  &:hover {
    color: #fff;
    background: #e25d24;
    border-color: #e25d24;
  }
  @media (max-width: 567px) {
    padding: 0px 16px;
  }
`;
export const ReformedModal = styled(Modal)<{ colorMode?: string }>`
  & .mantine-Paper-root {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      width: 99%;
    }
  }
  & .mantine-Modal-title {
    width: 100%;
    margin-right: 4px;
  }
  & .mantine-Modal-header {
    padding-top: 0;
  }
  & .mantine-Modal-body {
    max-height: calc(100vh - 210px);

    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #85878b;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #85878b;
    }
  }
`;
