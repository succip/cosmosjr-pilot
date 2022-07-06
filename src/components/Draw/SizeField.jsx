import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

const SizeField = ({ label, symbol, min = 1, max = 30 }) => {
  const [size, setSize] = useState(symbol.size);

  useEffect(() => {
    if (size === "") setSize(min);
    if (size > max) setSize(max);
    if (size < min) setSize(min);
    symbol.size = size;
  }, [size]);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextField
        value={size}
        type="number"
        InputProps={{ inputProps: { min: 1, max: 20, step: 1 } }}
        onChange={({ target }) => setSize(target.value)}
      />
    </>
  );
};

export default SizeField;
