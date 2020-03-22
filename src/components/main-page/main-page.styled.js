import styled from "styled-components";

export const StyledMainPage = styled.main`
  display: flex;
`;

export const StyledFilter = styled.aside`
  width: 20%;
`;

export const StyledProducts = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const StyledProduct = styled.div`
  padding: 30px;
  width: calc(100% / 3);
  text-align: center;

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
