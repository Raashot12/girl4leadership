import { Box, Button, Flex, Text, useMantineColorScheme } from '@mantine/core';
import React from 'react';

const DialogConfirmationDetail = ({
  text,
  buttonProps,
  onClose,
  handleActivate,
  isLoading,
  otherProps,
}: {
  text: string | null;
  btnText?: string;
  otherProps?: {
    firstBtnText: string;
    subText: string;
  };
  buttonProps: {
    bg: string;
    btnText: string;
  };
  onClose: () => void;
  handleActivate?: () => void;
  isLoading?: boolean;
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box>
      <Box
        bg={colorScheme !== 'dark' ? 'white' : '#1A1B1E'}
        p={16}
        sx={{ borderRadius: 10 }}
        fw={500}
      >
        <Text fw={500}>{text}</Text>{' '}
        {otherProps?.subText && (
          <Text fw={500} mt={8}>
            {otherProps?.subText}
          </Text>
        )}
      </Box>

      <Flex mt={20} columnGap={24} mb={16} justify={'flex-end'}>
        <Button
          compact
          size="xs"
          sx={{
            '&.mantine-UnstyledButton-root': {
              background: 'white',
              borderRadius: '10px',
              fontWeight: 500,
              height: '42px',
              color: '#051438',
              padding: '0 30px',
            },
            '& .mantine-Button-label': {
              fontSize: '14px',
              fontWeight: 500,
            },
          }}
          onClick={onClose}
          disabled={isLoading}
        >
          {otherProps?.firstBtnText ? 'Back' : 'Close'}
        </Button>
        <Button
          fw={600}
          px={12}
          h={40}
          bg={buttonProps.bg}
          sx={{
            '&.mantine-UnstyledButton-root': {
              background: '#E25D24',
              borderRadius: '10px',
              fontWeight: 500,
              height: '42px',
              color: 'white',
              padding: '0 30px',
            },
            '& .mantine-Button-label': {
              fontSize: '14px',
              fontWeight: 500,
            },
          }}
          onClick={handleActivate}
          loading={isLoading}
        >
          {buttonProps.btnText}
        </Button>
      </Flex>
    </Box>
  );
};

export default DialogConfirmationDetail;
