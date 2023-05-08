import {
  Box,
  Container,
  Text,
  Input,
  Button,
  useMantineColorScheme,
} from '@mantine/core';
import { accessoriesData } from './staticData';
import Accessory from './Accessory';

const Accessories = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Container size="xl" sx={{ padding: '30px 15px' }}>
        <Text
          sx={{
            fontSize: '24px',
            lineHeight: '38px',
            fontWeight: 700,
            color: '#262a2c',
          }}
        >
          ACCESSORIES
        </Text>
        <Box
          sx={{
            display: 'flex',
            columnGap: '40px',
            flexWrap: 'wrap',
            rowGap: '20px',
          }}
        >
          {accessoriesData.map((item) => {
            return <Accessory key={item.id} {...item} />;
          })}
        </Box>
      </Container>

      <Box
        sx={{
          background: '#060b20',
          minHeight: '163px',
        }}
      >
        <Box
          sx={{
            background:
              'url(https://preview.codeless.co/june/default/wp-content/uploads/2017/10/section.jpg) no-repeat scroll center center',
            width: '100%',
            height: '100%',
            minHeight: '163px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '@media (max-width:1045px)': {
              padding: '13px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minWidth: '85%',
              '@media (max-width: 1045px)': {
                flexDirection: 'column',
                minWidth: '100%',
              },
            }}
          >
            <Box>
              <Text
                sx={{
                  fontSize: '18px',
                  lineHeight: '28px',
                  fontWeight: 700,
                  letterSpacing: '0.4px',
                  marginBottom: '10px',
                  '@media (max-width: 1045px)': {
                    marginBottom: '0',
                  },
                }}
              >
                SUBSCRIBE & NEVER MISS A THING
              </Text>
              <Text>
                Subscribe to our newsletter & Get the latest right in your inbox
                every week
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 10px 5px 0',
                borderRadius: '30px',
                background: colorScheme === 'dark' ? '#25262b' : '#fff',
                maxWidth: '400px',
                marginTop: '5px',
              }}
            >
              <Input
                type="text"
                placeholder="Enter your Email"
                styles={{
                  input: {
                    border: 'none',
                  },
                }}
                sx={{
                  fontSize: '16px',
                  color: '#000',
                  padding: '0 10px',
                }}
              />
              <Button
                variant="subtle"
                sx={{
                  textTransform: 'uppercase',
                  borderLeft: '1px solid #dbe1e6',
                  fontSize: '14px',
                  color: colorScheme === 'dark' && '#fff',
                  '.mantine-Button-label': {
                    fontSize: '14px',
                  },
                  ':hover': {
                    background: 'none',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Accessories;
