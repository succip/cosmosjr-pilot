import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { colorList } from "../../config/DrawConfig";
import { useState, useEffect } from "react";

const ColorSelect = ({ label = "Color", symbol, setSymbol, outline = false }) => {
  const [color, setColor] = useState(colorList[0].color);

  useEffect(() => {
    let newSymbol = symbol.clone();

    if (outline) {
      newSymbol.outline.color = color;
    } else {
      newSymbol.color = { ...color, a: newSymbol.color.a };
    }

    setSymbol(newSymbol);
  }, [color]);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select value={color} label={label} onChange={({ target }) => setColor(target.value)}>
        {colorList.map(({ colorName, color }) => {
          return (
            <MenuItem key={colorName} value={color}>
              {colorName}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default ColorSelect;
