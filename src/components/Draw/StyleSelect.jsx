import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";

const StyleSelect = ({ label, setSymbol, symbol, styleList }) => {
  const [style, setStyle] = useState(symbol.style);

  useEffect(() => {
    // symbol.style = style;
    let newSymbol = symbol.clone();
    newSymbol.style = style;
    setSymbol(newSymbol);
  }, [style]);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select value={style} onChange={({ target }) => setStyle(target.value)}>
        {styleList.map(({ styleName, style }) => {
          return (
            <MenuItem key={styleName} value={style}>
              {styleName}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default StyleSelect;
