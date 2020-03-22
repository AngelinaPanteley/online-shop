import React from "react";

import { StyledMainPage, StyledProducts, StyledProduct, StyledFilter, StyledName } from "./main-page.styled";

export const MainPage = ({ categories }) => {
  const products = [];

  for (let category in categories) {
    const categoryProducts = categories[category].products;

    for (let product in categoryProducts) {
      products.push(categoryProducts[product]);
    }
  }

  console.log(products);
  return (
    <StyledMainPage>
      <StyledFilter />
      <StyledProducts>
        {products.map(product => (
          <StyledProduct key={product.name}>
            <img src={product.image} alt={product.name} />
            <StyledName>{product.name}</StyledName>
            <p>p. {product.price}</p>
          </StyledProduct>
        ))}
      </StyledProducts>
    </StyledMainPage>
  );
};
