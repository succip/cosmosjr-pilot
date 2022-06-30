import FormGroup from "@mui/material/FormGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { colorList } from "../../config/DrawConfig";

const SymbolSelect = ({ color, onColorChange }) => {
  return (
    <>
      <FormGroup>
        <Select displayEmpty value={color} label="color" onChange={onColorChange}>
          {colorList.map(({ colorName, color }) => {
            return (
              <MenuItem key={colorName} value={color}>
                {colorName}
              </MenuItem>
            );
          })}
        </Select>
      </FormGroup>
    </>
  );
};

export default SymbolSelect;
