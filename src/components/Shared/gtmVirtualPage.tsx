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
