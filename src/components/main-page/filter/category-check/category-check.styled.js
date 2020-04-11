import styled from "styled-components";

export const StyledCategoryCheck = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledCheckbox = styled.label`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  &:before {
    content: "";
    width: 15px;
    height: 15px;
    border: 1px solid #000;
    border-radius: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
  }

  &:after {
    content: "";
    height: 10px;
    width: 5px;
    border: 2px solid #000;
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg);
    position: absolute;
    left: 6px;
    top: 4px;
    display: none;
  }

  input:checked + &:after {
    display: inline-block;
  }
`;
