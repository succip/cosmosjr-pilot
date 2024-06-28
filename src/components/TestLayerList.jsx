import React, { useEffect, useRef } from "react";
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
  const layerRef = useRef(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (view) {
      layerRef.current = getLayerByName(layerName);
      layerRef.current.watch("visible", () => {
        setChecked(layerRef.current.visible);
      });
    }
  }, [view]);

  const handleVisibleChange = () => {
    layerRef.current.visible = !layerRef.current.visible;
    setChecked(layerRef.current.visible);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          disabled={false}
          control={<Checkbox size="small" checked={checked} onChange={handleVisibleChange} />}
          label={layerRef.current ? layerRef.current.title : "Unbound"}
        />
        <TestPanelButtons />
      </FormGroup>
    </div>
  );
};

export default TestPanelContent;
