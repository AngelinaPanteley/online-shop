import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.space[5]};
  height: 70px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.1);
`;

export const StyledLogo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.mono.black};
  text-decoration: none;
`;

export const StyledHeaderLinks = styled.nav`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mono.black};
    margin-left: ${({ theme }) => theme.space[4]};
  }
`;
