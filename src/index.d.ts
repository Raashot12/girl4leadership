/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    dataLayer: any; // 👈️ turn off type checking
    gtag: any;
  }
}
