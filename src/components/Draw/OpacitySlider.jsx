import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";

const OpacitySlider = ({ label = "Opacity", symbol }) => {
  const [opacity, setOpacity] = useState(symbol.color.a);
  const onSliderChange = ({ target }) => setOpacity(target.value);

  useEffect(() => {
    symbol.color = { ...symbol.color, a: opacity };
  }, [opacity]);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Slider
        value={opacity}
        min={0}
        max={1}
        step={0.1}
        marks
        valueLabelDisplay="auto"
        onChange={onSliderChange}
      />
    </>
  );
};

export default OpacitySlider;
