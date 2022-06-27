import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { openDrawTool } from "../../js/Draw";

const DrawPanel = () => {
  const { view } = useSelector((state) => state.app);
  const [shape, setShape] = useState("polygon");
  const [snappingEnabled, setSnappingEnabled] = useState(true);

  useEffect(() => {
    if (view) {
      openDrawTool({ shape, snappingEnabled });
    }
  }, [shape, snappingEnabled]);

  return (
    <>
      <Button onClick={() => setShape("polygon")}>Polygon</Button>
      <Button onClick={() => setShape("polyline")}>Line</Button>
      <Button onClick={() => setShape("point")}>Point</Button>
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

export default DrawPanel;
