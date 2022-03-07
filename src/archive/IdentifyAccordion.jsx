import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const IdentifyAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Identify</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <p>[results placeholder]</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default IdentifyAccordion;
