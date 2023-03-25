/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const gtmVirtualPageView = (rest: any) => {
  if (window?.dataLayer) {
    window?.dataLayer?.push({
      event: 'VirtualPageView',
      ...rest,
    });
  }
};
export const logEvent = (eventName: string, payload = {}) => {
  try {
    window.gtag('event', eventName, payload);
  } catch (e) {
    console.log(e);
  }
};
export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};
