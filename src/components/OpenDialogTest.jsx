import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import MapLegend from "./LayerListLegendPanel/MapLegend";
import { Rnd } from "react-rnd";

const OpenDialogTest = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const onResize = () => {
    console.log("resized");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        {open ? "Close Widget" : "Open Widget"}
      </Button>

      <Rnd
        default={{
          x: -170,
          y: 30,
          height: 500,
          width: 350,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#FFF",
          visibility: open ? "visible" : "hidden",
          zIndex: 10,
        }}
        dragHandleClassName="handle"
        minHeight={450}
        maxHeight={1000}
        minWidth={350}
        maxWidth={500}
        bounds={".viewDiv"}
      >
        <span className="handle" style={{ cursor: "move" }}>
          LAYER LIST
        </span>
        <Paper elevation={0} style={{ overflow: "auto" }}>
          <MapLegend />
        </Paper>
      </Rnd>
    </div>
  );
};

export default OpenDialogTest;
