import ResultAccordion from "../components/Common/ResultAccordion";

const AccordionGroupItemTest = ({ expanded, accordionId, handleChange, title }) => {
  return (
    <ResultAccordion expanded={expanded} onChange={() => handleChange(accordionId)} title={title}>
      test content here!
    </ResultAccordion>
  );
};

export default AccordionGroupItemTest;
