import {
  Box,
  Container,
  Text,
  useMantineColorScheme,
  Image,
  createStyles,
  Group,
} from '@mantine/core';
import { BsFillShareFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import ScrollablComponents from 'components/Shared/ScrollableUI/ScrollablComponents';
import { blogAndNewsUpdate, giftWrapSection } from './staticData';

const useStyle = createStyles(() => ({
  tagStyle: {
    background: '#fff',
    color: '#000',
    marginRight: '15px',
    padding: '5px 10px',
    borderRadius: '20px',
    cursor: 'pointer',
    ':hover': {
      background: '#e1621b',
      color: '#fff',
      transition: 'all 0.5s ease-out',
    },
  },
}));

const MerchCollectionBlog = () => {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyle();

  return (
    <Container size="xl" sx={{ padding: '50px 15px' }}>
      <Text
        sx={{
          textAlign: 'center',
          fontSize: '36px',
          lineHeight: 1.4,
          fontWeight: 600,
          color: colorScheme === 'dark' ? '#fff' : '#262a2c',
        }}
      >
        Blog & News Updates
      </Text>
      <Text
        sx={{
          textAlign: 'center',
          lineHeight: 1.2,
          color: '#8b99a3',
          marginBottom: '30px',
        }}
      >
        Checkout our blog & the latest in style and offers as they happen
      </Text>
      <ScrollablComponents>
        {blogAndNewsUpdate.map((item) => {
          const { id, image, likes, share, tagOne, tagTwo, title } = item;
          return (
            <Box key={id} sx={{ marginRight: '20px' }}>
              <Box
                w={{ base: '320px', sm: '393px' }}
                sx={{
                  minHeight: '242px',
                  background: `url(${image}) no-repeat`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  position: 'relative',
                  padding: '0 10px',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '10px',
                    display: 'flex',
                  }}
                >
                  <Text className={classes.tagStyle}>{tagOne}</Text>
                  <Text className={classes.tagStyle}>{tagTwo}</Text>
                </Box>
              </Box>

              <Box w={{ base: '320px', sm: '393px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                  mt={16}
                >
                  <Text sx={{ color: '#c1cad1', fontSize: '14px' }}>
                    By {` `}
                    <em
                      style={{
                        color: colorScheme === 'dark' ? '#fff' : '#e1621b',
                      }}
                    >
                      ANITA GIBS
                    </em>
                    /September 28, 2020
                  </Text>
                  <Group spacing={0} align="center">
                    <AiOutlineHeart
                      style={{
                        color: colorScheme === 'dark' ? '#fff' : '#e1621b',
                        marginRight: '5px',
                      }}
                      size={16}
                    />
                    <Text sx={{ color: '#8b99a3' }} fz={14}>
                      {likes}
                    </Text>
                  </Group>
                  <Group
                    sx={{
                      color: '#8b99a3',
                      cursor: 'pointer',
                    }}
                    spacing={0}
                  >
                    <BsFillShareFill
                      style={{
                        color: colorScheme === 'dark' ? '#fff' : '#e1621b',
                        marginRight: '5px',
                      }}
                      size={14}
                    />
                    <Text fz={14}>{share}</Text>
                  </Group>
                </Box>
                <Text
                  sx={{
                    fontSize: '18px',
                    lineHeight: 1.2,
                    margin: '10px 0',
                    fontWeight: 700,
                  }}
                >
                  {title}
                </Text>
                <Text sx={{ color: '#8b99a3', lineHeight: 1.3 }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </Text>
              </Box>
            </Box>
          );
        })}
      </ScrollablComponents>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '50px 0',
          '@media (max-width:1213px)': {
            justifyContent: 'flex-start',
            columnGap: '15px',
            rowGap: '15px',
          },
        }}
      >
        {giftWrapSection.map((item) => {
          const { id, bgColor, icon, iconAlt, text, subText } = item;
          return (
            <Box
              key={id}
              sx={{
                minWidth: '393px',
                background: colorScheme === 'dark' ? '#000' : bgColor,
                color: '#fff',
                display: 'flex',
                padding: '15px 25px',
                alignItems: 'center',
                '@media (max-width:835px)': {
                  minWidth: '100%',
                },
              }}
            >
              <Image
                src={icon}
                style={{ width: '43px', height: '43px', marginRight: '20px' }}
                alt={iconAlt}
              />
              <Box>
                <Text
                  sx={{
                    fontSize: '14px',
                    lineHeight: 1.2,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '0.4px',
                  }}
                >
                  {text}
                </Text>
                <Text>{subText}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default MerchCollectionBlog;
