/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-globals */
export const changeWithoutReloading = (
  stateObject: any,
  title: string,
  url: string
) => {
  history.pushState(stateObject, title, url);
};
