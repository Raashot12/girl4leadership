import { Global } from '@mantine/core';

const GlobalFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Gilroy',
            src: `url(../fonts/gilroy/Gilroy-Regular.tff format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gilroy',
            src: `url('/fonts/gilroy/Gilroy-Medium.tff') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 500,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gilroy',
            src: `url('/fonts/gilroy/Gilroy-Semibold.tff') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 600,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gilroy',
            src: `url('/fonts/gilroy/Gilroy-Bold.tff') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gilroy',
            src: `url('/fonts/gilroy/Gilroy-Black.tff') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 800,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gilroy',
            src: `url('/fonts/gilroy/Gilroy-Heavy.tff') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 900,
            fontDisplay: 'swap',
          },
        },
      ]}
    />
  );
};

export default GlobalFonts;
