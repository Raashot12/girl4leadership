import '../font.css';
import {
  ReactElement,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import 'aos/dist/aos.css';
import type { NextPage } from 'next';
import { Provider } from 'react-redux';
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { buttonStyles, checkboxStyles, defaultFonts, inputStyles } from 'theme';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { LoaderAnimation } from 'components/Shared/ScreenLoader';
import store from '../state/store';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/style.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [loading, setLoading] = useState(true);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const getLayout = Component.getLayout ?? ((page) => page);
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  const handlePageScroll = useCallback(() => {
    setTimeout(() => {
      if (typeof window !== undefined && window.location.hash) {
        const pageSection = document.getElementById(
          window.location.hash.substring(1)
        );
        if (pageSection && pageSection.offsetTop) {
          window.scrollTo({
            top: pageSection.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    setLoading(false);
    handlePageScroll();
  }, [handlePageScroll]);

  useEffect(() => {
    if (process.browser) {
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
    handlePageScroll();
  });

  return (
    <Provider store={store}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            globalStyles: (theme) => ({
              body: {
                ...theme.fn.fontStyles(),
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.white,
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.brand[5]
                    : theme.black,
                lineHeight: theme.lineHeight,
              },
              a: {
                textDecoration: 'none',
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.brand[5]
                    : theme.black,
              },
              html: {
                scrollBehavior: 'smooth',
              },
            }),
            colorScheme,
            black: '#051438',
            colors: {
              brand: [
                '#020217',
                '#060746',
                '#0B0C7D',
                '#E25D24',
                '#5b5cf1',
                '#c4c4c4',
                '#141517',
                '#ffffff',
              ],
            },
            primaryColor: 'brand',
            primaryShade: 2,
            fontFamily: defaultFonts,

            headings: {
              fontFamily: defaultFonts,
              sizes: {
                h2: { fontWeight: 700, fontSize: '24px', lineHeight: 1.35 },
                h3: { fontWeight: 600, fontSize: '18px', lineHeight: 1.25 },
              },
            },

            components: {
              Input: {
                styles: () => ({
                  input: inputStyles.input,
                  label: inputStyles.label,
                }),
              },
              InputWrapper: {
                styles: () => ({
                  label: inputStyles.label,
                }),
              },
              PasswordInput: {
                styles: () => ({
                  innerInput: inputStyles.input,
                }),
              },
              Button: {
                styles: () => buttonStyles,
              },
              Checkbox: {
                styles: () => checkboxStyles,
              },
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          {loading ? (
            <LoaderAnimation />
          ) : (
            <>{getLayout(<Component {...pageProps} />)}</>
          )}
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  );
}
