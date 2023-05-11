/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Flex, Group } from '@mantine/core';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import styled from '@emotion/styled';

const FlexContainer = styled(Box as any)`
  &:hover {
    .text-card {
      /* height: 100%; */
      -webkit-column-break-inside: avoid;
      backface-visibility: hidden;
      -webkit-transition: background-color 2s ease-out;
      -moz-transition: background-color 2s ease-out;
      -o-transition: background-color 2s ease-out;
      transition: background-color 2s ease-out;
    }
  }
`;
const Accessory = ({ id, image, isSale }) => {
  return (
    <>
      <FlexContainer
        key={id}
        className="official-market"
        sx={{
          background: `url(${image}) no-repeat`,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minWidth: '265px',
          height: '370px',
          padding: '10px',
          '@media (max-width: 796px)': {
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
        <Flex
          align={'center'}
          className="text-card"
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            cursor: 'pointer',
            height: '40px',
            background: '#ffff',
            color: '#727f88',
            boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
            borderRadius: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '25px',
            columnGap: 20,
            padding: 10,
          }}
        >
          <MdOutlineAddShoppingCart />
          <Group spacing={20}>
            <MdOutlineAddShoppingCart />
            <MdOutlineAddShoppingCart />
          </Group>
        </Flex>
      </FlexContainer>
    </>
  );
};

export default Accessory;
