import { useEffect, useState } from "react";
import ResultTitle from "../components/IdentifyResultsPanel/ResultTitle";

const ResultAccordionGroup = ({ results }) => {
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

export default ResultAccordionGroup;
