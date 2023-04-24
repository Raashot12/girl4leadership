import {
  Box,
  Container,
  Text,
  Image,
  useMantineColorScheme,
  createStyles,
} from '@mantine/core';
import { card } from './staticData';

const Cards = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <Box sx={{ background: colorScheme === 'dark' ? '#232324' : '#ffff' }}>
      <Container size="xl" sx={{ padding: '35px 20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            columnGap: '15px',
            '@media (max-width: 767px)': {
              flexDirection: 'column',
              rowGap: '15px',
            },
          }}
        >
          {card.map((item) => {
            const { id, bgImg, text, others } = item;
            return (
              <Box
                key={id}
                sx={{
                  backgroundImage: `${bgImg}`,
                  height: '281px',
                  width: '100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  padding: '15px',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      colorScheme === 'dark' ? '#232324' : '#ffff',
                    display: 'grid',
                    placeContent: 'center',
                    height: '90px',
                    position: 'absolute',
                    bottom: '15px',
                    width: '94%',
                    textAlign: 'center',
                  }}
                >
                  <Text
                    sx={{
                      color: colorScheme === 'dark' ? '#ffff' : '#c7b79d',
                      fontSize: '18px',
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {text}
                  </Text>
                  <Text
                    sx={{
                      color: colorScheme === 'dark' ? '#ffff' : '#262a2c',
                      fontSize: '24px',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: '0.2px',
                    }}
                  >
                    <em>{others}</em>
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ padding: '70px 0 0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                '@media (min-width: 767px)': {
                  flexDirection: 'row',
                  columnGap: '20px',
                },
              }}
            >
              <Box className={classes.wrap}>
                <Text className={classes.text}> FEATURED</Text>
                <Image
                  src="https://preview.codeless.co/june/default/wp-content/themes/june/img/separator2.png"
                  width="24px"
                  height="14px"
                  sx={{ margin: '0 auto' }}
                />
              </Box>
              <Box className={classes.wrap}>
                <Text className={classes.text}>TOP SELLERS</Text>
                <Image
                  src="https://preview.codeless.co/june/default/wp-content/themes/june/img/separator2.png"
                  width="24px"
                  height="14px"
                  sx={{ margin: '0 auto' }}
                />
              </Box>
              <Text className={classes.text}>NEW ARRIVALS</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cards;

const useStyles = createStyles((theme) => ({
  text: {
    marginBottom: '15px',
    fontSize: '18px',
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: '0.4px',
    color: '#c1cad1',
  },
  wrap: {
    marginBottom: '15px',
    '@media (min-width: 767px)': {
      display: 'flex',
      columnGap: '25px',
    },
  },
}));
