import React, { useState, useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { BasketContext } from "../app/app";

import {
  StyledProductWrapper,
  StyledProductInfo,
  StyledProductPrice,
  StyledForm,
  StyledQuantityInput,
} from "./product-page.styled";

export const ProductPage = ({ storeData }) => {
  const { productId } = useParams();
  const allProducts = useMemo(()=> {
    let products = {};
    for(let category in storeData) {
      products = { ...products, ...storeData[category].products};
    }
    return products;
  }, [storeData]);
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(allProducts[productId]);
  const basketContext = useContext(BasketContext);
  
  useEffect(() => {
    setProduct(allProducts[productId]);
  }, [productId, allProducts]);

  const onQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const basketProduct = {
      ...product,
      quantity,
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
          <label htmlFor="quantity">Quantity:</label>
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
