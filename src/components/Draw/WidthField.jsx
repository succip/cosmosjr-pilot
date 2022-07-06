import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

const WidthField = ({ label, symbol, min = 0, max = 20 }) => {
  const [width, setWidth] = useState(symbol.width);

  useEffect(() => {
    if (width === "") setWidth(min);
    if (width > max) setWidth(max);
    if (width < min) setWidth(min);
    symbol.width = width;
  }, [width]);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextField
        value={width}
        type="number"
        InputProps={{ inputProps: { min: 1, max: 20, step: 1 } }}
        onChange={({ target }) => setWidth(target.value)}
      />
    </>
  );
};

export default WidthField;
