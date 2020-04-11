import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { StyledFilter, StyledLabel, StyledClearFilter } from "./filter.styled";
import { PriceSlider } from "./price-slider/price-slider";
import { CategoryCheck } from "./category-check/category-check";

export const Filter = ({ categories, prices, handleClearFilter }) => {
  const history = useHistory();
  const minPrice = prices.length && Math.min.apply(null, prices);
  const maxPrice = prices.length && Math.max.apply(null, prices);
  const categoryCheckObject = {};

  categories.forEach((category) => {
    categoryCheckObject[category] = true;
  });

  const updatePath = useCallback(
    (categoryCheck, priceRanges) => {
      const [minPrice, maxPrice] = priceRanges;
      let path = `/`;

      if (minPrice && maxPrice) {
        path += `?price=${minPrice}-${maxPrice}`;
      }

      Object.keys(categoryCheck).forEach((category) => {
        if (categoryCheck[category]) {
          path += path.includes("?") ? "&" : "?";
          path += `category=${category}`;
        }
      });
      history.push(path);
    },
    [history]
  );

  const [categoryCheck, setCategoryCheck] = useState(categoryCheckObject);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [showClearFilter, setShowClearFilter] = useState(false);

  const handlePriceChange = useCallback(
    (range) => {
      updatePath(categoryCheck, range);
      setPriceRange(range);
      setShowClearFilter(true);
    },
    [updatePath, categoryCheck]
  );

  const handleCategoryChange = useCallback(
    (newCategoryCheck) => {
      updatePath(newCategoryCheck, priceRange);
      setCategoryCheck(newCategoryCheck);
      setShowClearFilter(true);
    },
    [updatePath, priceRange]
  );

  const clearFilter = useCallback(
    () => {
      setCategoryCheck(categoryCheckObject);
      setPriceRange([minPrice, maxPrice]);
      setShowClearFilter(false);
      handleClearFilter();
    },
    [categoryCheckObject, handleClearFilter, minPrice, maxPrice]
  );

  useEffect(() => {
    updatePath(categoryCheck, priceRange);
  }, [updatePath, categoryCheck, priceRange]);

  useEffect(() => {
    setPriceRange(minPrice && maxPrice ? [minPrice, maxPrice] : []);
  }, [minPrice, maxPrice]);

  return (
    <StyledFilter>
      <StyledLabel>Category:</StyledLabel>
      <CategoryCheck
        categoryCheck={categoryCheck}
        onChange={handleCategoryChange}
      />
      {!!priceRange.length && (
        <>
          <StyledLabel>Price:</StyledLabel>
          <PriceSlider
            min={minPrice}
            max={maxPrice}
            value={priceRange}
            onChange={handlePriceChange}
          />
        </>
      )}
      {showClearFilter && <StyledClearFilter onClick={clearFilter}>Clear Filter</StyledClearFilter>}
    </StyledFilter>
  );
};
