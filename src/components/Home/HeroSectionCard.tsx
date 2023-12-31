import { Grid, Text, Box, Flex, Divider } from '@mantine/core';
import React from 'react';
import Animation from '../Shared/Animation/AnimationWrapper';

const HeroSectionCard = ({
  cardData,
}: {
  cardData: {
    ourFuture: {
      title: string;
      content: string;
    };
    ourVision: {
      title: string;
      content: string;
    };
    ourMission: {
      title: string;
      content: string;
    };
  };
}) => {
  return (
    <Box
      mt={{ lg: -60, base: 20 }}
      sx={{ zIndex: 2, position: 'relative' }}
      mx={'auto'}
    >
      <Grid sx={{ color: 'white' }} gutterLg={30}>
        <Grid.Col sm={6} md={4}>
          <Animation
            direction="top"
            width="auto"
            duration={'1.2s'}
            minScreenWidth="960px"
            animate={false}
            minScreenStyle={{
              animate: true,
            }}
          >
            <Box sx={{ background: '#e7c12d', color: '#FFFFFF' }} p={30}>
              <Flex align="center" columnGap={20}>
                <Box>
                  <Text mb={15}>{cardData.ourMission.title}</Text>
                  <Text>{cardData.ourMission.content}</Text>
                </Box>
                <Divider orientation="vertical" size="sm" color="#FFFFF" />
              </Flex>
            </Box>
          </Animation>
        </Grid.Col>

        <Grid.Col sm={6} md={4}>
          <Animation
            direction="top"
            width="auto"
            duration={'1.8s'}
            minScreenWidth="960px"
            animate={false}
            minScreenStyle={{
              animate: true,
            }}
          >
            <Box sx={{ background: '#e25d24', color: '#FFFFFF' }} p={30}>
              <Flex align="center" columnGap={20}>
                <Box>
                  <Text mb={15}>{cardData.ourVision.title}</Text>
                  <Text>{cardData.ourVision.content}</Text>
                </Box>
                <Divider orientation="vertical" size="sm" color="#FFFFF" />
              </Flex>
            </Box>
          </Animation>
        </Grid.Col>
        <Grid.Col sm={6} md={4}>
          <Animation
            direction="top"
            width="auto"
            minScreenWidth="960px"
            duration={'2.2s'}
            animate={false}
            minScreenStyle={{
              animate: true,
            }}
          >
            <Box sx={{ background: '#91d214', color: '#FFFFFF' }} p={30}>
              <Flex align="center" columnGap={20}>
                <Box>
                  <Text mb={15}>{cardData.ourFuture.title}</Text>
                  <Text>{cardData.ourFuture.content}</Text>
                </Box>
                <Divider orientation="vertical" size="sm" color="#FFFFF" />
              </Flex>
            </Box>
          </Animation>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default HeroSectionCard;
