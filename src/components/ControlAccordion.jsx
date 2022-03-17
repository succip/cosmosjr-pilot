import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ControlAccordion = ({ title, panel, accordionId, handleChange, expanded }) => {
  const accordionTitleStyle = {
    color: "#666666",
    textTransform: "uppercase",
  };

  return (
    <Accordion expanded={expanded} onChange={() => handleChange(accordionId)} disableGutters={true}>
      <AccordionSummary sx={accordionTitleStyle} expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>{panel}</AccordionDetails>
    </Accordion>
  );
};

export default ControlAccordion;
