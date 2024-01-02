import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useMantineColorScheme } from '@mantine/core';

const pulsate = keyframes`
    0% {
        transform: scale(1);
        opacity: 0.2
    }
    50% {
        transform: scale(1.05);
        opacity: 0.7
    }
    100% {
        transform: scale(1);
        opacity: 1
    }
`;
const IconDonateSvg = styled.svg`
  animation: ${pulsate} 2s ease infinite;
`;
const IconDonate = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <IconDonateSvg
      fill={colorScheme === 'dark' ? 'white' : '#000000'}
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      id="mobile-payment-done"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <path
        id="secondary"
        d="M20,17H15V7h5a1,1,0,0,1,1,1v8A1,1,0,0,1,20,17Zm-5-6h6"
        style={{
          fill: 'none',
          stroke: '#E25D24',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <polyline
        id="secondary-2"
        data-name="secondary"
        points="8 12 9.09 13.25 11 10.75"
        style={{
          fill: 'none',
          stroke: '#E25D24',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        id="primary"
        d="M15,20V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H14A1,1,0,0,0,15,20ZM11,3H7l.5,2h3Z"
        style={{
          fill: 'none',
          stroke: colorScheme === 'dark' ? 'white' : 'rgb(0, 0, 0)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
    </IconDonateSvg>
  );
};

export default IconDonate;
