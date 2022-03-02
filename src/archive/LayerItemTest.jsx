import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const LayerItemTest = ({ name }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label={name} />
    </FormGroup>
  );
};

export default LayerItemTest;
