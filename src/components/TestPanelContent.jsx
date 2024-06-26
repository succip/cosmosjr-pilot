import React, { useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getLayerByName } from "../js/Layers";
import TestPanelButtons from "./TestPanelButtons";

const layerName = "Bike Routes";

const TestPanelContent = () => {
  const { view } = useSelector((state) => state.app);
  const [layer, setLayer] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (view) {
      const featureLayer = getLayerByName(layerName);
      // featureLayer.watch("visible", () => {
      //   if (layer) layer.visible = featureLayer.visible;
      //   setChecked();
      // });
      setLayer(featureLayer);
    }
  }, [view]);

  const handleVisibleChange = () => {
    // layer.visible = !layer.visible;
    const updatedLayer = { ...layer, visible: !layer.visible };
    setLayer(updatedLayer);
    setChecked(!checked);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          disabled={false}
          control={<Checkbox size="small" checked={checked} onChange={handleVisibleChange} />}
          label={layer ? layer.title : "Unbound"}
        />
      </FormGroup>
      <TestPanelButtons />
    </div>
  );
};

export default TestPanelContent;
