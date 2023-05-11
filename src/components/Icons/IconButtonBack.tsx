/* eslint-disable import/newline-after-import */
import * as React from 'react';
const IconButtonBack = ({ onclick }: { onclick?: () => void }) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 48 48"
    xmlns="http://wwwIconButtonBack.w3.org/2000/svg"
    onClick={onclick}
  >
    <path d="M0 0h48v48H0z" fill="none" />
    <g id="Shopicon">
      <polygon points="30.586,6.586 13.171,24 30.586,41.414 33.414,38.586 18.829,24 33.414,9.414  " />
    </g>
  </svg>
);
export default IconButtonBack;
