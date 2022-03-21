import { useEffect, useState } from "react";
import ResultTitle from "../IdentifyResultsPanel/ResultTitle";

const AccordionGroup = ({ results }) => {
  const [curAccordionId, setCurAccordionId] = useState(null);

  const handleChange = (id) => {
    setCurAccordionId(curAccordionId === id ? null : id);
  };

  useEffect(() => {
    setCurAccordionId(curAccordionId);
  }, [curAccordionId]);

  useEffect(() => {
    setCurAccordionId(null);
  }, [results]);

  return results.map((result, index) => {
    return (
      <ResultTitle
        accordionId={index}
        key={index}
        result={result}
        handleChange={handleChange}
        expanded={curAccordionId === index}
      />
    );
  });
};

export default AccordionGroup;
