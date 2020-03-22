import styled from "styled-components";

export const StyledProductWrapper = styled.main`
  display: flex;
  padding: ${({theme}) => `${theme.space[6]} ${theme.space[5]}`};
  align-items: center;

  img {
    width: 60%;
  }
`;

export const StyledProductInfo = styled.div`
  width: 40%;
  padding: ${({theme}) => theme.space[6]};

  h3 {
    font-size: ${({theme})=> theme.fontSizes[5]};
  }
`;

export const StyledProductPrice = styled.p`
  font-size: ${({theme})=> theme.fontSizes[4]};
  font-weight: ${({theme})=> theme.fontWeights.bold};
`;

export const StyledForm = styled.form`
  margin-top: ${({theme}) => theme.space[6]};
  display: flex;
  flex-direction: column;

  label {
    font-weight: ${({theme})=> theme.fontWeights.bold};
    margin-bottom: ${({theme}) => theme.space[4]};
  }

  button {
    margin-top: ${({theme}) => theme.space[5]};;
    background: ${({theme}) => theme.colors.mono.black};
    color: ${({theme}) => theme.colors.mono.white};
    padding: ${({theme}) => `${theme.space[4]} ${theme.space[5]}`};
    width: 250px;
    font-family: ${({theme})=> theme.fonts.body};
    outline: none;
    border: none;
    cursor: pointer;
    font-size: ${({theme})=> theme.fontSizes[2]};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const StyledQuantityInput = styled.input`
  width: 120px;
  height: ${({theme}) => theme.space[6]};
  line-height: ${({theme}) => theme.space[6]};
  border: 1px solid ${({theme}) => theme.colors.mono.gray};
  padding-left: ${({theme}) => theme.space[4]};
  font-size: ${({theme})=> theme.fontSizes[3]};
  outline: none;
  font-family: ${({theme})=> theme.fonts.body};
`;