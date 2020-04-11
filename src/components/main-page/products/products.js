import React from "react";

import {
  StyledProducts,
  StyledProduct,
  StyledName,
  StyledImage,
  StyledHoverImage,
  StyledImageWrapper,
} from "./products.styled";

export const Products = ({ products }) => {
  return (
    <StyledProducts>
      {products.map((product) => (
        <StyledProduct
          to={`/product/product${product.id}`}
          key={product.name}
        >
          <StyledImageWrapper>
            <StyledImage src={product.image} alt={product.name} />
            <StyledHoverImage src={product.hoverImage} alt={product.name} />
          </StyledImageWrapper>
          <StyledName>{product.name}</StyledName>
          <p>p. {product.price}</p>
        </StyledProduct>
      ))}
    </StyledProducts>
  );
};
