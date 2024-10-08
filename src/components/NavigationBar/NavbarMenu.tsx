/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Group,
  useMantineColorScheme,
  Container,
  ActionIcon,
  Burger,
  Stack,
  Collapse,
  TextInput,
  Tabs,
  Text,
  Center,
  Alert,
  Loader,
  Button,
  Overlay,
  Divider,
  Image,
  Input,
} from '@mantine/core';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import {
  IconAlertCircle,
  IconBucket,
  IconHeart,
  IconNews,
  IconRefresh,
  IconSearch,
  IconShoppingCart,
} from '@tabler/icons';
import IconCloseModal from 'components/Icons/IconCloseModal';
import NextImage from 'next/image';
import { BsCart3 } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useClickOutside } from '@mantine/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { selectShowCart, toggleShowCart } from 'state/features/nav/navSlice';
import { RootState } from 'state/store';
import { useAppSelector } from 'state/hooks';
import {
  CartState,
  cartState,
  removeCartItemFunct,
} from 'state/features/cartItem/cartSlice';
import useWishList from 'util/useWishList';
import { motion } from 'framer-motion';
import { Record } from 'state/services/product';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import logo from '../../images/logo.svg';

const HeaderComponent = styled(Box as any)<{
  scrollDirection: string;
  scrollheight: number;
}>`
  box-shadow: 0 0 22px rgb(0 0 0 / 10%);
  &.global-nav--sticky {
    position: fixed;
    width: 100%;
    top: ${({ scrollDirection }) =>
      scrollDirection === 'UP' ? `${7}px` : `${0}px`};
    background: ${({ theme }) =>
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white};
    box-shadow: 0 0 22px rgb(0 0 0 / 10%);
    transition: background 500ms ease, -webkit-transform 500ms ease;
    -o-transition: transform 500ms ease, background 500ms ease;
    transition: transform 500ms ease, background 500ms ease;
    transition: transform 500ms ease, background 500ms ease,
      -webkit-transform 500ms ease;
  }
  position: ${({ scrollheight }) => (scrollheight <= 0 ? `fixed` : `absolute`)};

  width: 100%;
  top: 0;
  z-index: 100;
  background: ${({ theme }) =>
    theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white};
`;

const navMenu = [
  {
    pathName: 'Home',
    route: '/',
    id: 1,
  },
  {
    pathName: 'Who We Are',
    route: '/who-we-are',
    id: 2,
  },

  {
    pathName: 'Gallery',
    route: '/gallery',
    id: 3,
  },
  {
    pathName: 'Blog',
    route: '/blog',
    id: 4,
  },
  {
    pathName: 'Merch Collections',
    route: '/merch-collection',
    id: 5,
  },
  {
    pathName: 'Contact',
    route: '/contact',
    id: 6,
  },
];

const BtnWhite = styled.div`
  border: 1px solid #635e68 !important;
  display: inline-block;
  padding: 0px 30px;
  background: white;
  line-height: 40px;
  color: #635e68;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
  border-radius: 10px;
  &:hover {
    color: #635e68;
    background: #f5f5f5;
    border-color: #e25d24;
  }
  @media (max-width: 567px) {
    padding: 0px 16px;
  }
`;

