/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import {
  Box,
  Container,
  Grid,
  Text,
  Rating,
  Button,
  createStyles,
  Flex,
  Input,
} from '@mantine/core';
import { IconCircleCheck, IconHeart } from '@tabler/icons';
import Image from 'next/image';
import { WrapperBox } from 'styles';

type ProductDeatils = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Product = ({
  title,
  images,
  category,
  description,
  rating,
  price,
}: ProductDeatils): JSX.Element => {
  const { classes } = useStyles();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const [qty, setQty] = useState<number>(1);
  const [swiperItems, setSwiperItems] = useState<string[]>([]);

  useEffect(() => {
    setSwiperItems(images);
  }, []);

  return (
    <WrapperBox sx={{ background: '#fff' }}>
      <Container size="xl">
        <Grid
          sx={{
            margin: '30px 0',
            '@media (max-width: 767px)': {
              margin: '25px 0',
            },
          }}
        >
          <Grid.Col md={6}>
            <Swiper
              spaceBetween={10}
              navigation
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {swiperItems?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item}
                    width={600}
                    height={650}
                    alt="Product Image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {swiperItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item}
                    width={118.5}
                    height={170}
                    alt="Product Image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid.Col>
          <Grid.Col
            md={6}
            sx={{
              paddingLeft: '32px',
              '@media (max-width: 767px)': { paddingLeft: '0' },
            }}
          >
            <Text className={classes.home}>Home</Text>
            <Text className={classes.title}>{title}</Text>
            <Text sx={{ fontSize: '25px' }}>${price}</Text>
            <Box className={classes.stockWrap}>
              <Box className={classes.stockSub}>
                <IconCircleCheck style={{ color: '#8aba56' }} />
                <Text sx={{ color: '#c1cad1' }}>In Stock</Text>
              </Box>
              <Box className={classes.ratings}>
                <Rating value={rating} />

                <Text>(1) Write a Review?</Text>
              </Box>
            </Box>
            <Box className={classes.text}>
              This amazing dress is sure to make you stand out from the crowd.
              Intricately designed, this stylish number is an idiosyncratic
              piece. Team it with a pair of heels or boots and minimal
              accessories for a sassy look.
            </Box>

            {/* <Text sx={{ padding: '20px 0' }}>Size</Text>
            <Box sx={{ display: 'flex', columnGap: '20px' }}>
              {productItem?.size.map((item) => (
                <TextInput
                  key={item}
                  value={item}
                  readOnly
                  className={classes.sizeBox}
                />
              ))}
            </Box> */}
            <Box sx={{ padding: '10px 0' }}>
              <Text sx={{ padding: '20px 0' }}>Qty</Text>
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
                    className={classes.btnStyle}
                  >
                    +
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (qty > 1) {
                        setQty(qty - 1);
                      }
                    }}
                    className={classes.btnStyle}
                  >
                    -
                  </Button>
                </Box>
              </Flex>
              <Button
                variant="filled"
                fullWidth
                className={classes.cta}
                mt={20}
              >
                ADD TO CART
              </Button>
            </Box>

            <Box className={classes.wishlistWrap}>
              <Box className={classes.wishlist}>
                <Text>Add to Wishlist</Text>
                <IconHeart size={20} style={{ color: '#eb5a46' }} />
              </Box>
              <Box className={classes.share}>
                <Text>Share this</Text>
                <FaFacebookF style={{ fontSize: '20px' }} />
                <AiOutlineTwitter style={{ fontSize: '20px' }} />
                <AiOutlineGoogle style={{ fontSize: '20px' }} />
                <FaPinterestP style={{ fontSize: '20px' }} />
              </Box>
            </Box>
            <Flex gap={20} align={'center'} wrap={'wrap'} mt={30}>
              <Text>SKU: N/A</Text>
              <Flex align={'center'} columnGap={10}>
                <Text component="span" fw={500}>
                  Categories:{' '}
                </Text>
                <Box
                  sx={{ display: 'flex', columnGap: '10px', cursor: 'pointer' }}
                >
                  <Text>{category}</Text>
                </Box>
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
        <Text className={classes.titles}>DESCRIPTION</Text>
        <Text className={classes.texts}>{description}</Text>
      </Container>
    </WrapperBox>
  );
};

export default Product;

const useStyles = createStyles((theme) => ({
  home: {
    color: '#c1cad1',
    lineHeight: 1.3,
  },
  title: {
    borderBottom: '1px solid #c1cad1',
    padding: '15px 0 20px',
    marginBottom: '30px',
    fontSize: '36px',
    lineHeight: 1.2,
    fontWeight: 600,
    margin: '0.67em 0',
  },
  stockWrap: {
    padding: '30px 0',
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('md')]: {
      padding: '0',
    },
  },
  stockSub: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '15px',
    padding: '10px 20px 10px 0',
    borderRight: '1px solid #8b99a3',

    [theme.fn.smallerThan('md')]: {
      borderRight: 'none',
    },
  },
  ratings: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
    padding: '15px 0 15px 20px',

    [theme.fn.smallerThan('md')]: {
      paddingLeft: '0',
    },
  },
  text: {
    color: '#c1cad1',
    paddingBottom: '30px',
    borderBottom: '1px solid #c1cad1',
  },
  colorBox: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'grid',
    placeContent: 'center',
    cursor: 'pointer',
  },
  sizeBox: {
    width: '50px',
    cursor: 'pointer',
    '& .mantine-Input-input': {
      padding: '0 2px',
      textAlign: 'center',
      height: '50px',
    },
  },
  qtyWrap: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '20px',
  },
  input: {
    width: '60px',
    borderRadius: '0',
    '& .mantine-Input-input': {
      height: '60px',
      padding: '0',
      textAlign: 'center',
    },
  },
  symbolWrap: {
    width: '30px',
    height: '30px',
    borderRadius: '0',
    padding: '0',
    textAlign: 'center',
    fontSize: '18px',
    '& .mantine-1wpc1xj': {
      borderColor: '#8b99a3',
    },
  },
  cta: {
    background: '#000',
    height: '60px',
    ':hover': {
      background: '#000',
    },
  },
  wishlistWrap: {
    padding: '25px 0 40px ',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderBottom: '1px solid #8b99a3',

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: '10px',
    },
  },
  wishlist: {
    padding: '5px 0 5px',
    marginRight: '20px',
    borderBottom: '1px dashed #000',
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
    width: 'fit-content',
  },
  share: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '15px',
    padding: '5px 0 5px 20px',
    borderLeft: '1px solid #8b99a3',

    [theme.fn.smallerThan('sm')]: {
      borderLeft: 'none',
      paddingLeft: '0',
    },
  },
  sku: {
    display: 'flex',
    columnGap: '10px',
    paddingBottom: '20px',
    color: '#8b99a3',
  },
  tagWrap: {
    display: 'flex',
    columnGap: '10px',
    color: '#8b99a3',
  },
  tag: {
    ':hover': {
      background: '#F2F4F6',
      padding: '5px 10px',
      color: 'white',
    },
  },
  titles: {
    paddingBottom: '5px',
    fontWeight: 600,
  },
  texts: {
    color: '#8b99a3',
    margin: '5px 0',
    lineHeight: 2,
  },
  content: {
    color: '#8b99a3',
    margin: '5px 0',
    lineHeight: 2,
    paddingBottom: '15px',
  },
  btnStyle: {
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
  },
}));
