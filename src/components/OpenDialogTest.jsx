import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Draggable from "react-draggable";
import MapLayerList from "./LayerListLegendPanel/MapLayerList";

const OpenDialogTest = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        {open ? "Close Widget" : "Open Widget"}
      </Button>
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper
          style={{
            position: "absolute",
            zIndex: 100,
            maxWidth: "400px",
            maxHeight: "500px",
            overflowY: "auto",
            padding: "16px",
            visibility: open ? "visible" : "hidden",
          }}
        >
          <div id="draggable-dialog-title" style={{ cursor: "move" }}>
            WIDGET TITLE
          </div>
          <MapLayerList />
        </Paper>
      </Draggable>
    </div>
  );
};

export default OpenDialogTest;
