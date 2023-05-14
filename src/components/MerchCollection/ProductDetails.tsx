/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Input,
  Rating,
  Text,
} from '@mantine/core';
// Import Swiper React components
import { SwiperSlide, Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { IconCheck, IconCircleCheck, IconHeart } from '@tabler/icons';
import { FaFacebookF, FaGoogle, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { labels } from './staticData';

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const [qty, setQty] = useState(1);
  return (
    <Box mt={97}>
      <Container size={'xl'}>
        <Grid gutter={50}>
          <Grid.Col md={6}>
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </Swiper>
            <Box py={40}>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Grid.Col>
          <Grid.Col md={6}>
            <Text component="a" sx={{ fontWeight: 400 }} fz={14}>
              Home
            </Text>
            <Text
              mt={10}
              mb={10}
              sx={{
                fontSize: '36px',
                lineHeight: 1.3,
                fontWeight: 600,
                '@media (max-width:767px)': {
                  fontSize: '18px',
                },
              }}
            >
              Flared Sleeve Blouse
            </Text>
            <Divider />
            <Text
              sx={{
                margin: '20px 0',
                fontSize: '24px',
                fontWeight: 600,
                '@media (max-width:767px)': { margin: '5px 0' },
              }}
            >
              $54
            </Text>
            <Box
              sx={{
                display: 'flex',
                '@media (max-width: 767px)': {
                  flexDirection: 'column',
                },
              }}
            >
              <Box
                sx={{
                  width: '100px',
                  borderRight: '1px solid #8b99a3',
                  display: 'flex',
                  '@media (max-width:767px)': {
                    borderRight: 'none',
                  },
                }}
              >
                <IconCircleCheck style={{ color: '#8aba56' }} />
                <Text
                  sx={{
                    marginLeft: '10px',
                  }}
                >
                  In Stock
                </Text>
              </Box>
              <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                <Rating defaultValue={2} />
                <Text
                  sx={{
                    marginLeft: '10px',
                    '@media (max-width: 767px)': {
                      marginLeft: '10px',
                    },
                  }}
                >
                  Write a Review?
                </Text>
              </Box>
            </Box>
            <Text
              sx={{
                margin: '16px 0',
                lineHeight: 1.4,
                color: '#8b99a3',
              }}
            >
              This amazing dress is sure to make you stand out from the crowd.
              Intricately designed, this stylish number is an idiosyncratic
              piece. Team it with a pair of heels or boots and minimal
              accessories for a sassy look.
            </Text>
            <Divider />
            <Box sx={{ marginTop: '18px' }}>
              <Text>Color</Text>
              <Group spacing={10} mb={16}>
                {['white', 'yellow'].map((itemColor, index) => (
                  <Flex
                    align={'center'}
                    justify={'center'}
                    key={index}
                    sx={{
                      width: '25px',
                      height: '25px',
                      background: itemColor,
                      borderRadius: '50%',
                      marginTop: '14px',
                      cursor: 'pointer',
                      border: itemColor === 'white' ? '1px solid #999' : 'none',
                    }}
                  >
                    <IconCheck
                      size={12}
                      color={itemColor ? 'black' : 'green'}
                      display={index === 0 ? 'block' : 'none'}
                    />
                  </Flex>
                ))}
              </Group>
            </Box>
            <Box sx={{ padding: '10px 0' }}>
              <Text>Size</Text>
              <Flex
                sx={{ margin: '12px 0' }}
                wrap={'nowrap'}
                align={'center'}
                columnGap={10}
              >
                {['S', 'M', 'L'].map((itemSize: string, index) => (
                  <Text
                    component="span"
                    key={index}
                    py={8}
                    px={10}
                    sx={{
                      border: '1px solid #999',
                      color: '#8b99a3',
                      cursor: 'pointer',
                      fontSize: 14,
                      fontWeight: 300,
                      whiteSpace: 'nowrap',
                      ':hover': {
                        background: '#ffff',
                      },
                      '@media (max-width: 767px)': {
                        marginBottom: '15px',
                      },
                    }}
                  >
                    {itemSize}
                  </Text>
                ))}
              </Flex>
            </Box>
            <Box sx={{ padding: '10px 0 20px' }}>
              <Text sx={{ marginBottom: '10px' }}>Qty</Text>
              <Flex
                sx={{
                  columnGap: '20px',
                  '@media (max-width: 767px)': {
                    columnGap: '10px',
                  },
                }}
              >
                <Flex align={'center'}>
                  <Input
                    value={qty}
                    onChange={(e) => setQty(parseInt(e.target.value, 10))}
                    styles={{
                      input: {
                        width: '60px',
                        height: '60px',
                        borderRadius: '0',
                        textAlign: 'center',
                      },
                    }}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Button
                      variant="outline"
                      onClick={() => setQty(qty + 1)}
                      sx={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '0',
                        padding: '0',
                        border: '1px solid #dbe1e6',
                        color: 'gray',
                        ':hover': {
                          background: 'none',
                        },
                        '.mantine-Button-label': {
                          fontWeight: 400,
                          fontSize: '1.2rem',
                        },
                      }}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (qty > 1) {
                          setQty(qty - 1);
                          return;
                        }
                      }}
                      sx={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '0',
                        padding: '0',
                        border: '1px solid #dbe1e6',
                        color: 'gray',
                        ':hover': {
                          background: 'none',
                        },
                        '.mantine-Button-label': {
                          fontWeight: 400,
                          fontSize: '1.2rem',
                        },
                      }}
                    >
                      -
                    </Button>
                  </Box>
                </Flex>
                <Button
                  fullWidth
                  sx={{
                    height: '60px',
                    background: 'black',
                    ':hover': {
                      background: '#E25D24',
                      transition: 'all ease-in-out 0.5s',
                    },
                    '.mantine-Button-label': {
                      fontSize: '14px',
                      padding: '0',
                    },
                  }}
                >
                  ADD TO CART
                </Button>
              </Flex>
              <Box
                sx={{
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  '@media (max-width: 1266px)': {
                    flexDirection: 'column',
                  },
                }}
              >
                <Text
                  sx={{
                    borderRight: '1px solid #808080',
                    width: 'fit-content',
                    padding: ' 10px',
                    display: 'flex',
                    marginRight: '30px',
                    '@media (max-width:1266px)': {
                      borderRight: 'none',
                    },
                  }}
                >
                  Add to Wishlist
                  <IconHeart style={{ marginLeft: '10px', color: '#E25D24' }} />
                </Text>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Text sx={{ marginRight: '20px' }}>Share this</Text>
                  <Group spacing={20}>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGoogle />
                    <FaPinterestP />
                  </Group>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ padding: '20px 0' }}>
              <Text sx={{ marginBottom: '20px' }}>SKU: N/A</Text>
              <Flex align={'center'} columnGap={10} mb={20}>
                <Text>Categories: </Text>
                <Box
                  sx={{ display: 'flex', columnGap: '10px', cursor: 'pointer' }}
                >
                  {['Dress', 'Woman'].map((modalCategory) => (
                    <Text key={modalCategory}>{modalCategory}</Text>
                  ))}
                </Box>
              </Flex>

              <Flex sx={{ alignItems: 'center' }} columnGap={15}>
                Tags:
                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                  {labels.map((label) => (
                    <Text
                      key={label}
                      sx={{
                        padding: '7px 14px',
                        width: 'fit-content',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        color: '#8b99a3',
                        background: '#F2F4F6',
                        ':hover': {
                          background: '#8b99a3',
                          transition: 'all ease-in-out 0.5s',
                          color: 'white',
                        },
                      }}
                    >
                      {label}
                    </Text>
                  ))}
                </Box>
              </Flex>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetails;
