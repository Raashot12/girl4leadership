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
  ScrollArea,
  Button,
  Overlay,
  Divider,
} from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import {
  IconAlertCircle,
  IconBucket,
  IconNews,
  IconRefresh,
  IconSearch,
  IconShoppingCart,
} from '@tabler/icons';
import IconCloseModal from 'components/Icons/IconCloseModal';
import { BsCart3 } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useClickOutside, useDebouncedValue } from '@mantine/hooks';
import { useApiServicesAppBlogSearchApiQuery } from 'state/services/blogsApi';
import { useSelector, useDispatch } from 'react-redux';
import { selectShowCart, toggleShowCart } from 'state/features/nav/navSlice';
import { RootState } from 'state/store';
import BlogSearchItem from './BlogSearchItem';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import Logo from '../../images/logo.png';

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

const Cart = ({ showCart }: { showCart: boolean }) => {
  const dispatch = useDispatch();
  const { colorScheme } = useMantineColorScheme();
  const ref = useClickOutside(() =>
    dispatch(toggleShowCart({ showCart: false }))
  );
  const handleClose = () => {
    dispatch(toggleShowCart({ showCart: false }));
  };
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
          right: showCart ? 0 : '-50vw',
          height: '100vh',
          background: colorScheme === 'dark' ? '#1A1B1E' : 'white',
          zIndex: 1000,
        }}
        ref={ref}
        w={{ base: '70vw', md: '40vw', lg: '30vw' }}
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
            <BsCart3
              size={19}
              color={colorScheme === 'dark' ? 'white' : 'black'}
            />
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
      </Box>
    </Box>
  );
};

function NavbarMenu() {
  const { colorScheme } = useMantineColorScheme();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');
  const [blogSearch, setBlogSearch] = useState('');
  const [debounceQuery] = useDebouncedValue(blogSearch, 1000);
  const [searchActive, setSearchActive] = useState(false);
  const ref = useClickOutside(() => setSearchActive(false));
  const [opened, setOpened] = useState(false);
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(toggleShowCart({ showCart: true }));
  };

  const { data, isLoading, isError, refetch } =
    useApiServicesAppBlogSearchApiQuery(
      {
        searchParam: debounceQuery,
      },
      {
        skip: debounceQuery.trim() === '',
      }
    );

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
        className={scrollHeight >= 140 ? 'global-nav--sticky' : ''}
        position={scrollDirection}
        scrollheight={scrollHeight}
      >
        <Container size="xl">
          <Flex align={'center'} justify={'space-between'} py={3}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={Logo}
                alt="Girls 4 leadership Initiative"
                height={70}
              />
            </Link>

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
                <IconShoppingCart
                  fontWeight={400}
                  cursor={'pointer'}
                  size="18"
                />
              </ActionIcon>
              <ColorSchemeToggle />
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
                  <IconShoppingCart
                    fontWeight={400}
                    cursor={'pointer'}
                    size="18"
                  />
                </ActionIcon>
                <ColorSchemeToggle />
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
                    {isLoading ? (
                      <Center>
                        <Loader
                          color="rgba(250, 7, 7, 1)"
                          size="md"
                          type="dots"
                        />
                      </Center>
                    ) : isError ? (
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
                            onClick={() => refetch()}
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
                        {!isLoading && (data?.data?.length as number) <= 0 ? (
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
                        )}
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
