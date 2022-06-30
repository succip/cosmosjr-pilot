import Button from "@mui/material/Button";

const ShapeSelect = ({ onShapeClick, onUndoClick, onRedoClick }) => {
  return (
    <>
      <Button onClick={() => onShapeClick("polygon")}>Polygon</Button>
      <Button onClick={() => onShapeClick("polyline")}>Line</Button>
      <Button onClick={() => onShapeClick("point")}>Point</Button>
      <Button onClick={onUndoClick}>Undo</Button>
      <Button onClick={onRedoClick}>Redo</Button>
    </>
  );
};

export default ShapeSelect;
