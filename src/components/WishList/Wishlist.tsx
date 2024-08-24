import styled from '@emotion/styled';
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
  useMantineColorScheme,
  Image,
  Group,
  Button,
} from '@mantine/core';
import { TiInputChecked } from 'react-icons/ti';
import { IconArrowForward } from '@tabler/icons';
import Link from 'next/link';
import React, { useState } from 'react';
import useWishList from 'util/useWishList';
import IconCloseModal from 'components/Icons/IconCloseModal';
import { DialogConfirmationModal } from 'components/Shared/style';
import IconConfirmDialog from 'components/Icons/IconConfirmDialog';
import DialogConfirmationDetail from 'components/Shared/DialogConfirmationDetail';
import { GiEmptyMetalBucketHandle } from 'react-icons/gi';
// import useWishList from 'util/useWishList';

const GridWrapperReportTemplateLayout = styled.div<{
  mb?: number;
  mt?: number;
  isMoble?: boolean;
}>`
  display: grid;
  column-gap: 1rem;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : `${0}px`)};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : `${0}px`)};
  align-items: center;
  grid-template-columns: 0.7fr 0.25fr 0.25fr 0.32fr;
  .attribute-container {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(var(--column-width-min), 1fr)
    );
  }
  .caret-col {
    --column-width-min: 1em;
    display: flex;
    align-items: center;
  }
  .report-name {
    --column-width-min: 10rem;
    text-align: left;
  }
  .created-by {
    --column-width-min: 5rem;
    text-align: left;
  }
  .creation-date-col {
    --column-width-min: 5rem;
    text-align: left;
  }
  .subtotal-col {
    --column-width-min: 5rem;
    text-align: left;
  }
`;
const Wishlist = () => {
  const { colorScheme } = useMantineColorScheme();
  const { wishlist, setWishlist } = useWishList();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productId, setProductId] = useState<string | undefined>('');
  const handleRemoveWishList = (id: string) => {
    const remainingWishlist = wishlist.filter((value) => value.id !== id);
    setWishlist(remainingWishlist);
    setOpenModal(false);
  };
  return (
    <Box
      mt={{ base: 110, lg: 140 }}
      mb={70}
      sx={{ backgroundColor: colorScheme !== 'dark' ? 'white' : '#1A1B1E' }}
    >
      <Center>
        <Stack>
          <Stack spacing={0} align="center">
            <Box component="h1" mt={0} mb={0} fz={{ base: 48, lg: 64 }}>
              Wishlist
            </Box>
            <Box h={4} w={80} sx={{ background: '#EB5A46' }}></Box>
          </Stack>
          <Flex
            justify={'center'}
            align={'center'}
            columnGap={16}
            fz={14}
            mt={30}
          >
            <Link href={'/'}>
              <Text
                component="div"
                sx={{
                  cursor: 'pointer',
                  display: 'inline-block',
                  fontWeight: 500,
                  color: colorScheme === 'dark' ? 'white' : '#1A1B1E',
                  ':hover': {
                    color: '#E16247',
                    fontWeight: 600,
                  },
                }}
              >
                Home
              </Text>
            </Link>
            <IconArrowForward />
            <Text
              component="div"
              sx={{
                cursor: 'pointer',
                fontWeight: 500,
                color: colorScheme === 'dark' ? 'white' : '#1A1B1E',
                display: 'inline-block',
                ':hover': {
                  color: '#E16247',
                  fontWeight: 600,
                },
              }}
            >
              Wishlist
            </Text>
          </Flex>
        </Stack>
      </Center>
      <Container size={'xl'} mt={30}>
        <GridWrapperReportTemplateLayout
          style={{
            padding: '8px 0px',
          }}
        >
          <Box
            className="attribute-container report-name"
            fz={14}
            fw={500}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#8B99A3' }}
          >
            Item Info
          </Box>
          <Box
            className="attribute-container caret-col"
            fz={14}
            fw={500}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#8B99A3' }}
          >
            Price
          </Box>

          <Box
            className="attribute-container creation-date-col"
            fz={14}
            fw={500}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#8B99A3' }}
          >
            Edit
          </Box>
          <Box
            className="attribute-container subtotal-col"
            fz={14}
            fw={500}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#8B99A3' }}
            // sx={{ color: colorScheme === 'dark' ? 'white' : '#A1B1E' }}
          >
            Move to Cart
          </Box>
        </GridWrapperReportTemplateLayout>
        <Divider mt={12} color={colorScheme ? '#DBE1E6' : 'white'} />
        {wishlist.length <= 0 ? (
          <Box mt={30} fw={600} fz={20}>
            <Center>
              <Group spacing={10}>
                <Text>No items in wishlist at the moment</Text>{' '}
                <GiEmptyMetalBucketHandle />
              </Group>
            </Center>
          </Box>
        ) : (
          <>
            <GridWrapperReportTemplateLayout>
              {wishlist?.map((product) => {
                return (
                  <React.Fragment key={product?.id}>
                    <Box
                      className="attribute-container report-name"
                      py={16}
                      mb={80}
                    >
                      <Flex align={'flex-start'} columnGap={16}>
                        <Box w={120} h={70}>
                          <Image
                            src={product?.fields?.FeaturedImage?.[0]?.url}
                            w={120}
                            height={'auto'}
                            sx={{
                              '&.mantine-Image-image': {
                                objectFit: 'contain',
                              },
                            }}
                            alt={product?.fields?.ProductName}
                          />
                        </Box>
                        <Box>
                          <Text
                            sx={{
                              color:
                                colorScheme === 'dark' ? 'white' : '#242729',
                            }}
                            fw={600}
                          >
                            {product?.fields?.ProductName}
                          </Text>
                          <Group spacing={10}>
                            <TiInputChecked />
                            <Text
                              fw={500}
                              fz={14}
                              sx={{
                                color:
                                  colorScheme === 'dark' ? 'white' : '#8B99A3',
                              }}
                            >
                              In stock
                            </Text>
                          </Group>
                          <Text
                            fw={500}
                            w={'fit-content'}
                            fz={14}
                            sx={{
                              color:
                                colorScheme === 'dark' ? 'white' : '#8B99A3',
                              borderBottomWidth: '1px',
                              borderBottomStyle: 'dashed',
                              borderBottomColor: '#262a2c',
                              cursor: 'pointer',
                            }}
                          >
                            Move to wishlist
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box
                      className="attribute-container caret-col"
                      py={16}
                      fw={600}
                      fz={22}
                      sx={{
                        color: colorScheme === 'dark' ? '#f1f0f0' : '#8B99A3',
                      }}
                    >
                      {product?.fields?.currency}&nbsp;
                      {product?.fields?.Price}
                    </Box>

                    <Box
                      className="attribute-container creation-date-col"
                      py={16}
                    >
                      <Flex
                        align={'center'}
                        justify={'center'}
                        w={30}
                        h={30}
                        sx={{ borderRadius: 5, cursor: 'pointer' }}
                        bg={'#FFF2F1'}
                        onClick={() => {
                          setOpenModal(true);
                          setProductId(product.id);
                        }}
                      >
                        <IconCloseModal
                          fill={colorScheme === 'dark' ? '#E25D24' : '#E25D24'}
                        />
                      </Flex>
                    </Box>
                    <Box className="attribute-container subtotal-col" py={16}>
                      <Button
                        sx={{
                          '&.mantine-UnstyledButton-root': {
                            background: '#E25D24',
                            fontWeight: 500,
                            borderRadius: 5,
                            height: '42px',
                          },
                          '& .mantine-Button-label': {
                            fontSize: '14px',
                            fontWeight: 500,
                          },
                        }}
                      >
                        ADD TO CART
                      </Button>
                    </Box>
                  </React.Fragment>
                );
              })}
            </GridWrapperReportTemplateLayout>
            <Divider mt={12} color={colorScheme ? '#DBE1E6' : 'white'} />
          </>
        )}
      </Container>
      <DialogConfirmationModal
        opened={openModal}
        onClose={() => {
          setOpenModal(false);
          setProductId('');
        }}
        withCloseButton={false}
        size="40%"
        centered
        title={
          <Flex justify={'space-between'} align={'center'}>
            <Text fz={18} fw={600}>
              Confirmation check
            </Text>
            <IconConfirmDialog />
          </Flex>
        }
      >
        <DialogConfirmationDetail
          text={
            'You are about to remove this product from wishlist. Kindly note that this will take it off the list.'
          }
          buttonProps={{
            bg: 'blue',
            btnText: 'Proceed',
          }}
          otherProps={{
            firstBtnText: 'Back',
            subText: 'Do you wish to proceed?',
          }}
          onClose={() => {
            setOpenModal(false);
            setProductId('');
          }}
          handleActivate={() => handleRemoveWishList(productId)}
        />
      </DialogConfirmationModal>
    </Box>
  );
};

export default Wishlist;
