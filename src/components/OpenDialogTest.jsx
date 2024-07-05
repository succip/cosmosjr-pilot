import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import MapLayerList from "./LayerListLegendPanel/MapLayerList";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const OpenDialogTest = () => {
  const [open, setOpen] = useState(false);

  const onResize = () => {
    console.log("resized");
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        {open ? "Close Widget" : "Open Widget"}
      </Button>

      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 350,
        }}
      >
        <Paper
          style={{
            visibility: open ? "visible" : "hidden",
            height: 500,
            width: 300,
            backgroundColor: "green",
          }}
        >
          <MapLayerList />
        </Paper>
      </Rnd>
    </div>
  );
};

export default OpenDialogTest;
