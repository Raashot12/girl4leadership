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
} from '@mantine/core';
import { IconArrowForward } from '@tabler/icons';
import Link from 'next/link';
import React from 'react';
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
  grid-template-columns: 0.7fr 0.15fr 0.18fr 0.32fr 0.32fr;
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
  // const { wishlist, setWishlist } = useWishList();
  return (
    <Box mt={{ base: 110, lg: 140 }} mb={70}>
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
            pl={16}
            className="attribute-container report-name"
            fz={14}
            fw={600}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#8B99A3' }}
          >
            Item Info
          </Box>
          <Box
            pl={16}
            className="attribute-container caret-col"
            fz={14}
            fw={600}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#8B99A3' }}
          >
            Price
          </Box>
          <Box
            pl={16}
            className="attribute-container created-by"
            fz={14}
            fw={600}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#8B99A3' }}
          >
            Quantity
          </Box>
          <Box
            pl={16}
            className="attribute-container creation-date-col"
            fz={14}
            fw={600}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#8B99A3' }}
          >
            Edit
          </Box>
          <Box
            pl={16}
            className="attribute-container subtotal-col"
            fz={14}
            fw={700}
            sx={{ color: colorScheme === 'dark' ? 'white' : '#A1B1E' }}
          >
            Subtotal
          </Box>
        </GridWrapperReportTemplateLayout>
        <Divider mt={12} color={colorScheme ? '#DBE1E6' : 'white'} />
      </Container>
    </Box>
  );
};

export default Wishlist;
