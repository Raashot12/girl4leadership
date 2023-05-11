const IconButtonNext = ({ onclick }: { onclick?: () => void }) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onclick}
  >
    <path d="M0 0h48v48H0z" fill="none" />
    <g id="Shopicon">
      <g>
        <polygon points="14.586,9.413 29.171,23.999 14.586,38.585 17.414,41.413 34.829,23.999 17.414,6.585  " />
      </g>
    </g>
  </svg>
);
export default IconButtonNext;
