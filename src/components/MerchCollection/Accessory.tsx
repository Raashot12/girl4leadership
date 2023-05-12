/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Flex, Group } from '@mantine/core';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import styled from '@emotion/styled';
import { IconArrowsDiagonal, IconHeart } from '@tabler/icons';

const FlexContainer = styled(Box as any)`
  & .other-icons {
    height: 0;
    width: 0;
    opacity: 0;
    transition: width 0s, opacity 0.7s linear;
  }

  &:hover {
    & .backdrop {
      background: rgba(69, 69, 69, 0.5);
      background-size: cover;
      background-position: center;
      height: 370px;
      min-width: 265px;
      position: absolute;
      left: 0;
      top: 0;
      transition: all ease-in-out 0.7s;
    }

    .other-icons {
      height: auto;
      width: auto;
      opacity: 1;
      margin-left: 20px;
    }

    .text-card {
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
            maxWidth: '100%',
            width: '280px',
          },
        }}
      >
        <Box className="backdrop"></Box>
        {isSale && (
          <Box
            sx={{
              background: '#eb5a46',
              color: '#ffff',
              borderRadius: '3px',
              width: '48px',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 2,
              position: 'relative',
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
            padding: 10,
            width: 'fit-content',
          }}
        >
          <MdOutlineAddShoppingCart size={18} />
          <Group spacing={20} className="other-icons">
            <IconArrowsDiagonal size={18} />

            <IconHeart size={18} />
          </Group>
        </Flex>
      </FlexContainer>
    </>
  );
};

export default Accessory;
