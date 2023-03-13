import React from 'react';

// Plugins and Library
import { useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export const ColorSchemeToggle = (): JSX.Element => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <ActionIcon
        size="lg"
        variant="outline"
        color={colorScheme === 'dark' ? 'brand.7' : 'brand.3'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        sx={{
          '&:hover': {
            background: 'none',
          },
        }}
      >
        {colorScheme === 'dark' ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </>
  );
};
