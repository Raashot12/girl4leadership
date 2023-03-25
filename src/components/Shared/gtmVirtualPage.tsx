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
