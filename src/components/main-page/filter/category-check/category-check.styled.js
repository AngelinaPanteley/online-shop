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
  display: inline-block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 5px;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 2px;
    border: 1px solid #000;
    margin-right: 5px;
    position: absolute;
    top: 3px;
    left: 0;
  }

  &:after {
    content: "";
    display: inline-block;
    border: 2px solid #000;
    border-top: 0;
    border-left: 0;
    width: 6px;
    height: 12px;
    transform: rotate(45deg);
    opacity: 0;
    position: absolute;
    top: 3px;
    left: 4px;
  }

  input:checked + &:after {
    opacity: 1;
  }
`;
