import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledProducts = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const StyledProduct = styled(Link)`
  padding: 30px;
  width: calc(100% / 3);
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
  }
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
