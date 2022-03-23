import Typography from "@mui/material/Typography";
import ResultAccordion from "../Common/ResultAccordion";

const AccordionGroupItemTest = ({ expanded, accordionId, handleChange, data }) => {
  return (
    <ResultAccordion expanded={expanded} onChange={() => handleChange(accordionId)} title={data}>
      test content here!
    </ResultAccordion>
  );
};

export default AccordionGroupItemTest;
