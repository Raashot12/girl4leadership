/* eslint-disable @typescript-eslint/no-explicit-any */
import AOS from 'aos';
import { useEffect } from 'react';

interface Iprops<T> {
  [key: string]: T;
}

const AOSInit = (props: Iprops<string | boolean>) => {
  useEffect(() => {
    AOS.init({
      ...props,
      once: true,
    });
  }, []);
};

export default AOSInit;
