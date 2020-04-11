import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledProducts = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledHoverImage = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  min-width: 100%;
  min-height: 100%;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &:hover {
    ${StyledHoverImage} {
      display: inline-block;
    }
  }
`;

export const StyledProduct = styled(Link)`
  padding: 30px;
  width: calc(100% / 3);
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mono.black};
  text-decoration: none;
`;

export const StyledName = styled.p`
  position: relative;

  &:after {
    position: absolute;
    width: 20px;
    height: 1px;
    content: "";
    left: 50%;
    top: 150%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.mono.black};
  }
`;
