/* eslint-disable no-useless-return */
import React, { useState } from 'react';
import { Box, Text, Loader } from '@mantine/core';
import { IconArrowsDiagonal } from '@tabler/icons';

const Product = ({ id, bgImg, isSale, name, amount }) => {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  setTimeout(() => {
    setIsloading(false);
    return;
  }, 3000);

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
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${bgImg})`,
            height: '353px',
            minWidth: '264px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '10px',
            position: 'relative',
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
          {isHover && (
            <Box
              onClick={() => {
                setIsloading(true);
              }}
              sx={{
                width: '50px',
                height: '50px',
                background: '#ffff',
                position: 'absolute',
                right: '10px',
                top: '30px',
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
    </>
  );
};

export default Product;
