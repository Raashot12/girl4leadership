import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        const { id, bgImg, isSale, name, amount, categories } = product;
        return (
          <div key={id}>
            <h2>{name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
