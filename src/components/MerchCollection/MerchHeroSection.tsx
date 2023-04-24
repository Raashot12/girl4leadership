import Link from 'next/link';
import { Box, Container, Flex } from '@mantine/core';

const MerchHeroSection = (): JSX.Element => {
  return (
    <Box mt={77}>
      <Flex
        align="center"
        sx={{
          position: 'relative',
          top: 0,
          bottom: 0,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          minHeight: '534px',
          background: '#060b20',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            left: 0,
            minHeight: '725px',
            width: '100%',
            opacity: 0.3,
            zIndex: -1,
            background:
              'url(https://preview.codeless.co/june/default/wp-content/uploads/2017/11/largebanner-compressed.jpg) no-repeat scroll center center',
          }}
        ></Box>
        <Container size="xl">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Box sx={{ fontWeight: 600, fontSize: 36 }}>Inhale Fashion</Box>
            <Box
              sx={{
                fontWeight: 700,
                fontSize: 96,
                lineHeight: 0.95,
              }}
            >
              Exhale Style
            </Box>
            <Box
              sx={{
                fontSize: 16,
                marginTop: 10,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              New Spring Collection Flat 40% Off
            </Box>
            <Link href="/">
              <Box
                sx={{
                  padding: '15px 30px',
                  background: 'black',
                  color: 'white',
                  borderRadius: 26,
                  width: 205,
                  margin: '0 auto',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                SHOP COLLECTION
              </Box>
            </Link>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
};

export default MerchHeroSection;
