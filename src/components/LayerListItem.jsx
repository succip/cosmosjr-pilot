import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const LayerListItem = ({ mapLayer }) => {
  const { layer } = mapLayer;
  const handleChange = () => {
    layer.visible = !layer.visible;
  };

  return (
    <FormGroup>
      <FormControlLabel disabled={!mapLayer.inScale} control={<Checkbox onChange={handleChange} />} label={layer.title} />
    </FormGroup>
  );
};

export default LayerListItem;
