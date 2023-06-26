import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Text,
  TextInput,
  useMantineColorScheme,
} from '@mantine/core';
import { IconBrandGoogle, IconSend } from '@tabler/icons';

import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

const Register = () => {
  const { colorScheme } = useMantineColorScheme();
  const route = useRouter();
  async function handleSubmitOnboardingForm() {
    try {
      const response = await axios.post('/api/register', {
        email: 'rasheediskilu.dev@gmail.com',
        password: 'Akanni_002',
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container size="xs">
      <Box mt={130} w={'100%'}>
        <Text sx={{ fontWeight: 'bold' }} fz={20} mb={20} ta={'center'}>
          Welcome to Girls 4 Leadership Initiative
        </Text>
        <Box
          sx={{ boxShadow: '0 0 10px rgb(0 0 0 / 10%)', borderRadius: 10 }}
          p={{ base: 20, md: 40 }}
          mb={20}
        >
          <Stack spacing={19}>
            <Box>
              <TextInput
                label="Full Name"
                placeholder="Rash$ed Iski$lu"
                type="text"
                required
              />
            </Box>
            <Box>
              <TextInput
                label="Email"
                placeholder="rasheediskil$u@gmail.com"
                type="text"
                required
              />
            </Box>
            <Box>
              <TextInput
                label="Username"
                placeholder="Username"
                type="text"
                required
              />
            </Box>
            <Box>
              <TextInput
                label="Password"
                placeholder="Password"
                type="password"
                required
              />
            </Box>
          </Stack>
          <Button
            fullWidth
            mt={20}
            onClick={handleSubmitOnboardingForm}
            sx={{
              '&.mantine-Button-root': {
                background: '#E25D24',
                height: 40,
              },
              '& .mantine-Button-label': {
                fontSize: 16,
                fontWeight: 600,
              },
              borderRadius: '10px',
            }}
            rightIcon={<IconSend style={{ cursor: 'pointer' }} size={16} />}
          >
            Sign up
          </Button>
          <Text mt={10} fw={500}>
            Already have an account?{' '}
            <Text
              component="a"
              color="#E25D24"
              fw={600}
              sx={{ cursor: 'pointer' }}
              onClick={() => route.push('/signin')}
            >
              Sign in
            </Text>
          </Text>
          <Divider mt={16} size={1.5} />
          <Button
            leftIcon={<IconBrandGoogle color="#EA4335" />}
            fullWidth
            mt={16}
            sx={{
              background: 'none',
              color: colorScheme === 'dark' ? '#c4c4c4' : '#051438',
              border: '1px solid #F0F0F0',
              '&.mantine-Button-root': {
                background: 'none',
                height: 40,
              },
              '& .mantine-Button-label': {
                fontSize: 16,
                fontWeight: 600,
              },
              borderRadius: '10px',
            }}
          >
            Sign up with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
