/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  createStyles,
  Image,
  useMantineColorScheme,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { brand } from './staticData';
import Animation from '../Shared/Animation/AnimationWrapper';

const useStyle = createStyles(() => ({
  text: {
    fontSize: '60px',
    fontWeight: 600,
    letterSpacing: '8px',
    color: '#ffff',
    lineHeight: 1,
    '@media (max-width:767px)': {
      fontSize: '30px',
    },
  },
  iconWrap: {
    background: '#ffff',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'grid',
    placeContent: 'center',
    cursor: 'pointer',
  },
}));

const Wilderness = (): JSX.Element => {
  const { classes } = useStyle();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box>
      <Flex
        align="center"
        sx={{
          position: 'relative',
          top: 0,
          bottom: 0,
          overflow: 'hidden',
          width: '100%',
          height: '507px',
          background: '#060b20',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            left: 0,
            minHeight: '507px',
            width: '100%',
            zIndex: -1,
            background:
              'url(https://preview.codeless.co/june/default/wp-content/uploads/2017/11/1-compressed.jpg) no-repeat',
            backgroundPosition: 'left top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundBlendMode: 'normal',
          }}
        ></Box>

        <Container size="xl" sx={{ textAlign: 'center' }}>
          <img
            src="https://preview.codeless.co/june/default/wp-content/uploads/2017/11/vc.png"
            style={{ marginBottom: '15px' }}
          />
          <Animation
            direction="right"
            width="auto"
            duration={'1.2s'}
            minScreenWidth="960px"
            animate={true}
            minScreenStyle={{
              animate: true,
            }}
          >
            <Box>
              <Text className={classes.text}>WILDERNESS</Text>
              <Text className={classes.text}>PRINTED TEES</Text>
              <Text className={classes.text}>STARTING $12</Text>
            </Box>
          </Animation>
          <img
            src="https://preview.codeless.co/june/default/wp-content/uploads/2017/11/vc.png"
            style={{ marginTop: '15px' }}
          />
          <br />
          <Button
            sx={{
              marginTop: '20px',
              background: '#9aab7d',
              '.mantine-Button-label': {
                fontSize: '14px',
                fontWeight: 600,
              },
              ':hover': {
                background: '#9aab7d',
              },
            }}
          >
            SHOP COLLECTION
          </Button>
        </Container>
      </Flex>
      <Container size="xl">
        <Box sx={{ padding: '30px 0' }}>
          <Text
            sx={{
              textAlign: 'center',
              fontSize: '18px',
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: '0.4px',
              color: colorScheme === 'dark' ? '#ffff' : '#262a2c',
              marginBottom: '30px',
            }}
          >
            SHOP BY BRAND
          </Text>

          <Carousel
            withIndicators={false}
            height={140}
            slideSize="180.5px"
            slideGap="lg"
            loop
            align="center"
            breakpoints={[
              { maxWidth: 'md', slideSize: '25%' },
              { maxWidth: 'sm', slideSize: '50%', slideGap: 10 },
            ]}
          >
            {brand.map((item) => (
              <Carousel.Slide key={item.id}>
                <Image src={item.brand} height={140} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};
export default Wilderness;
