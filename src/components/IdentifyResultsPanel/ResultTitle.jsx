import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const ResultTitle = ({ result }) => {
  const { layerName, isLotLayer, displayValue } = result;
  return (
    <>
      <Accordion>
        <AccordionSummary>
          <Typography>
            {layerName} {displayValue && displayValue}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{isLotLayer && displayValue}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ResultTitle;
