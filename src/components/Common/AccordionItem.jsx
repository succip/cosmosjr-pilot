import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const AccordionItem = (props) => {
  const { title, children, onChange, onClick } = props;

  const onAccordionClick = () => {
    onClick();
    onChange();
  };

  return (
    <>
      <Accordion {...props} onChange={onAccordionClick} disableGutters={true}>
        <AccordionSummary>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionItem;
