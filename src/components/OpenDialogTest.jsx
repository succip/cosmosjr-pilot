import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Draggable from "react-draggable";
import { styled } from "@mui/material/styles";

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper style={{ position: "absolute", zIndex: 100 }}>
        <div id="modal-header">{/* Header for dragging */}</div>
      </Paper>
    </Draggable>
  );
}

const OpenDialogTest = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper style={{ position: "absolute", zIndex: 100 }}>
          <div id="modal-header">{/* Header for dragging */}</div>
        </Paper>
      </Draggable>
    </div>
  );
};

export default OpenDialogTest;
