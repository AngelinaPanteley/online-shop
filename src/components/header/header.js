import React from "react";

import { StyledHeader, StyledLogo, StyledHeaderLinks } from "./header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo to="/">Totte Shop</StyledLogo>
      <StyledHeaderLinks>
        <a href="/">Login</a>
        <a href="/">Basket</a>
      </StyledHeaderLinks>
    </StyledHeader>
  );
};
