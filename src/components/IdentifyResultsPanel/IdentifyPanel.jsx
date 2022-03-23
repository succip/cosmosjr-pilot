import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccordionGroup from "../Common/AccordionGroup";
import ResultAccordionGroup from "../Common/ResultAccordionGroup";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);

  useEffect(() => {
    setIdResults(identifyResults);
  }, [identifyResults]);

  return (
    <>
      <ResultAccordionGroup results={idResults} />
    </>
  );
};

export default IdentifyPanel;
