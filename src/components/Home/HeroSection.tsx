/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Box, Container, Flex, Modal, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Girls4leadershipLogo from 'components/Icons/Girls4leadershipLogo';
import IconModalClose from 'components/Icons/IconModalClose';

const HeroSection = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
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
                  We are inspring a generstion of female leaders.
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
                  Leadership does not have a gender
                </Box>
                <Box sx={{ fontSize: 16, lineHeight: '24px' }} fw={300} mb={25}>
                  Gilrs 4 Leadership is increasing girls skills and capacity to
                  be leaders.<br></br> When girls leads we rise althogether.
                </Box>
                <Flex align={'center'} columnGap={20} justify={'center'}>
                  <BtnMain
                    component="a"
                    sx={{ zIndex: 1 }}
                    onClick={() => setOpenModal(true)}
                  >
                    DONATE NOW
                  </BtnMain>
                  <BtnWhite
                    component="a"
                    sx={{ zIndex: 1 }}
                    onClick={() => router.push('/blog')}
                  >
                    VIEW ACTIVITY
                  </BtnWhite>
                </Flex>
              </Box>
            </motion.div>
          </Container>
        </Flex>
      </Box>

      <ReformedModal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        fullScreen
        withCloseButton={false}
        title={
          <Flex
            justify={'space-between'}
            align={'center'}
            sx={{ width: '100%' }}
          >
            <Girls4leadershipLogo />
            <IconModalClose onclick={() => setOpenModal(false)} />
          </Flex>
        }
      >
        <Text
          fw={800}
          m={0}
          ta="center"
          tt={'uppercase'}
          fs={'italic'}
          fz={{ base: '16px', lg: '18px' }}
        >
          Donation form
        </Text>
        <Box mt={20}>
          <Stack mt={20} fw={600} spacing={20}>
            <Box>Transfer to: 0301030...</Box>
            <Box>Bank Name: Access Bank Plc</Box>
            <Box>Account Name: Girls4Leadership</Box>
          </Stack>
        </Box>
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
