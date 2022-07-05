import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import { fillStyleList } from "../../config/DrawConfig";

const FillStyleSelect = ({ label, symbol }) => {
  const [fillStyle, setFillStyle] = useState("solid");

  useEffect(() => {
    symbol.style = fillStyle;
  }, [fillStyle]);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select value={fillStyle} onChange={({ target }) => setFillStyle(target.value)}>
        {fillStyleList.map(({ styleName, style }) => {
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

export default FillStyleSelect;
