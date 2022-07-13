import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";

const OpacitySlider = ({ label = "Opacity", symbol, setSymbol }) => {
  const [opacity, setOpacity] = useState(symbol.color.a);
  const onSliderChange = ({ target }) => setOpacity(target.value);

  useEffect(() => {
    // symbol.color = { ...symbol.color, a: opacity };
    let newSymbol = symbol.clone();
    newSymbol.color = { ...symbol.color, a: opacity };
    setSymbol(newSymbol);
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
