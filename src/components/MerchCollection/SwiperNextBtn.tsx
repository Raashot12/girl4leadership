import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNextBtn = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>next</button>;
};

export default SwiperNextBtn;
