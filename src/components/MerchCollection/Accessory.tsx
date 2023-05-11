import { useState } from 'react';
import { Box } from '@mantine/core';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Accessory = ({ id, image, isSale }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        key={id}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        sx={{
          background: `url(${image}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minWidth: '265px',
          height: '370px',
          padding: '10px',
          '@media (max-width: 796px)': {
            width: '100%',
          },
          ':hover': {
            opacity: 0.2,
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
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          minWidth: '60px',
          height: '60px',
          background: '#ffff',
          color: '#727f88',
          boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          borderRadius: '5px',
          display: 'grid',
          placeContent: 'center',
          fontSize: '25px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: `${isHover && '0 10px'}`,
            columnGap: `${isHover && '15px'}`,
          }}
        >
          <MdOutlineAddShoppingCart />
          {isHover && (
            <>
              <MdOutlineAddShoppingCart />
              <MdOutlineAddShoppingCart />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Accessory;
