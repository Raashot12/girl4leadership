// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from 'react';
// import TagManager from 'react-gtm-module';

// export const useGoogleTagManager = () => {
//   const [initialized, setInitialized] = useState(false);
//   const triggerEvent = (eventName: string, eventData?: any) => {
//     if (initialized) {
//       TagManager.dataLayer({
//         event: eventName,
//         ...eventData,
//       });
//     }
//   };
//   useEffect(() => {
//     TagManager.initialize({
//       gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
//       dataLayer: { initialized: false },
//     });
//     setInitialized(false);
//   }, []);
//   return { triggerEvent, initialized };
// };
