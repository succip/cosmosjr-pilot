import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LayerLegendPanel from "../components/LayerLegendPanel";

const LayerLegendAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Layers & Legend</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <LayerLegendPanel />
      </AccordionDetails>
    </Accordion>
  );
};

export default LayerLegendAccordion;
