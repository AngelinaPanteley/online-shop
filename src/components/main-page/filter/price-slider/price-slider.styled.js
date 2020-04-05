import styled from "styled-components";
import ReactSlider from "react-slider";

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 20px;
`;

export const StyledThumb = styled.div`
  height: 20px;
  line-height: 20px;
  width: 20px;
  font-size: 0;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  outline: none;
  color: #000;
`;

export const StyledTrack = styled.div`
  top: 50%;
  transform: translateY(-50%);
  height: 3px;
  background: ${(props) => (props.index === 1 ? "#000" : "#ccc")};
  border-radius: 20px;
`;

export const StyledSliderValues = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
