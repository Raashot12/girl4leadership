import { Flex } from '@mantine/core';
import IconButtonNext from 'components/Icons/IconButtonNext';
import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNextBtn = () => {
  const swiper = useSwiper();
  return (
    <Flex
      align="center"
      justify={'center'}
      sx={{ background: '#FFFFFF', borderRadius: '50%' }}
      w={24}
      h={24}
    >
      <IconButtonNext onclick={() => swiper.slideNext()} />
    </Flex>
  );
};

export default SwiperNextBtn;
