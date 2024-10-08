/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-return */
import React, { useState } from 'react';
import {
  Box,
  Text,
  Loader,
  Modal,
  Grid,
  Button,
  Divider,
  Input,
  Flex,
  Group,
  Rating,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconArrowsDiagonal,
  IconBasket,
  IconCheck,
  IconCircleCheck,
  IconHeart,
} from '@tabler/icons';
import { FaFacebookF, FaTwitter, FaGoogle, FaPinterestP } from 'react-icons/fa';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mantine/hooks';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2';
import IconCloseModal from 'components/Icons/IconCloseModal';
import { useRouter } from 'next/router';
import { Record } from 'state/services/product';
import useWishList from 'util/useWishList';
import { useDispatch } from 'react-redux';
import { addItemToCartFunc } from 'state/features/cartItem/cartSlice';
import { labels } from './staticData';

const ReformedModal = styled(Modal)<{ colorMode?: string }>`
  & .mantine-Paper-root {
    padding: 0;
  }
  & .mantine-Grid-root {
    margin: 0;
  }

  & .mantine-Modal-body {
    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 5px;
    }
    position: relative;
  }
`;
const SwiperSlideCustom = styled(SwiperSlide)`
  @media (max-width: 768px) {
    height: 850px !important;
  }
`;
const ScopeSwiper = styled(Swiper)``;
const Product = ({ item }: { item: Record }) => {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { wishlist, setWishlist } = useWishList();
  // const [allProductImages, setAllProductImages] = useState(bgImg);
  const matches = useMediaQuery('(max-width: 1024px)');
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();

  const handleCartFunc = (product: Record) => {
    dispatch(addItemToCartFunc(product));
    Swal.fire(
      `${product?.fields?.ProductName} added to Cart`,
      'You clicked the button!',
      'success'
    );
  };
  const handleRouteToDetailedPage = (identifier: number) => {
    router.push(`/merch-collection/item/${identifier}`);
  };
  const handleWishList = (value: Record) => {
    const findItem = wishlist.find((product) => product.id === value.id);
    if (findItem) {
      Swal.fire(
        `${findItem?.fields?.ProductName} already in the wishlist`,
        'You clicked the button!',
        'warning'
      );
      return;
    }
    setWishlist((prev) => [...prev, value]);
    Swal.fire(
      `${value?.fields?.ProductName} added to wishlist`,
      'You clicked the button!',
      'success'
    );
  };
  return (
    <>
      <Box
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
        // onClick={() => handleRouteToDetailedPage(item)}
      >
        <Box
          sx={{
            backgroundImage: `${`url(${item?.fields?.FeaturedImage?.[0]?.url})`}`,
            height: '353px',
            minWidth: '264px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '10px',
            '@media (max-width: 767px)': {
              width: '100%',
            },
          }}
        >
          {item?.fields?.IsSalesTag && (
            <Box
              sx={{
                background: '#eb5a46',
                color: '#ffff',
                borderRadius: '3px',
                width: '48px',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              SALE!
            </Box>
          )}
        </Box>

        <Box sx={{ position: 'absolute', right: '10px', top: '30px' }}>
          {isHover && (
            <Box
              onClick={(event: any) => {
                setIsloading(true);
                event.stopPropagation();
                setTimeout(() => {
                  setIsloading(false);
                  setOpenModal(true);
                  return;
                }, 1500);
              }}
              sx={{
                width: '50px',
                height: '50px',
                background: '#ffff',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                ':hover': {
                  color: '#eb5a46',
                },
              }}
            >
              {isLoading ? (
                <Loader color="#E25D24" size={'sm'} />
              ) : (
                <IconArrowsDiagonal />
              )}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: '0',
            bottom: '0px',
            width: `100%`,
          }}
        >
          {isHover && (
            <Box
              sx={{
                width: '100%',
                background: '#ffff',
                cursor: 'pointer',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
              py={10}
              px={10}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Text
                  sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.4px',
                    color: '#051438',
                  }}
                >
                  {item?.fields?.ProductName}
                </Text>
                <Text sx={{ color: '#eb5a46', fontWeight: 600 }}>
                  ${item?.fields?.Price}
                </Text>
              </Box>
              <Flex
                mt={20}
                align={'center'}
                justify={'space-between'}
                columnGap={20}
                wrap={'nowrap'}
              >
                <Group spacing={4} align={'center'}>
                  <IconBasket size={18} color="#051438" />
                  <Text
                    fz={14}
                    fw={500}
                    color={colorScheme === 'dark' ? '#051438' : '#051438'}
                    onClick={() => handleCartFunc(item)}
                  >
                    Add to cart
                  </Text>
                </Group>
                <Group
                  spacing={4}
                  align={'center'}
                  onClick={() => handleWishList(item)}
                >
                  <IconHeart size={18} color="#051438" />
                  <Text
                    fz={14}
                    fw={500}
                    color={colorScheme === 'dark' ? '#051438' : '#051438'}
                  >
                    Add to wishlist
                  </Text>
                </Group>
              </Flex>
            </Box>
          )}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Text
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.4px',
            }}
          >
            {item?.fields?.ProductName}
          </Text>
          <Text sx={{ color: '#eb5a46', fontWeight: 600 }}>
            ${item?.fields?.Price}
          </Text>
        </Box>
      </Box>
      <ReformedModal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        size={matches ? '100%' : '70%'}
        withCloseButton={false}
        padding={0}
        centered
      >
        <Grid>
          <Grid.Col
            lg={6}
            sx={{
              '&.mantine-Grid-col': {
                padding: 0,
              },
            }}
            pos={'relative'}
          >
            <ScopeSwiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {/* {bgImg.map((value) => {
                return (
                  <SwiperSlideCustom
                    key={value.key}
                    style={{
                      backgroundImage: `url(${value.image})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      objectFit: 'scale-down',
                      backgroundSize: 'cover',
                      height: '85vh',
                    }}
                  ></SwiperSlideCustom>
                );
              })} */}
            </ScopeSwiper>
          </Grid.Col>

          <Grid.Col
            lg={6}
            p={{ base: 15, sm: 20, md: 30 }}
            sx={{
              overflow: 'scroll',

              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            h={{ base: '850px', lg: '85vh' }}
          >
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
              {/* {fie} */}
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
              {/* ${amount} */}
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
                {/* {color.map((itemColor, index) => (
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
                      color={itemColor.type === 'white' ? 'black' : 'green'}
                      display={index === 0 ? 'block' : 'none'}
                    />
                  </Flex>
                ))} */}
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
                {/* {size.map((itemSize: string, index) => (
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
                ))} */}
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
                    type="number"
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
                      transition: 'all ease-in-out 0.5sN',
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
                  {/* {modalCategories.map((modalCategory) => (
                    <Text key={modalCategory}>{modalCategory}</Text>
                  ))} */}
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
        <Flex
          h={30}
          w={30}
          sx={{ background: '#DFE2E9', borderRadius: '50%', zIndex: 999 }}
          align={'center'}
          justify={'center'}
          pos={'absolute'}
          top={10}
          right={10}
          onClick={() => setOpenModal(false)}
        >
          <IconCloseModal />
        </Flex>
      </ReformedModal>
    </>
  );
};

export default Product;
