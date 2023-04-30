/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */
import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import React, { useState, useRef, useEffect } from 'react';

const BoxCustom = styled(Box as any)`
  cursor: pointer;
  scroll-behavior: smooth;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #e25d24;
    border-radius: 5px;
    background-image: -webkit-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #e25d24;
  }
`;

interface Props {
  children: React.ReactNode;
}
const ScrollablComponents: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setscrollWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerWidth = containerRef.current.scrollWidth;
    setscrollWidth(containerWidth);
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft, scrollWidth]);
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth } = containerRef.current;
      if (scrollLeft + offsetWidth >= scrollWidth) {
        setStartX(0);
        setScrollLeft(0);
      }
    }
  };
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    setStartX(e.pageX - containerRef.current?.offsetLeft!);
    setScrollLeft(containerRef.current?.scrollLeft!);
    if (containerRef.current) {
      const { scrollLeft, offsetWidth } = containerRef.current;
      if (scrollLeft + offsetWidth >= scrollWidth) {
        setStartX(0);
        setScrollLeft(0);
      }
    }
  };
  return (
    <BoxCustom
      sx={{
        paddingBottom: 15,
        overflow: 'auto',
        flexShrink: 0,
        display: 'flex',
        scrollSnapType: 'x mandatory',
      }}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onScroll={handleScroll}
    >
      {children}
    </BoxCustom>
  );
};

export default ScrollablComponents;
