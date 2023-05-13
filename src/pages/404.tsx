import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from '@mantine/core';
import { Layout } from 'components/Layout/Layout';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

function NotFoundImage() {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <Layout pageTitle="Error Page">
      <Container className={classes.root} size="lg" mt={90}>
        <SimpleGrid
          spacing={80}
          cols={2}
          breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
        >
          <Image
            src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
            className={classes.mobileImage}
            alt=""
          />
          <div>
            <Title className={classes.title} sx={{ color: '#E25D24' }}>
              Something is not right...
            </Title>
            <Text color="dimmed" size="lg">
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>
            <Button
              size="md"
              onClick={() => router.push('/')}
              mt="xl"
              sx={{
                height: '60px',
                background: '#E25D24',
                ':hover': {
                  background: '#E25D24',
                  transition: 'all ease-in-out 0.5s',
                },
                '.mantine-Button-label': {
                  fontSize: '14px',
                  padding: '0',
                },
              }}
            >
              Get back to home page
            </Button>
          </div>
          <Image
            src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
            className={classes.desktopImage}
            alt=""
          />
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
export default NotFoundImage;
