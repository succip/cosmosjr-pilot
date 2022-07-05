import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TabPanel from "../Common/TabPanel";
import PolygonToolbox from "./PolygonToolbox";
import PolylineToolbox from "./PolylineToolbox";
import SnapSelect from "./SnapSelect";

const DrawPanel = () => {
  const [shape, setShape] = useState(undefined);
  const [drawToolbox, setDrawToolbox] = useState("polygon");
  const { sketchVM } = useSelector((state) => state.app);

  const onShapeToggleClick = (event, shape) => {
    setShape(shape);
    setDrawToolbox(shape);
  };

  useEffect(() => {
    if (sketchVM && shape) {
      sketchVM.create(shape);
      sketchVM.on("create", ({ state }) => {
        if (state === "complete") setShape(undefined);
      });
    }
  }, [shape]);

  return (
    <>
      <ToggleButtonGroup value={shape} exclusive onChange={onShapeToggleClick}>
        <ToggleButton value="polygon">Polygon</ToggleButton>
        <ToggleButton value="polyline">Line</ToggleButton>
        <ToggleButton value="point">Point</ToggleButton>
      </ToggleButtonGroup>

      {sketchVM && (
        <>
          <SnapSelect snappingOptions={sketchVM.snappingOptions} />
          <TabPanel value={drawToolbox} index={"polygon"}>
            <PolygonToolbox symbol={sketchVM.polygonSymbol} />
          </TabPanel>
          <TabPanel value={drawToolbox} index={"polyline"}>
            <PolylineToolbox symbol={sketchVM.polylineSymbol} />
          </TabPanel>
        </>
      )}
    </>
  );
};

export default DrawPanel;
