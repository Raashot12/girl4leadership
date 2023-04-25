import React, { useState, useEffect } from 'react';

const Categories = ({ categories, filterItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      {categories.map((category, index) => (
        <button
          onClick={() => {
            filterItems(category);
            setSelectedIndex(index);
          }}
          className={`${selectedIndex === index && 'activee'}`}
          key={index}
          style={{ margin: '0 10px' }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
