import React, { useState } from 'react';
import { Box, Image, createStyles, Button } from '@mantine/core';
import { LoaderAnimation } from 'components/Shared/ScreenLoader';
import Product from './Product';

const useStyles = createStyles(() => ({
  text: {
    marginBottom: '10px',
    letterSpacing: '0.4px',
    fontSize: '14px',
    color: '#c1cad1',
    textTransform: 'uppercase',
    ':hover': {
      background: 'none',
    },
  },
  wrap: {
    marginBottom: '16px',
    fontSize: '14px',
    '@media (min-width: 767px)': {
      display: 'flex',
      columnGap: '25px',
      alignItems: 'center',
    },
  },
}));

const Products = ({ categories, filterItems, product }) => {
  const { classes } = useStyles();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Box pt={{ base: 10, md: 60 }} pb={{ base: 10, md: 60 }}>
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
                sx={{
                  '@media (max-width: 767px)': {
                    '& .mantine-Button-label': {
                      fontSize: 14,
                    },
                  },
                }}
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
                alt="product image"
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
          {product.map((item) => (
            <React.Fragment key={item.id}>
              <Product {...item} />
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Products;
