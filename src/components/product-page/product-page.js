import React from "react";

import { StyledProductWrapper, StyledProductInfo, StyledProductPrice, StyledForm, StyledQuantityInput } from "./product-page.styled";

export const ProductPage = ({ product }) => {
  if (!product) return null;

  return (
    <StyledProductWrapper>
      <img src={product.image} alt={product.name} />
      <StyledProductInfo>
        <h3>{product.name}</h3>
        <StyledProductPrice>p. {product.price}</StyledProductPrice>
        <p>{product.description}</p>
        <StyledForm>
          <label for="quantity">Quantity:</label>
          <StyledQuantityInput type="number" id="quantity" />
          <button type="submit">Add to Basket</button>
        </StyledForm>
      </StyledProductInfo>
    </StyledProductWrapper>
  );
};
