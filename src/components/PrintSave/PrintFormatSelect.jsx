import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { printFormats } from "../../config/PrintConfig";

const PrintFormatSelect = ({ setFormat }) => {
  return (
    <>
      <InputLabel>Format</InputLabel>
      <Select defaultValue="pdf" label="Format" onChange={(e) => setFormat(e.target.value)}>
        {printFormats.map((printFormat, index) => {
          return (
            <MenuItem key={index} value={printFormat}>
              {printFormat.toUpperCase()}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default PrintFormatSelect;
