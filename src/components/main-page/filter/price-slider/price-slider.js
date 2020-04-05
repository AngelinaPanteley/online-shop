import React from 'react';
import { StyledThumb, StyledTrack, StyledSlider, StyledSliderValues } from "./price-slider.styled";

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);
const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export const PriceSlider = ({min, max, value, onChange}) => (
  <>
  
  <StyledSlider
    min={min}
    max={max}
    value={value}
    defaultValue={[min, max]}
    minDistance={1}
    renderTrack={Track}
    renderThumb={Thumb}
    onChange={onChange}
    id="price-slider"
  />
  <StyledSliderValues><span>p. {value[0]}</span><span>p. {value[1]}</span></StyledSliderValues>
  </>
);
