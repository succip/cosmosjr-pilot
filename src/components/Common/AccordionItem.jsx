import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const AccordionItem = (props) => {
  const { title, children, onChange } = props;
  const otherChange = () => {
    console.log("other changed!");
    onChange();
  };

  return (
    <>
      <Accordion {...props} onChange={otherChange} disableGutters={true}>
        <AccordionSummary>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionItem;
