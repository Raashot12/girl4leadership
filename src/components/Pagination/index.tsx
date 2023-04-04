/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { List, Flex, Button, useMantineColorScheme } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface IPaginationProps {
  idToClampTo?: string;
  data?: any[];
  pagination: any[];
  // eslint-disable-next-line no-unused-vars
  prevPage: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  nextPage: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  changePage: (page: number, e?: any) => void;
}

// the id is used when the page is changed it scrolls back to the top of that section in the parent
const Pagination: FC<IPaginationProps> = ({
  idToClampTo = '',
  data,
  pagination,
  prevPage,
  nextPage,
  changePage,
}) => {
  const router = useRouter();
  const { colorScheme } = useMantineColorScheme();

  // when data changes navigate to page 1
  useEffect(() => {
    changePage(1);
  }, [data]);

  return (
    <Flex justify={'center'} align="center" columnGap={20}>
      {/* left arrow button */}
      <Button
        display={pagination.length === 0 ? 'none' : 'flex'}
        onClick={(e: any) => {
          prevPage(e);
          const pathAndSlug = router.asPath.split('#')[0];
          const newPath = `${pathAndSlug}#${idToClampTo}`;
          // eslint-disable-next-line no-unused-expressions
          idToClampTo ? window.location.replace(newPath) : '';
        }}
        // check if on first page
        bg={
          pagination[0]?.current === true ? 'rgba(255, 86, 4, 0.5)' : '#E25D24'
        }
        sx={{
          ':hover': {
            backgroundColor: 'none',
          },
          ':active': {
            backgroundColor: 'none',
          },
          '.mantine-Button-label': {
            fontSize: 14,
          },
          '&.mantine-Button-root': {
            height: 36,
            paddingLeft: 14,
            paddingRight: 14,
          },
        }}
      >
        <MdKeyboardArrowLeft />
      </Button>

      <List
        display="flex"
        sx={{ columnGap: 12, alignItems: 'center', justifyContent: 'center' }}
      >
        {pagination.map((page) => {
          if (!page.ellipsis) {
            return (
              <React.Fragment key={page.id}>
                {/* main numbers */}
                <Button
                  onClick={(e: any) => {
                    changePage(page.id, e);
                    // eslint-disable-next-line no-unused-expressions
                    const pathAndSlug = router.asPath.split('#')[0];
                    const newPath = `${pathAndSlug}#${idToClampTo}`;
                    // eslint-disable-next-line no-unused-expressions
                    idToClampTo ? window.location.replace(newPath) : '';
                  }}
                  fz={14}
                  bg={page.current ? '#E25D24' : 'transparent'}
                  sx={{
                    ':hover': {
                      backgroundColor: page.current ? '#E25D24' : '',
                    },
                    ':active': {
                      backgroundColor: '#E25D24',
                      transform: 'scale(0.95)',
                    },
                    borderColor: '#E25D24',
                    '.mantine-Button-label': {
                      fontSize: 14,
                    },
                    '&.mantine-Button-root': {
                      color: page.current
                        ? 'white'
                        : colorScheme === 'dark'
                        ? 'white'
                        : '#051438',
                      height: 36,
                      '&:hover': {
                        background: '#E25D24',
                        color: 'white',
                        border: 'none',
                      },
                    },
                  }}
                  fw={400}
                >
                  {page.id}
                </Button>
              </React.Fragment>
            );
          }
          return (
            <List.Item
              key={page.id}
              sx={{
                listStyleType: 'none',
                '&:hover': {
                  background: 'none !important',
                },
              }}
              // color={colorScheme === 'dark' ? 'red' : 'yellow'}
            >
              {/* Ellipsis */}
              <Button
                bg="transparent"
                fw={400}
                sx={{
                  borderColor: '#E25D24',
                  '.mantine-Button-label': {
                    fontSize: 14,
                  },
                  '&.mantine-Button-root': {
                    height: 36,
                    color: colorScheme === 'dark' ? 'white' : '#051438',
                    '&:hover': {
                      background: 'none !important',
                    },
                  },
                }}
              >
                &hellip;
              </Button>
            </List.Item>
          );
        })}
      </List>

      {/* right arrow button */}
      <Button
        display={pagination.length === 0 ? 'none' : 'flex'}
        onClick={(e: any) => {
          nextPage(e);
          // eslint-disable-next-line no-unused-expressions
          const pathAndSlug = router.asPath.split('#')[0];
          const newPath = `${pathAndSlug}#${idToClampTo}`;
          // eslint-disable-next-line no-unused-expressions
          idToClampTo ? window.location.replace(newPath) : '';
        }}
        // check if on last page
        bg={
          pagination[pagination.length - 1]?.current === true
            ? 'rgba(255, 86, 4, 0.5)'
            : '#E25D24'
        }
        sx={{
          ':hover': {
            backgroundColor: 'none',
          },
          ':active': {
            backgroundColor: 'none',
          },
          '.mantine-Button-label': {
            fontSize: 14,
          },
          '&.mantine-Button-root': {
            height: 36,
            paddingLeft: 14,
            paddingRight: 14,
          },
        }}
      >
        <MdKeyboardArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
