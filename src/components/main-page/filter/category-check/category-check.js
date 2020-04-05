import React from "react";

import { StyledCategoryCheck } from "./category-check.styled";

export const CategoryCheck = ({ categoryCheck, onChange }) => {
  const categories = Object.keys(categoryCheck);

  const onCategoryChange = (e) => {
    const { name, checked } = e.target;
    onChange({ ...categoryCheck, [name]: checked });
  };

  return (
    <StyledCategoryCheck>
      {categories.map((category) => (
        <label htmlFor={`${category}-checkbox`} key={category}>
          <input
            type="checkbox"
            value={category}
            name={category}
            key={category}
            id={`${category}-checkbox`}
            onChange={onCategoryChange}
            checked={categoryCheck[category]}
          />
          {category}
        </label>
      ))}
    </StyledCategoryCheck>
  );
};
