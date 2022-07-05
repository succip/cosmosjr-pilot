import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SnapSelect = ({ snappingOptions }) => {
  const [snappingEnabled, setSnappingEnabled] = useState(false);

  useEffect(() => {
    snappingOptions.enabled = snappingEnabled;
  }, [snappingEnabled]);
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
