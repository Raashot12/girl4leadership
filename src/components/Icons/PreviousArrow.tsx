const PreviousArrow = ({ onclick }: { onclick: () => void }) => (
  <svg
    width="10"
    height="20"
    onClick={onclick}
    viewBox="0 0 5 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M0.792969 4.50007L5.00007 8.70718L5.00008 0.292969L0.792969 4.50007Z"
      fill="#d5d3d3"
    />
  </svg>
);
export default PreviousArrow;
