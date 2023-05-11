import React from 'react';
import { useSwiper } from 'swiper/react';
import IconButtonBack from 'components/Icons/IconButtonBack';
import { Flex } from '@mantine/core';

const SwiperPrevBtn = () => {
  const swiper = useSwiper();
  return (
    <Flex
      align="center"
      justify={'center'}
      sx={{ background: '#FFFFFF', borderRadius: '50%' }}
      w={24}
      h={24}
      onClick={() => swiper.slidePrev()}
    >
      <IconButtonBack />
    </Flex>
  );
};

export default SwiperPrevBtn;
