import React, { useState } from 'react';
import { Box, Text, Image, createStyles, Button } from '@mantine/core';
import { LoaderAnimation } from 'components/Shared/ScreenLoader';

const Products = ({ categories, filterItems, product }) => {
  const { classes } = useStyles();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Box sx={{ padding: '70px 0 0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            '@media (min-width: 767px)': {
              flexDirection: 'row',
              columnGap: '20px',
            },
          }}
        >
          {categories.map((category: string, index: number) => (
            <Box className={classes.wrap} key={index}>
              <Button
                variant="subtle"
                className={`${classes.text} ${
                  selectedIndex === index && 'is-active'
                }`}
                onClick={() => {
                  setLoading(true);
                  filterItems(category);
                  setSelectedIndex(index);
                }}
              >
                {category}
              </Button>
              <Image
                src="https://preview.codeless.co/june/default/wp-content/themes/june/img/separator2.png"
                width="24px"
                height="14px"
                sx={{
                  display: `${index === categories.length - 1 && 'none'}`,
                  margin: '0 auto',
                  '@media (min-width: 767px)': {
                    marginTop: '-12px',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {loading ? (
        <LoaderAnimation />
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            columnGap: '15px',
            '@media (max-width: 767px)': {
              flexDirection: 'column',
              rowGap: '15px',
            },
          }}
        >
          {product.map((item) => {
            const { id, bgImg, isSale, name, amount } = item;
            return (
              <Box
                key={id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `${bgImg}`,
                    height: '353px',
                    minWidth: '264px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '10px',
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
                  <Text sx={{ color: '#eb5a46', fontWeight: 600 }}>
                    ${amount}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Products;

const useStyles = createStyles(() => ({
  text: {
    marginBottom: '15px',
    letterSpacing: '0.4px',
    color: '#c1cad1',
    textTransform: 'uppercase',
    ':hover': {
      background: 'none',
    },
  },
  wrap: {
    marginBottom: '15px',
    '@media (min-width: 767px)': {
      display: 'flex',
      columnGap: '25px',
      alignItems: 'center',
    },
  },
}));
