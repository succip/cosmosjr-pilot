import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ControlAccordion = ({ title, panel, accordionId, handleChange, expanded }) => {
  return (
    <Accordion expanded={expanded} onChange={() => handleChange(accordionId)} disableGutters={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{panel}</AccordionDetails>
    </Accordion>
  );
};

export default ControlAccordion;