const Cart = ({ showCart }: { showCart: boolean }) => {
  const dispatch = useDispatch();
  const { colorScheme } = useMantineColorScheme();
  const [qty, setQty] = useState(1);
  const ref = useClickOutside(() =>
    dispatch(toggleShowCart({ showCart: false }))
  );
  const handleClose = () => {
    dispatch(toggleShowCart({ showCart: false }));
  };
  const handleRemoveItemFromCart = (id) => {
    dispatch(removeCartItemFunct({ id }));
  };
  const cartItemState: CartState<Record[]> = useAppSelector(cartState);
  const router = useRouter();
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: showCart ? 0 : '-100vw',
        width: '100vw',
        height: '100vh',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        transition: 'right 0.3s ease-in-out',
        zIndex: 100,
      }}
    >
      <Overlay
        color="#000"
        sx={{
          transition: 'right 0.3s ease-in-out',
          opacity: '0.5',
          background: colorScheme === 'dark' ? 'white' : '#1A1B1E',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: showCart ? 0 : '-85vw',
          height: '100vh',
          background: colorScheme === 'dark' ? '#1A1B1E' : 'white',
          zIndex: 1000,
        }}
        ref={ref}
        w={{ base: '85vw', md: '50vw', lg: '32vw' }}
      >
        {' '}
        <Flex
          align={'center'}
          px={10}
          pt={10}
          justify={'space-between'}
          columnGap={20}
        >
          <ActionIcon>
            <Box pos={'relative'}>
              <BsCart3
                size={22}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
              {cartItemState.cart?.length >= 1 && (
                <Flex
                  sx={{
                    background: '#E25D24',
                    height: 15,
                    width: 15,
                    borderRadius: '50%',
                    position: 'absolute',
                    top: -4,
                    right: -8,
                  }}
                  fz={10}
                  fw={600}
                  align={'center'}
                  justify={'center'}
                  color="white"
                >
                  {cartItemState.cart?.length}
                </Flex>
              )}
            </Box>
          </ActionIcon>
          <Text fw={600} color={colorScheme === 'dark' ? 'white' : 'black'}>
            REVIEW YOUR CART
          </Text>
          <ActionIcon onClick={handleClose}>
            <MdClose
              color={colorScheme === 'dark' ? 'white' : 'black'}
              size={20}
            />
          </ActionIcon>
        </Flex>
        <Divider
          mt={10}
          color={colorScheme === 'dark' ? '#AFAFB0' : '#1A1B1E'}
        />
        {cartItemState.cart?.length <= 0 && (
          <Flex mt={100} align="center" justify={'center'}>
            <Flex align="center" justify={'center'}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={160}
                  height={160}
                  sx={{
                    '& .mantine-Image-image': {
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  }}
                  alt="empty"
                  src="https://res.cloudinary.com/rashot/image/upload/v1721926108/miniCartContentImage_sk4qjd.jpg"
                />
                <Text
                  fw={700}
                  mt={24}
                  ta="center"
                  color={colorScheme === 'dark' ? '#e0e0e1' : '#1A1B1E'}
                >
                  YOUR CART IS EMPTY.{' '}
                </Text>
                <Text fw={500} ta="center" mb={50}>
                  GET MOVING ON A NEW ORDER NOW.
                </Text>

                <BtnWhite
                  onClick={() => {
                    router.push('/merch-collection');
                    handleClose();
                  }}
                >
                  Go to shop
                </BtnWhite>
              </Box>
            </Flex>
          </Flex>
        )}
        {cartItemState.cart?.length >= 1 && (
          <Box px={16} mt={30}>
            {cartItemState.cart?.map((value) => {
              return (
                <Flex
                  key={value.id}
                  align={'center'}
                  justify={'space-between'}
                  columnGap={50}
                >
                  <Flex
                    columnGap={15}
                    sx={{
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                    mb={30}
                  >
                    <Box h={'5rem'} w={'5rem'}>
                      <Image
                        src={value?.fields?.FeaturedImage?.[0]?.url}
                        alt={value?.fields?.ProductName}
                        sx={{
                          '& .mantine-Image-image': {
                            maxWidth: '100%',
                            height: 'auto',
                            maxHeight: '6rem',
                            verticalAlign: 'middle',
                            borderRadius: '5px',
                          },
                        }}
                      />
                    </Box>
                    <Box>
                      <Text fw={600}>{value?.fields?.ProductName}</Text>
                      <Flex align={'center'} fw={500} fz={14}>
                        <Box component="span" sx={{ fontWeight: 600 }}>
                          Color
                        </Box>
                        &nbsp;: {value?.fields?.AvailableColors?.join(', ')}
                      </Flex>
                      <Flex align={'center'} fw={500} fz={14}>
                        {value?.fields?.currency}
                        {Number(value?.fields?.Price)
                          ?.toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
                          .replace(/\.00$/, '')}
                      </Flex>
                      <Text
                        sx={{
                          color: '#E25D24',
                          cursor: 'pointer',
                          ':hover': {
                            textDecoration: 'underline',
                          },
                        }}
                        fw={600}
                        fz={14}
                        onClick={() => handleRemoveItemFromCart(value.id)}
                      >
                        Remove
                      </Text>
                    </Box>
                  </Flex>
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
                </Flex>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

function NavbarMenu() {
  const { colorScheme } = useMantineColorScheme();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');
  const [blogSearch, setBlogSearch] = useState('');
  // const [debounceQuery] = useDebouncedValue(blogSearch, 1000);
  const [searchActive, setSearchActive] = useState(false);
  const ref = useClickOutside(() => setSearchActive(false));
  const [opened, setOpened] = useState(false);
  const { pathname, push } = useRouter();
  const dispatch = useDispatch();
  const { wishlist } = useWishList();

  const cartItemState: CartState<Record[]> = useAppSelector(cartState);

  const handleCartToggle = () => {
    dispatch(toggleShowCart({ showCart: true }));
  };

  // const { data, isLoading, isError, refetch } =
  //   useApiServicesAppBlogSearchApiQuery(
  //     {
  //       searchParam: debounceQuery,
  //     },
  //     {
  //       skip: debounceQuery.trim() === '',
  //     }
  //   );

  useEffect(() => {
    const scrollableElement = document.body;
    function checkScrollDirectionIsUp(event: any) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }
    function checkScrollDirection(event: any) {
      if (checkScrollDirectionIsUp(event)) {
        setScrollDirection('UP');
      } else {
        setScrollDirection('Down');
      }
    }

    function updateScrollHeight() {
      setScrollHeight(window.scrollY);
    }
    // Attach event listener for scroll events
    window.addEventListener('scroll', updateScrollHeight);
    scrollableElement.addEventListener('wheel', checkScrollDirection);
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', updateScrollHeight);
    };
  }, [scrollHeight]);
  const showCart = useSelector((state: RootState) => selectShowCart(state));

  return (
    <div style={{ position: 'relative' }}>
      <HeaderComponent
        className={scrollHeight >= 140 ? 'global-nav--sticky' : 'none'}
        position={scrollDirection}
        scrollheight={scrollHeight}
        display={scrollHeight !== 0 && scrollHeight <= 139 ? 'none' : ''}
      >
        <Container size="xl">
          <Flex align={'center'} justify={'space-between'} py={3}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <NextImage
                src={logo}
                alt="Girls 4 leadership Initiative"
                height={70}
              />
            </Link>

            <motion.div
              initial={{ y: -500, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  columnGap: 25,
                  '@media (max-width:900px)': {
                    display: 'none',
                  },
                }}
              >
                {navMenu.map((value) => {
                  return (
                    <React.Fragment key={value.id}>
                      <CustomLink
                        href={value.route}
                        className={
                          pathname === '/' && value.route === '/'
                            ? 'active'
                            : pathname.includes(value.route) &&
                              value.route !== '/'
                            ? 'active'
                            : 'not-active'
                        }
                      >
                        {value.pathName}
                      </CustomLink>
                    </React.Fragment>
                  );
                })}
              </Box>
            </motion.div>
            <Box
              sx={{
                display: 'flex',
                columnGap: 18,
                '@media (max-width:900px)': {
                  display: 'none',
                },
              }}
            >
              <ActionIcon
                size="lg"
                variant="outline"
                color={colorScheme === 'dark' ? 'brand.7' : 'brand.3'}
                title="Search"
                onClick={() => setSearchActive(true)}
                sx={{
                  visibility: searchActive ? 'hidden' : 'visible',
                  '&:hover': {
                    background: 'none',
                  },
                }}
              >
                <IconSearch fontWeight={400} cursor={'pointer'} size="18" />
              </ActionIcon>

              <ActionIcon
                size="lg"
                variant="outline"
                color={colorScheme === 'dark' ? 'brand.7' : 'brand.3'}
                title="Shopping cart"
                sx={{
                  '&:hover': {
                    background: 'none',
                  },
                }}
                onClick={handleCartToggle}
              >
                <Box pos={'relative'}>
                  <IconShoppingCart
                    fontWeight={400}
                    cursor={'pointer'}
                    size="18"
                  />
                  {cartItemState.cart?.length >= 1 && (
                    <Flex
                      sx={{
                        background: '#E25D24',
                        height: 10,
                        width: 10,
                        borderRadius: '50%',
                        position: 'absolute',
                        paddingLeft: 2,
                        paddingRight: 2,
                        top: -10,
                        right: -10,
                        color: 'white !important',
                      }}
                      fz={10}
                      fw={700}
                      align={'center'}
                      justify={'center'}
                    ></Flex>
                  )}
                </Box>
              </ActionIcon>
              <ColorSchemeToggle />
              <Flex
                align={'center'}
                direction={'column'}
                justify={'center'}
                rowGap={3}
                sx={{ cursor: 'pointer' }}
                onClick={() => push('/wishlist')}
                pos={'relative'}
              >
                <IconHeart
                  fontWeight={400}
                  color={colorScheme === 'dark' ? 'white' : '#E25D24'}
                  cursor={'pointer'}
                  size="18"
                />
                <Text
                  fz={10}
                  fw={600}
                  sx={{ letterSpacing: 1 }}
                  color={colorScheme === 'dark' ? 'white' : 'brand'}
                >
                  Wishlist
                </Text>
                {wishlist?.length >= 1 && (
                  <Flex
                    sx={{
                      background: '#E25D24',
                      height: 10,
                      width: 10,
                      borderRadius: '50%',
                      position: 'absolute',
                      paddingLeft: 2,
                      paddingRight: 2,
                      top: -1,
                      right: 8,
                      color: 'white !important',
                    }}
                    fz={10}
                    fw={700}
                    align={'center'}
                    justify={'center'}
                  ></Flex>
                )}
              </Flex>
            </Box>
            <Burger
              color="#E25D24"
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              sx={{
                '@media (min-width:901px)': {
                  display: 'none',
                },
              }}
            />
          </Flex>
        </Container>
        <Collapse in={opened} pt={!searchActive ? 20 : 5}>
          {searchActive ? (
            <>{null}</>
          ) : (
            <Box
              sx={{
                '@media (min-width:901px)': {
                  display: 'none',
                },
                width: '100%',
              }}
              px={16}
            >
              <Stack spacing={25}>
                {navMenu.map((value) => {
                  return (
                    <React.Fragment key={value.id}>
                      <MobileLink
                        href={value.route}
                        className={
                          pathname === '/' && value.route === '/'
                            ? 'active'
                            : pathname.includes(value.route) &&
                              value.route !== '/'
                            ? 'active'
                            : 'not-active'
                        }
                      >
                        {value.pathName}
                      </MobileLink>
                    </React.Fragment>
                  );
                })}
              </Stack>
              <Group spacing={18} mt={20} pb={20}>
                <ActionIcon
                  size="lg"
                  variant="outline"
                  color={colorScheme === 'dark' ? 'brand.7' : 'brand.3'}
                  title="Search"
                  sx={{
                    visibility: searchActive ? 'hidden' : 'visible',
                    '&:hover': {
                      background: 'none',
                    },
                  }}
                  onClick={() => setSearchActive(true)}
                >
                  <IconSearch fontWeight={400} cursor={'pointer'} size="18" />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  variant="outline"
                  color={colorScheme === 'dark' ? 'brand.7' : 'brand.3'}
                  title="ShoppingCart"
                  sx={{
                    '&:hover': {
                      background: 'none',
                    },
                  }}
                  onClick={handleCartToggle}
                >
                  <Box pos={'relative'}>
                    <IconShoppingCart
                      fontWeight={400}
                      cursor={'pointer'}
                      size="18"
                    />
                    <Flex
                      sx={{
                        background: '#E25D24',
                        height: 10,
                        width: 10,
                        borderRadius: '50%',
                        position: 'absolute',
                        paddingLeft: 2,
                        paddingRight: 2,
                        top: -10,
                        right: -10,
                        color: 'white !important',
                      }}
                      fz={10}
                      fw={700}
                      align={'center'}
                      justify={'center'}
                    ></Flex>
                  </Box>
                </ActionIcon>
                <ColorSchemeToggle />
                <Flex
                  align={'center'}
                  direction={'column'}
                  justify={'center'}
                  rowGap={3}
                  sx={{ cursor: 'pointer' }}
                  pos={'relative'}
                  onClick={() => push('/wishlist')}
                >
                  <IconHeart
                    fontWeight={400}
                    color={colorScheme === 'dark' ? 'white' : '#E25D24'}
                    cursor={'pointer'}
                    size="18"
                  />
                  <Text
                    fz={10}
                    fw={600}
                    sx={{ letterSpacing: 1 }}
                    color={colorScheme === 'dark' ? 'white' : 'brand'}
                  >
                    Wishlist
                  </Text>
                  {wishlist?.length >= 1 && (
                    <Flex
                      sx={{
                        background: '#E25D24',
                        height: 10,
                        width: 10,
                        borderRadius: '50%',
                        position: 'absolute',
                        paddingLeft: 2,
                        paddingRight: 2,
                        top: -10,
                        right: -10,
                        color: 'white !important',
                      }}
                      fz={10}
                      fw={700}
                      align={'center'}
                      justify={'center'}
                    ></Flex>
                  )}
                </Flex>
              </Group>
            </Box>
          )}
        </Collapse>
        <Collapse in={searchActive} ref={ref}>
          <Box
            sx={{
              borderTop: '2px dashed red',
              position: 'relative',
            }}
            pt={30}
            px={16}
            pb={30}
          >
            <Flex
              pos={'absolute'}
              right={{ base: 16, sm: 30, md: 50 }}
              top={20}
            >
              <ActionIcon onClick={() => setSearchActive(false)} title="Close">
                <IconCloseModal size={14} fill="#E25D24" />
              </ActionIcon>
            </Flex>
            <Container>
              <Text fw={500} mb={16}>
                Select search categories
              </Text>
              <Tabs
                color="red"
                variant="pills"
                defaultValue="blog"
                sx={{
                  '.mantine-Tabs-tab[data-active]': {
                    backgroundColor: '#E25D24',
                    ':hover': {
                      background: '#E25D24',
                    },
                  },
                }}
              >
                <Tabs.List>
                  <Tabs.Tab value="blog" icon={<IconNews size="0.8rem" />}>
                    Blog
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="merch-collection"
                    icon={<IconBucket size="0.8rem" />}
                  >
                    Merch collection
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="blog" pt="xs">
                  <>
                    <TextInput
                      mb={20}
                      sx={{
                        '& .mantine-Input-input': {
                          borderRight: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',
                          borderRadius: 0,
                        },
                      }}
                      placeholder="Enter Search Keyword for Blog"
                      value={blogSearch}
                      onChange={(e) => {
                        setBlogSearch(e.target.value);
                      }}
                      rightSection={
                        <IconSearch size={18} style={{ cursor: 'pointer' }} />
                      }
                    />
                    {false ? (
                      <Center>
                        <Loader
                          color="rgba(250, 7, 7, 1)"
                          size="md"
                          type="dots"
                        />
                      </Center>
                    ) : false ? (
                      <Alert
                        icon={<IconAlertCircle size="1rem" />}
                        title="Error"
                        color="red.6"
                        variant="outline"
                        withCloseButton
                      >
                        <Flex
                          align={'center'}
                          justify={'space-between'}
                          columnGap={'40'}
                        >
                          <Text>Error querying the search for the blog</Text>
                          <Button
                            // onClick={() => refetch()}
                            fw={600}
                            sx={{
                              '&.mantine-Button-root': {
                                background: '#E25D24',
                                height: 30,
                              },
                              '& .mantine-Button-label': {
                                fontSize: 14,
                                fontWeight: 600,
                              },
                              borderRadius: '10px',
                            }}
                            rightIcon={<IconRefresh size={14} />}
                          >
                            Refetch
                          </Button>
                        </Flex>
                      </Alert>
                    ) : (
                      <>
                        {/* {!isLoading && (data?.data?.length as number) <= 0 ? (
                          <Alert
                            icon={<IconAlertCircle size="1rem" />}
                            title="Search"
                            color="red.6"
                            variant="outline"
                            withCloseButton={true}
                          >
                            No result found in the database
                          </Alert>
                        ) : (
                          <ScrollArea h={data ? 300 : 0}>
                            <Stack>
                              {data?.data?.map((value) => {
                                return (
                                  <BlogSearchItem
                                    value={value}
                                    key={value.id}
                                  />
                                );
                              })}
                            </Stack>
                          </ScrollArea>
                        )} */}
                      </>
                    )}
                  </>
                </Tabs.Panel>

                <Tabs.Panel value="merch-collection" pt="xs">
                  <TextInput
                    mb={20}
                    sx={{
                      '& .mantine-Input-input': {
                        borderRight: 'none',
                        borderLeft: 'none',
                        borderTop: 'none',
                        borderRadius: 0,
                      },
                    }}
                    placeholder="Enter Search Keyword for Merch collection"
                    rightSection={
                      <IconSearch size={18} style={{ cursor: 'pointer' }} />
                    }
                  />
                </Tabs.Panel>
              </Tabs>
            </Container>
          </Box>
        </Collapse>
      </HeaderComponent>
      <Cart showCart={showCart} />
    </div>
  );
}

export default NavbarMenu;

const CustomLink = styled(Link)`
  font-weight: 500;
  line-height: 90px;
  &.active {
    color: #e1621b;
    font-weight: 600;
  }

  &.not-active:hover {
    color: #e1621b;
    font-weight: 600;
    transition: all ease-in-out 0.5s;
  }
`;
const MobileLink = styled(Link)`
  font-weight: 500;
  &.active {
    color: #e1621b;
    font-weight: 600;
  }

  &.not-active:hover {
    color: #e1621b;
    font-weight: 600;
    transition: all ease-in-out 0.5s;
  }
`;
