import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
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
      <Draggable>
        <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent}>
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Widget Test
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Here's where the widget would be, wouldn't that be cool?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose}>Add More shit</Button>
          </DialogActions>
        </Dialog>
      </Draggable>
    </div>
  );
};

export default OpenDialogTest;
