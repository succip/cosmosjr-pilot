import Button from "@mui/material/Button";
import { openDrawTool } from "../../js/Draw";

const DrawPanel = () => {
  const onDrawClick = (shape) => {
    openDrawTool(shape);
  };

  return (
    <>
      <Button onClick={() => onDrawClick("polygon")}>Polygon</Button>
      <Button onClick={() => onDrawClick("polyline")}>Line</Button>
      <Button onClick={() => onDrawClick("point")}>Point</Button>
    </>
  );
};

export default DrawPanel;
