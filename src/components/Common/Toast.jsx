import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const Toast = ({
  open,
  onClose,
  message,
  anchorOrigin = { horizontal: "center", vertical: "bottom" },
}) => {
  const handleClose = () => {
    onClose();
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={4000}
      open={open}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default Toast;
