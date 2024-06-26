import { Button } from "@mui/material";
import { getLayerByName } from "../js/Layers";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useSelector } from "react-redux";

const TestPanelGrabButton = () => {
  function onButtonClick() {
    const bikeRoutesLayer = getLayerByName("Bike Routes");
    bikeRoutesLayer.visible = true;
  }
  return (
    <div>
      <Button variant="contained" onClick={onButtonClick}>
        Make Bike Routes Visible
      </Button>
    </div>
  );
};

export default TestPanelGrabButton;
