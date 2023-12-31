/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { Box, Container, Grid, Text } from '@mantine/core';
import React from 'react';
import { IconCup, IconDiamond } from '@tabler/icons';
import Animation from '../Shared/Animation/AnimationWrapper';

const FeaturedArea = styled(Box as any)`
  background: #04091e;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 651px;
  z-index: 1;
`;
const BackgroundOverLay = styled(Box as any)`
  background: url('https://res.cloudinary.com/rashot/image/upload/v1678171091/feature-bg.jpg_kvjvuk.webp')
    no-repeat scroll center center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 125%;
  bottom: 0;
  z-index: -1;
  opacity: 0.25;
`;
const FeaturedItem = styled(Box as any)`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 50px 37px 35px 37px;
  border: 1px solid #6c6d77;
  color: #fff;
  @media (max-width: 991px) {
    padding: 25px 30px 25px 30px;
    max-width: 380px;
    width: 100%;
    margin: auto;
  }
`;
const OurKeyFeatures = ({
  keyfeatures,
}: {
  keyfeatures: {
    title: string;
    features: {
      title: string;
      subtitle: string;
    }[];
    subTitle: string;
  };
}) => {
  return (
    <>
      <FeaturedArea pt={{ base: 40, sm: 80 }} pb={30}>
        <BackgroundOverLay></BackgroundOverLay>

        <Container size="xl">
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
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: '690px',
                margin: '0px auto 75px',
              }}
            >
              <Text fw={600} fz={{ base: 24, md: 36 }} mb={8} color={'#fff'}>
                {keyfeatures.title}
              </Text>
              <Text fz={14} color={'#fff'}>
                {keyfeatures.subTitle}
              </Text>
            </Box>
          </Animation>
          <Grid gutterLg={20}>
            <Grid.Col md={4} sm={12}>
              <Animation
                direction="top"
                width="auto"
                minScreenWidth="960px"
                duration={'1.2s'}
                animate={false}
                minScreenStyle={{
                  animate: true,
                }}
              >
                <FeaturedItem sx={{ color: '#fff' }}>
                  <IconDiamond size={30} style={{ marginBottom: 14 }} />
                  <Text fw={600} fz={18} tt={'uppercase'} mb={15}>
                    {keyfeatures.features[0].title}
                  </Text>
                  <Text color=" #8a8888">
                    {' '}
                    {keyfeatures.features[0].subtitle}
                  </Text>
                </FeaturedItem>
              </Animation>
            </Grid.Col>
            <Grid.Col md={4} sm={12}>
              <Animation
                direction="top"
                width="auto"
                minScreenWidth="960px"
                duration={'1.8s'}
                animate={false}
                minScreenStyle={{
                  animate: true,
                }}
              >
                <FeaturedItem>
                  <IconCup size={30} style={{ marginBottom: 14 }} />
                  <Text fw={600} fz={18} tt={'uppercase'} mb={15}>
                    {keyfeatures.features[1].title}
                  </Text>
                  <Text color=" #8a8888">
                    {keyfeatures.features[1].subtitle}
                  </Text>
                </FeaturedItem>
              </Animation>
            </Grid.Col>
            <Grid.Col md={4} sm={12}>
              <Animation
                direction="top"
                width="auto"
                minScreenWidth="960px"
                duration={'2.5s'}
                animate={false}
                minScreenStyle={{
                  animate: true,
                }}
              >
                <FeaturedItem>
                  <IconDiamond size={30} style={{ marginBottom: 14 }} />
                  <Text fw={600} fz={18} tt={'uppercase'} mb={15}>
                    {keyfeatures.features[2].title}
                  </Text>
                  <Text color=" #8a8888">
                    {keyfeatures.features[2].subtitle}
                  </Text>
                </FeaturedItem>
              </Animation>
            </Grid.Col>
          </Grid>
        </Container>
      </FeaturedArea>
    </>
  );
};

export default OurKeyFeatures;
