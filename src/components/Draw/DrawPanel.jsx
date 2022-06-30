import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShapeSelect from "./ShapeSelect";
import SnapSelect from "./SnapSelect";
import SymbolSelect from "./SymbolSelect";

const DrawPanel = () => {
  const { sketchVM } = useSelector((state) => state.app);
  const [snappingEnabled, setSnappingEnabled] = useState(false);
  const [colour, setColour] = useState("Red");

  const onShapeClick = (shape) => sketchVM.create(shape);
  const onUndoClick = () => sketchVM.undo();
  const onRedoClick = () => sketchVM.redo();
  const onColourChange = ({ target }) => setColour(target.value);

  useEffect(() => {
    console.log("Changed to colour:", colour);
  }, [colour]);

  useEffect(() => {
    if (sketchVM) sketchVM.snappingOptions.enabled = snappingEnabled;
  }, [snappingEnabled]);

  return (
    <>
      <ShapeSelect
        onShapeClick={onShapeClick}
        onUndoClick={onUndoClick}
        onRedoClick={onRedoClick}
      />

      <SymbolSelect colour={colour} onColourChange={onColourChange} />
      <SnapSelect snappingEnabled={snappingEnabled} setSnappingEnabled={setSnappingEnabled} />
    </>
  );
};

export default DrawPanel;
