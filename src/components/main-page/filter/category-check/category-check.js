import React from "react";

import { StyledCategoryCheck, StyledCheckbox, StyledInput } from "./category-check.styled";

export const CategoryCheck = ({ categoryCheck, onChange }) => {
  const categories = Object.keys(categoryCheck);

  const onCategoryChange = (e) => {
    const { name, checked } = e.target;
    onChange({ ...categoryCheck, [name]: checked });
  };

  return (
    <StyledCategoryCheck>
      {categories.map((category) => (
        <React.Fragment key={category}>
          <StyledInput
            type="checkbox"
            value={category}
            name={category}
            key={category}
            id={`${category}-checkbox`}
            onChange={onCategoryChange}
            checked={categoryCheck[category]}
          />
          <StyledCheckbox htmlFor={`${category}-checkbox`}>
            {category}
          </StyledCheckbox>
        </React.Fragment>
      ))}
    </StyledCategoryCheck>
  );
};
