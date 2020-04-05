import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { StyledMainPage } from "./main-page.styled";
import { Filter } from "./filter/filter";
import { Products } from "./products/products";

export const MainPage = ({ storeData, handleProductClick }) => {
  const getProductsInCategories = useCallback(
    (categories) => {
      const productArray = [];
      categories.forEach((category) => {
        storeData[category] &&
          productArray.push(...Object.values(storeData[category].products));
      });
      return productArray;
    },
    [storeData]
  );

  const filterProductsByPrices = useCallback((products, priceRange) => {
    return products.filter((product) => {
      const { price } = product;
      const [minPrice, maxPrice] = priceRange;
      return price >= minPrice && price <= maxPrice;
    });
  }, []);

  const getPrices = useCallback((products) => {
    return products.map((product) => product.price);
  }, []);

  const location = useLocation();
  const categories = useMemo(() => Object.keys(storeData), [storeData]);
  const allProducts = useMemo(() => getProductsInCategories(categories), [
    categories,
    getProductsInCategories,
  ]);
  const [prices, setPrices] = useState(getPrices(allProducts));
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryCategories = query.getAll("category");
    const queryPrice = query.get("price");
    
    if (queryCategories.length) {
      const priceRange = queryPrice && queryPrice.split("-");
      const filteredByCategory = getProductsInCategories(queryCategories);
      const filteredByPrice = priceRange
        ? filterProductsByPrices(filteredByCategory, priceRange)
        : filteredByCategory;

      setProducts(filteredByPrice);
      setPrices(getPrices(filteredByCategory));
    } else {
      setProducts([]);
      setPrices([]);
    }
  }, [
    location.search,
    getProductsInCategories,
    getPrices,
    filterProductsByPrices,
  ]);

  return (
    <StyledMainPage>
      <Filter categories={categories} prices={prices} />
      <Products products={products} handleProductClick={handleProductClick} />
    </StyledMainPage>
  );
};
