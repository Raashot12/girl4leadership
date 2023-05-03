/* eslint-disable no-useless-return */
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Text,
  Loader,
  Modal,
  Grid,
  Button,
  Divider,
  Input,
} from '@mantine/core';
import { IconArrowsDiagonal, IconCircleCheck, IconHeart } from '@tabler/icons';
import { FaFacebookF, FaTwitter, FaGoogle, FaPinterestP } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { labels } from './staticData';

const Product = ({
  id,
  bgImg,
  isSale,
  name,
  amount,
  modalCategories,
  size,
  color,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [qty, setQty] = useState(1);
  const [allProductImages, setAllProductImages] = useState(bgImg);
  const [selectImage, setSeletImage] = useState(0);
  const [isSelectOtherColors, setIsSelectOtherColors] = useState(false);
  const [newSelectedColor, setNewSelectedColor] = useState(bgImg);

  return (
    <>
      <Box
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        key={id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Link href={`/merch-collection/item/${id}`}>
          <Box
            sx={{
              backgroundImage: `${`url(${allProductImages[0]})`}`,
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
            {isSale && (
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
        </Link>
        <Box sx={{ position: 'absolute', right: '10px', top: '30px' }}>
          {isHover && (
            <Box
              onClick={() => {
                setIsloading(true);
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
              {isLoading ? <Loader color="#E25D24" /> : <IconArrowsDiagonal />}
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
            {name}
          </Text>
          <Text sx={{ color: '#eb5a46', fontWeight: 600 }}>${amount}</Text>
        </Box>
      </Box>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        size="80%"
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
      >
        <Grid sx={{ width: '100%' }}>
          <Grid.Col
            md={6}
            sx={{
              height: '699px',
              backgroundImage: `${
                isSelectOtherColors
                  ? `url(${newSelectedColor})`
                  : `url(${allProductImages[selectImage]})`
              }`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="subtle"
              onClick={() => {
                if (selectImage > 0) {
                  setSeletImage(selectImage - 1);
                  return;
                }
              }}
              sx={{
                color: '#808080',
                position: 'relative',
                top: '50%',
                opacity: `${selectImage < 1 ? 0.4 : 1}`,
                ':hover': {
                  background: 'none',
                },
              }}
            >
              <IoIosArrowBack style={{ fontSize: '40px' }} />
            </Button>
            <Button
              variant="subtle"
              onClick={() => {
                if (selectImage < allProductImages.length - 1) {
                  setSeletImage(selectImage + 1);
                  return;
                }
              }}
              sx={{
                opacity: `${
                  selectImage === allProductImages.length - 1 ? 0.4 : 1
                }`,
                color: '#808080',
                position: 'relative',
                top: '50%',
                ':hover': {
                  background: 'none',
                },
              }}
            >
              <IoIosArrowForward style={{ fontSize: '40px' }} />
            </Button>
          </Grid.Col>

          <Grid.Col
            md={6}
            sx={{
              padding: '30px',
              overflow: 'scroll',
              height: '699px',
              '::-webkit-scrollbar': {
                width: '5px',
              },
              '::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '::-webkit-scrollbar-thumb': {
                background: '#808080',
              },
            }}
          >
            <Text
              sx={{
                fontSize: '36px',
                lineHeight: 1.3,
                fontWeight: 600,
                marginBottom: '10px',
              }}
            >
              {name}
            </Text>
            <Divider />
            <Text sx={{ margin: '20px 0', fontSize: '24px', fontWeight: 600 }}>
              ${amount}
            </Text>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  width: '100px',
                  borderRight: '1px solid #8b99a3',
                  display: 'flex',
                }}
              >
                <IconCircleCheck style={{ color: '#8aba56' }} />
                <Text sx={{ marginLeft: '10px' }}>In Stock</Text>
              </Box>
              <Text sx={{ marginLeft: '10px' }}>Write a Review?</Text>
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
              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                {color.map((itemColor, index) => (
                  <Box
                    key={index}
                    onClick={() => {
                      setIsSelectOtherColors(true);
                      if (itemColor.image === null) {
                        setNewSelectedColor(bgImg[0]);
                      } else {
                        setNewSelectedColor(itemColor.image[0]);
                      }
                    }}
                    sx={{
                      width: '30px',
                      height: '30px',
                      background: itemColor.type,
                      borderRadius: '50%',
                      marginTop: '16px',
                      cursor: 'pointer',
                    }}
                  ></Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ padding: '10px 0' }}>
              <Text>Size</Text>
              <Box sx={{ margin: '12px 0' }}>
                {size.map((itemSize: string, index) => (
                  <Button
                    variant="outline"
                    key={index}
                    sx={{
                      marginRight: '15px',
                      border: '1px solid #8b99a3',
                      color: '#8b99a3',
                      padding: '14px',
                      ':hover': {
                        background: '#ffff',
                      },
                    }}
                  >
                    {itemSize}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box sx={{ padding: '10px 0 20px' }}>
              <Text sx={{ marginBottom: '10px' }}>Qty</Text>
              <Box
                sx={{
                  display: 'flex',
                  columnGap: '20px',
                  '@media (max-width: 767px)': {
                    flexDirection: 'column',
                    rowGap: '20px',
                  },
                }}
              >
                <Box sx={{ display: 'flex' }}>
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
                        border: '1px solid gray',
                        color: 'gray',
                        ':hover': {
                          background: 'none',
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
                        border: '1px solid gray',
                        color: 'gray',
                        ':hover': {
                          background: 'none',
                        },
                      }}
                    >
                      -
                    </Button>
                  </Box>
                </Box>
                <Button
                  fullWidth
                  sx={{
                    height: '60px',
                    background: 'black',
                    ':hover': {
                      background: 'black',
                    },
                    '.mantine-i8vysf': {
                      fontSize: '14px',
                      padding: '0',
                    },
                  }}
                >
                  ADD TO CART
                </Button>
              </Box>
              <Box
                sx={{
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  '@media (max-width: 767px)': {
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
                    '@media (max-width:767px)': {
                      borderRight: 'none',
                    },
                  }}
                >
                  Add to Wishlist
                  <IconHeart style={{ marginLeft: '10px', color: '#E25D24' }} />
                </Text>
                <Box sx={{ display: 'flex' }}>
                  <Text sx={{ marginRight: '20px' }}>Share this</Text>
                  <Box sx={{ display: 'flex', columnGap: '20px' }}>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGoogle />
                    <FaPinterestP />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ padding: '20px 0' }}>
              <Text sx={{ marginBottom: '20px' }}>SKU: N/A</Text>
              <Box sx={{ display: 'flex' }}>
                <Text sx={{ marginBottom: '20px' }}>Categories: </Text>
                <Box
                  sx={{ display: 'flex', columnGap: '10px', cursor: 'pointer' }}
                >
                  {modalCategories.map((modalCategory, index) => (
                    <Text key={index}>{modalCategory}</Text>
                  ))}
                </Box>
              </Box>

              <Text sx={{ display: 'flex' }}>
                Tags:
                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                  {labels.map((label, index) => (
                    <Text
                      key={index}
                      sx={{
                        background: '#ffff',
                        padding: '0 5px',
                        width: 'fit-content',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        ':hover': {
                          background: '#8b99a3',
                        },
                      }}
                    >
                      {label}
                    </Text>
                  ))}
                </Box>
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  );
};

export default Product;
