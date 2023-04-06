const NextArrow = ({ onclick }: { onclick?: () => void }) => (
  <svg
    width="10"
    height="20"
    onClick={onclick}
    viewBox="0 0 5 9"
    fill="none"
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M4.20711 4.49995L0 0.292847V8.70706L4.20711 4.49995Z"
      fill="#d5d3d3"
    />
  </svg>
);
export default NextArrow;
