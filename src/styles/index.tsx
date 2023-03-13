/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/display-name */
import { Text, Sx, Box, Grid, Flex, MantineNumberSize } from '@mantine/core';
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
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
