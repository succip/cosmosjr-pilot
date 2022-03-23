import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const resultTitleStyle = {
  fontWeight: "medium",
  textDecoration: "underline",
};

const ResultAccordion = ({
  children,
  title,
  expanded,
  onChange = undefined,
  style = resultTitleStyle,
}) => {
  return (
    <>
      <Accordion expanded={expanded} onChange={onChange} disableGutters={true}>
        <AccordionSummary>
          <Typography sx={style}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default ResultAccordion;
