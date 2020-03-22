import React, { useState, useContext } from "react";

import { BasketContext } from "../app/app";

import {
  StyledProductWrapper,
  StyledProductInfo,
  StyledProductPrice,
  StyledForm,
  StyledQuantityInput
} from "./product-page.styled";

export const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const basketContext = useContext(BasketContext);
  if (!product) return null;

  const onQuantityChange = event => {
    setQuantity(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    const basketProduct = {
      ...product,
      quantity
    };

    basketContext.addToBasket(basketProduct);
  };

  return (
    <StyledProductWrapper>
      <img src={product.image} alt={product.name} />
      <StyledProductInfo>
        <h3>{product.name}</h3>
        <StyledProductPrice>p. {product.price}</StyledProductPrice>
        <p>{product.description}</p>
        <StyledForm>
          <label for="quantity">Quantity:</label>
          <StyledQuantityInput
            type="number"
            id="quantity"
            onChange={onQuantityChange}
            value={quantity}
          />
          <button type="submit" onClick={onSubmit}>
            Add to Basket
          </button>
        </StyledForm>
      </StyledProductInfo>
    </StyledProductWrapper>
  );
};
