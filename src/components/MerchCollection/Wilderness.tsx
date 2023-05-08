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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { brand } from './staticData';
import SwiperPrevBtn from './SwiperPrevBtn';
import SwiperNextBtn from './SwiperNextBtn';

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
          <Text className={classes.text}>WILDERNESS</Text>
          <Text className={classes.text}>PRINTED TEES</Text>
          <Text className={classes.text}>STARTING $12</Text>
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

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              padding: '0 15px',
            }}
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={25}
              slidesPerView={6}
              breakpoints={{
                365: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
            >
              <SwiperPrevBtn />
              {brand.map((item) => (
                <SwiperSlide
                  key={item.id}
                  style={{
                    width: '167.5px',
                    height: '140px',
                    display: 'grid',
                    placeContent: 'center',
                  }}
                >
                  <Image src={item.brand} />
                </SwiperSlide>
              ))}
              <SwiperNextBtn />
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const useStyle = createStyles((theme) => ({
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

export default Wilderness;
