import { useState } from "react";
import { useSelector } from "react-redux";
import ShapeSelect from "./ShapeSelect";
import SnapSelect from "./SnapSelect";

const DrawPanel = () => {
  const { sketchVM } = useSelector((state) => state.app);

  const onShapeClick = (shape) => sketchVM.create(shape);
  const onUndoClick = () => sketchVM.undo();
  const onRedoClick = () => sketchVM.redo();

  return (
    sketchVM && (
      <>
        <ShapeSelect
          onShapeClick={onShapeClick}
          onUndoClick={onUndoClick}
          onRedoClick={onRedoClick}
        />
        <SnapSelect snappingOptions={sketchVM.snappingOptions} />
      </>
    )
  );
};

export default DrawPanel;
