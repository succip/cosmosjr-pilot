import FormGroup from "@mui/material/FormGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const colours = ["Red", "Blue", "Green"];

const SymbolSelect = ({ colour, onColourChange }) => {
  return (
    <>
      <FormGroup>
        <Select value={colour} label="Colour" onChange={onColourChange}>
          {colours.map((colour, index) => {
            return (
              <MenuItem key={index} value={colour}>
                {colour}
              </MenuItem>
            );
          })}
        </Select>
      </FormGroup>
    </>
  );
};

export default SymbolSelect;
