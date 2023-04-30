/* eslint-disable @typescript-eslint/no-shadow */
import React, { RefObject, useEffect, useRef, useState } from 'react';

// Animation Element
import { ReferencedElement } from '../../../styles';

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
};

let minScreenStyle: {
  height?: string;
  width?: string;
  animate: boolean;
};

interface AnimationProps {
  children: JSX.Element;
  axis?: string;
  direction?: string;
  width?: string;
  minScreenWidth?: string;
  minScreenStyle?: typeof minScreenStyle;
  minHeight?: string;
  duration?: string;
  animate?: boolean;
  position?: string;
  bottom?: string;
  left?: string;
}

const Animation = ({
  children,
  axis,
  direction,
  width,
  duration,
  minScreenWidth,
  minScreenStyle,
  minHeight,
  animate,
  position,
  bottom,
  left,
}: AnimationProps) => {
  const refItem = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const detector = (ref: RefObject<null>) => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setIsVisible(true);
        observer.unobserve(entry.target);
      });
    }, options);
    observer.observe(ref.current);
  };

  useEffect(() => {
    detector(refItem);
  }, []);

  return (
    <ReferencedElement
      axis={axis}
      direction={direction}
      ref={refItem}
      isVisible={isVisible}
      width={width}
      duration={duration}
      minScreenWidth={minScreenWidth}
      minScreenStyle={minScreenStyle}
      minHeight={minHeight}
      animate={animate}
      position={position}
      bottom={bottom}
      left={left}
    >
      {children}
    </ReferencedElement>
  );
};

export default Animation;
