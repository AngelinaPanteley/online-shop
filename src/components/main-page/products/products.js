import React from "react";

import { StyledProducts, StyledProduct, StyledName } from "./products.styled";

export const Products = ({ products, handleProductClick }) => {
  return (
    <StyledProducts>
      {products.map((product) => (
        <StyledProduct
          to={`/product/${product.name.split(" ").join("")}`}
          key={product.name}
          onClick={() => handleProductClick(product)}
        >
          <img src={product.image} alt={product.name} />
          <StyledName>{product.name}</StyledName>
          <p>p. {product.price}</p>
        </StyledProduct>
      ))}
    </StyledProducts>
  );
};
