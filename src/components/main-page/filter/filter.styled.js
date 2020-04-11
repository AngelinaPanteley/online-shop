import styled from "styled-components";

export const StyledFilter = styled.aside`
  width: 20%;
  padding: 30px;
`;

export const StyledLabel = styled.label`
  font-size: 17px;
  margin-bottom: 10px;
  display: block;
`;

export const StyledClearFilter = styled.button`
  font-family: "Sen";
  border: none;
  background: none;
  outline: none;
  font-weight: 600;
  font-size: 16px;
  padding: 0;
  margin-top: 30px;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 2px solid black;
    left: 0;
    bottom: -3px;
  }
`;
