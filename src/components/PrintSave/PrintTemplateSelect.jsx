import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { printLayouts } from "../../config/PrintConfig";

const PrintTemplateSelect = ({ setLayout }) => {
  return (
    <>
      <InputLabel>Template</InputLabel>
      <Select
        defaultValue="8.5x11 Landscape"
        label="Template"
        onChange={(e) => setLayout(e.target.value)}
      >
        {printLayouts.map((printLayout, index) => {
          return (
            <MenuItem key={index} value={printLayout}>
              {printLayout}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default PrintTemplateSelect;
