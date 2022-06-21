import Button from "@mui/material/Button";
import { openDrawTool } from "../../js/Draw";

const DrawPanel = () => {
  const onDrawClick = () => {
    openDrawTool();
  };
  return (
    <>
      <Button onClick={onDrawClick}>Draw Polygon</Button>
    </>
  );
};

export default DrawPanel;
