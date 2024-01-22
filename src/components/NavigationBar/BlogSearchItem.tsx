import { Box, Flex, Image, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';
import { Article } from 'types/merchSection';

const BlogSearchItem = ({ value }: { value: Article }) => {
  const router = useRouter();
  return (
    <Flex align={'flex-start'} columnGap={25} wrap={{ base: 'wrap' }}>
      <Box
        w={{ base: '100%', sm: '12rem' }}
        h={{ base: '9rem', sm: '12rem' }}
        pos={'relative'}
        sx={{ overflow: 'hidden' }}
      >
        <Image
          src={value?.attributes?.featuredImage?.data?.attributes?.url}
          alt={value?.attributes?.featuredImage?.data?.attributes?.url}
          sx={{
            '& .mantine-Image-image': {
              borderRadius: '7px',
              height: '100%',
              position: 'absolute',
              objectFit: 'cover',
              fontWeight: 500,
              inset: '0px',
              width: '100%',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
            },
          }}
        />
      </Box>
      <Box
        w={{ base: '100%', sm: '70%' }}
        sx={{ cursor: 'pointer' }}
        onClick={() => router.push(`/blog/${value?.attributes?.slug}`)}
      >
        <Text fw={700}>{value?.attributes?.title}</Text>
        <Text fw={'normal'} fz={'0.875rem'}>
          {value.attributes?.summary?.substring(0, 150)}...
        </Text>
        <Text mt={12}>
          <span style={{ fontWeight: '500' }}>
            {value?.attributes?.category}
          </span>{' '}
          <span
            style={{
              color: ' #999',
              fontWeight: 400,
              fontSize: '0.875rem',
            }}
          >
            --
            {dayjs(value.attributes?.publishedAt).format('YYYY-MM-DD HH:mma')}
          </span>
        </Text>
      </Box>
    </Flex>
  );
};

export default BlogSearchItem;
