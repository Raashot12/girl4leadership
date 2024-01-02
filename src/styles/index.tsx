/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/display-name */
import {
  Text,
  Sx,
  Box,
  Grid,
  Flex,
  MantineNumberSize,
  Modal,
  BoxProps,
} from '@mantine/core';
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import { Swiper } from 'swiper/react';
import {
  bottomToTopAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
} from '../components/Shared/Animate';

type IProps = {
  children?: React.ReactNode;
  sx?: Sx;
  gutter?: MantineNumberSize;
  gutterLg?: MantineNumberSize;
  md?: number;
  lg?: number;
  sm?: number;
  mt?: any;
};

const TextRef = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (
    <Text ref={ref} sx={props.sx}>
      {props.children}
    </Text>
  );
});
export const TextMotion = motion(TextRef);

const BoxRef = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (
    <Box ref={ref} sx={props.sx} mt={props.mt}>
      {props.children}
    </Box>
  );
});
export const BoxMotion = motion(BoxRef);

const GridRef = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (
    <Grid
      ref={ref}
      sx={props.sx}
      gutter={props.gutter}
      gutterLg={props.gutterLg}
    >
      {props.children}
    </Grid>
  );
});
export const GridBox = motion(GridRef);
const GridColRef = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (
    <Grid.Col ref={ref} sx={props.sx} sm={props.sm} md={props.md}>
      {props.children}
    </Grid.Col>
  );
});
export const GridCol = motion(GridColRef);

const FlexRef = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (
    <Flex ref={ref} sx={props.sx}>
      {props.children}
    </Flex>
  );
});
export const FlexBox = motion(FlexRef);

// Animation Box Element
let minScreenStyle: {
  height?: string;
  width?: string;
  animate: boolean;
};

interface Props {
  axis?: string;
  direction?: string;
  isVisible: boolean;
  width?: string;
  duration?: string;
  minScreenWidth?: string;
  minScreenStyle?: typeof minScreenStyle;
  minHeight?: string;
  animate?: boolean;
  position?: string;
  bottom?: string;
  left?: string;
}

export const ReferencedElement = styled.div<Props>`
  position: relative;
  position: ${(props) => (props.position ? props.position : 'relative')};
  bottom: ${(props) => (props.bottom ? props.bottom : '')};
  /* background-color: transparent; */

  ${(props) =>
    props.isVisible &&
    props.animate &&
    (props.axis === 'horizontal' || ('undefined' && props.direction === 'right')
      ? leftToRightAnimationsharedCSS
      : props.direction === 'left'
      ? rightToLeftAnimationsharedCSS
      : props.direction === 'top'
      ? {
          ...bottomToTopAnimationsharedCSS,
          'animation-duration': `${props.duration}`,
        }
      : '')}
  width: ${(props) => props.width};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '')};
  @media screen and (min-width: ${(props) => props.minScreenWidth}) {
    opacity: 0;
    ${(props) =>
      props.isVisible &&
      props.minScreenStyle &&
      props.minScreenStyle.animate &&
      (props.axis === 'horizontal' ||
      ('undefined' && props.direction === 'right')
        ? leftToRightAnimationsharedCSS
        : props.direction === 'left'
        ? rightToLeftAnimationsharedCSS
        : props.direction === 'top'
        ? bottomToTopAnimationsharedCSS(props.duration)
        : '')}
    height: ${(props) =>
      props.minScreenStyle ? props.minScreenStyle.height : props.width};
    width: ${(props) =>
      props.minScreenStyle ? props.minScreenStyle.width : props.width};
  }
`;

const bottomToTopAnimationsharedCSS = (props: string | undefined) => css`
  animation-name: ${bottomToTopAnimation};
  animation-duration: ${props};
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  opacity: 1 !important;
`;
const leftToRightAnimationsharedCSS = css`
  opacity: 1 !important;
  animation-name: ${leftToRightAnimation};
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-direction: forwards;
  animation-play-state: running;
`;

const rightToLeftAnimationsharedCSS = css`
  animation-name: ${rightToLeftAnimation};
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-play-state: running;
  opacity: 1 !important;
`;
export const GridWrapper = styled.div`
  --auto-grid-min-size: 16rem;
  display: grid;
  margin-top: 2rem;
  grid-gap: 2rem;
  position: relative;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  box-sizing: border-box;
  & .mantine-Image-image {
    height: 280px !important;
    object-fit: cover !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  & .card-container {
    overflow: hidden;
    height: fit-content;
    position: relative;
    .text-card {
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      align-items: center;
      width: 100%;
      display: none;
    }
  }
  .card-container:hover {
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
    img {
      transform: scale(1.0423);
      -webkit-transition: -webkit-transform 0.5s;
      transition: -webkit-transform 0.5s;
      transition: transform 0.5s;
      transition: transform 0.5s, -webkit-transform 0.5s;
      transition: transform 0.5s, -webkit-transform 0.5s;
    }
  }

  .card-container:hover .text-card {
    height: 100%;
    width: 100%;
    display: flex;
    background-color: rgba(15, 15, 15, 0.4);
    -webkit-column-break-inside: avoid;
    justify-content: center;
    backface-visibility: hidden;
    transform: translate(-50%, -50%);
    padding-left: 1rem;
    padding-right: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
  }
`;

export const CustomizedModalPreviewer = styled(Modal)`
  & .mantine-Paper-root {
    background-color: rgba(15, 15, 15, 0.6);
    position: 'relative';
    overflow: hidden;
  }
  & .mantine-Modal-header {
    z-index: 999;
    color: #ffffff;
    font-weight: 600;
  }
  & .mantine-Text-root {
    width: 100%;
    margin-right: 0;
  }
`;

export const SwiperCustom = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  body {
    background: #000;
    color: #000;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CustomTwoSlider = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  body {
    background: #000;
    color: #000;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    height: 850px !important;
  }
`;
export const WrapperBox = styled(Box)<BoxProps>`
  .mySwiper {
    margin-top: 30px;
  }
  img {
    width: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    --swiper-theme-color: #c1cad1 !important;
    font-size: '18px';
  }

  .mySwiper2 {
    height: 66%;
    width: 100%;
    margin-bottom: 5%;
  }

  .mySwiper {
    height: 20%;
  }

  .swiper-slide {
    background-size: cover;
    background-position: 50%;
  }

  .mySwiper .swiper-slide-thumb-active {
    border-bottom: 3px solid #000 !important;
    padding-bottom: 15px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    .swiper-slide img {
      max-width: 100%;
    }
  }

  .mantine-Paper-root {
    z-index: 999 !important;
  }
  .swiper {
    z-index: 0 !important;
  }
`;
