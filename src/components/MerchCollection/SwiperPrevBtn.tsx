import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperPrevBtn = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>prev</button>;
};

export default SwiperPrevBtn;
