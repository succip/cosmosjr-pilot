import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SnapSelect = ({ snappingEnabled, setSnappingEnabled }) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          label="Snapping"
          control={
            <Switch
              checked={snappingEnabled}
              onChange={() => setSnappingEnabled(!snappingEnabled)}
            />
          }
        />
      </FormGroup>
    </>
  );
};

export default SnapSelect;
