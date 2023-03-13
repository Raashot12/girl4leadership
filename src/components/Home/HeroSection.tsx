/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex } from '@mantine/core';
import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const HeroSection = () => {
  return (
    <Box
      mt={70}
      sx={{
        '@media (max-width: 567px)': {
          minHeight: '50px',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          minHeight: '754px',
          display: 'flex',
          alignItems: 'center',
          '@media (max-width: 567px)': {
            minHeight: '671px',
          },
        }}
      >
        <HeroBackground>
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
                <Box fw={600}>WE NEED YOUR HELP TO SERVE THE PEOPLE</Box>
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
                  Help for victims affcted by flood
                </Box>
                <Box sx={{ fontSize: 14, lineHeight: '24px' }} fw={300} mb={25}>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the<br></br> difference in price. You may see
                  some for as low as $.17 each.
                </Box>
                <Flex align={'center'} columnGap={20} justify={'center'}>
                  <BtnMain component="a" sx={{ zIndex: 1 }}>
                    DONATE NOW
                  </BtnMain>
                  <BtnWhite component="a" sx={{ zIndex: 1 }}>
                    VIEW ACTIVITY
                  </BtnWhite>
                </Flex>
              </Box>
            </motion.div>
          </Container>
        </HeroBackground>
      </Box>
    </Box>
  );
};

export default HeroSection;

const HeroBackground = styled(Box as any)`
  background: url(https://res.cloudinary.com/rashot/image/upload/v1678442773/258515A2-ABB0-4372-B79A-AE8A7162EAA7_rw7xdv_sl74rs.webp)
    no-repeat scroll center center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  bottom: 0;
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 754px;
  display: flex;
  align-items: center;
  @media (max-width: 567px) {
    min-height: 673px;
  }
`;
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
