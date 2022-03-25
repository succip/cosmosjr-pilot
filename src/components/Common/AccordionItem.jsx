import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const AccordionItem = (props) => {
  const { title, children } = props;

  return (
    <>
      <Accordion {...props} disableGutters={true}>
        <AccordionSummary>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionItem;
