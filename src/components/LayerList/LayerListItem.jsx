import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";

const LayerListItem = ({ mapLayer }) => {
  const { layer } = mapLayer;
  const [checked, setChecked] = useState(layer.visible);
  const handleChange = () => {
    layer.visible = !layer.visible;
    setChecked(layer.visible);
  };

  useEffect(() => {
    console.log("something changed");
  }, [mapLayer.layer]);

  return (
    <FormGroup>
      <FormControlLabel
        disabled={!mapLayer.inScale}
        control={<Checkbox size="small" checked={checked} onChange={handleChange} />}
        label={layer.title}
      />
    </FormGroup>
  );
};

export default LayerListItem;
