import React from "react";
import Typography from "@mui/material/Typography";

const ResultTitle = ({ result }) => {
  const { layerName, displayValue } = result;
  return (
    <>
      <Typography>
        {layerName} {displayValue && displayValue}
      </Typography>
    </>
  );
};

export default ResultTitle;
