/* eslint-disable class-methods-use-this */
import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class AppDocument extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
//   {/* <Script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-R8DGDBFYYY"
//         ></Script>
//         <Script id="3">
//           dangerouslySetInnerHTML=
//           {{
//             __html: `window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

//           gtag('config', 'G-R8DGDBFYYY');`,
//           }}
//         </Script> */}
