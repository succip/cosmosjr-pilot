import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShapeSelect from "./ShapeSelect";
import SnapSelect from "./SnapSelect";
import SymbolSelect from "./SymbolSelect";

const DrawPanel = () => {
  const { sketchVM } = useSelector((state) => state.app);
  const [snappingEnabled, setSnappingEnabled] = useState(false);
  const [color, setColor] = useState(0, 0, 0);

  const onShapeClick = (shape) => sketchVM.create(shape);
  const onUndoClick = () => sketchVM.undo();
  const onRedoClick = () => sketchVM.redo();
  const onColorChange = ({ target }) => setColor(target.value);

  useEffect(() => {}, [color]);

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

      <SymbolSelect color={color} onColorChange={onColorChange} />
      <SnapSelect snappingEnabled={snappingEnabled} setSnappingEnabled={setSnappingEnabled} />
    </>
  );
};

export default DrawPanel;
