import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Star = ({ star }) => {
  return (
    <div style={{ color: '#f1c40f' }}>
      <span>
        {star === 0 ? (
          <></>
        ) : star >= 1 ? (
          <BsStarFill />
        ) : star >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {star === 0 ? (
          <></>
        ) : star >= 2 ? (
          <BsStarFill />
        ) : star >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {star === 0 ? (
          <></>
        ) : star >= 3 ? (
          <BsStarFill />
        ) : star >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {star === 0 ? (
          <></>
        ) : star >= 4 ? (
          <BsStarFill />
        ) : star >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {star === 0 ? (
          <></>
        ) : star === 5 ? (
          <BsStarFill />
        ) : star >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    </div>
  );
};

export default Star;
